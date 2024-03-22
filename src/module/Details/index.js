import React, { useEffect } from 'react';
import { useState } from "react";
import { BackButton, DetailsRow, Loading, NotFound, ValueData } from "./style";

const Details = (props) => {
  const { todoId, handleGoBack } = props
  const [loading, setLoading] = useState(true)
  const [todoData, setTodoData] = useState({})

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((res) => res.json())
        .then((result) => {
          setTodoData(result);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
  }, [todoId]);

  return (
      <>
          {
              loading ?
                  <Loading>Loading.....</Loading> :
                  !todoData?.id ?
                      <NotFound>404 Not Found</NotFound> :
                      <>
                          <DetailsRow>Task ID&nbsp;:&nbsp;<ValueData>{todoData?.id}</ValueData></DetailsRow>
                          <DetailsRow>Task title&nbsp;:&nbsp;<ValueData>{todoData?.title}</ValueData></DetailsRow>
                          <DetailsRow>Is complete?&nbsp;:&nbsp;<ValueData>{todoData?.completed ? 'True' : 'False'}</ValueData></DetailsRow>
                          <BackButton
                              onClick={handleGoBack}
                          >
                              {'< Go back'}
                          </BackButton>
                      </>
          }
      </>
  )
}

export default Details;
  