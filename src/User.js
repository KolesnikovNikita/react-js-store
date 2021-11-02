import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function User() {
  const { id, name, surname, eMail } = useSelector((state) => state.user);
  return (
    <div className="UserStyle">
      <div>
        <h1>Hello, {name}</h1>
        <p>
          <b>Surname: {surname}</b>
        </p>
        <p>
          <b>E - mail: {eMail}</b>
        </p>
        <p>
          <b>id: {id}</b>
        </p>
      </div>
      <Link to="/profile/edit">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}
