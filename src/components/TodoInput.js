import React from "react";

export const TodoInput = ({add, id}) => {
  const onKeyPress = (e) => {
    if (e.which === 13 && e.target.value) {
      add(e.target.value, id);
      e.target.value = '';
    }
  };

  return (
    <input className="form-control" type="text" onKeyPress={onKeyPress}/>
  )
};