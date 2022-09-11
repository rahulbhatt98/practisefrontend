import React from 'react'

const ChildComponent = (props) => {
    props.parentFun("hello");
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent