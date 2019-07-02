import React from 'react'
import Part from './Part';

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part part={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part part={props.parts[2].name} ex={props.parts[2].exercises} />
    </>
  )
}

export default Content
