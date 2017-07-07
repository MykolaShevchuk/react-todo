import React from "react";

export const TodoItem = (props) => {

  return (
    <li className="list-group-item todo-item">
      <input type="checkbox"
             defaultChecked={props.item.done}
             onChange={() => props.changeItemStatus(props.item)}/>
      <select className="form-control"
              onChange={(e) => props.changeItemSection(props.item, e.target.value)}
              defaultValue={props.item.sectionId}>
        <option value="">No section</option>
        {props.sections.map((section => <option key={section.id} value={section.id}>{section.title}</option>))}
      </select>

      <span className={(props.item.done ? 'done' : 'open')}>123{props.item.id}. {props.item.title}</span>
      <span className="badge" onClick={() => props.deleteItem(props.item.id)}>x</span>
    </li>
  )
};

