import React from 'react'
import {useRouteError}from 'react-router-dom'
const NotFoundPage = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>NotFoundPage</div>
  )
}

export default NotFoundPage