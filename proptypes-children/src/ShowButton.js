import React from 'react';

const ShowButton = (props) => {
  const { changeTitle, value } = props;
  return (
    <button type="button" onClick={() => changeTitle(value)}>GREAT!</button>
  )
}

export default ShowButton;