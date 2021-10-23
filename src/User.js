import React from "react";
import { useSelector } from "react-redux";
import "./User.css";

export default function User() {
  const { id, name } = useSelector((state) => state.user);
  return (
    <div className="UserStyle">
      <div>
        <h1>Hello, {name}</h1>
        <p>
          <b>your id: {id}</b>
        </p>
      </div>
    </div>
  );
}
