import Button from "./Button";
import {run} from "../aws/sample"


import React from 'react'

const AwsButton = () => {
  return (
    <Button onClick={run}> aws예시 </Button>
  )
}

export default AwsButton