import React from 'react'

type StatusProps={
    status:'loading' | 'success' | 'error'
}

function Status(props:StatusProps) {

    let message;

    if(props.status==='loading'){
        message='Loading...'
    }
    else if(props.status==='success'){
        message='success...'
    }
    else{
        message='error...'
    }
  return (
    <div>
        {message}
    </div>
  )
}

export default Status