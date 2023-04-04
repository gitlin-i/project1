import React, { useState } from 'react'
import { useAppSelector } from '../hook/hooks'
import { selectRoomsState } from '../reducer/roomsReducers'

const withLoading = <P extends object>(
    WrappedComponent : React.ComponentType<P>,
    ) => {
  return function WithLoading(props :P){
    const [loading, setloading] = useState(useAppSelector(selectRoomsState))
    if (loading !== "succeeded") {
        setloading("loading")    
    }
    else{
        setloading("succeeded")
    }
    return(
        <WrappedComponent loading={loading} {...props} />
    )
  }
  
}

export default withLoading;