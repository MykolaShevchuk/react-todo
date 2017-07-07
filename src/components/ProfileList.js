import React from "react";
import {ProfileItem} from "./ProfileItem";

export const ProfileList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.items.map((item) => <ProfileItem key={item.id} item={item} remove={props.remove}/>)}
      </ul>
    </div>
  )
};