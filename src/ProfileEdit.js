import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function ProfileEdit() {
  const dispatch = useDispatch();
  let history = useHistory();
  const userInfo = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [eMail, setEmail] = useState("");

  function editUserInfo() {
    history.push("/user");
    dispatch({ type: "EDIT_NAME", name });
    dispatch({ type: "EDIT_SURNAME", surname });
    dispatch({ type: "EDIT_EMAIL", eMail });
  }

  return (
    <div className="UserStyle">
      <div>
        <p>
          Edit name: {userInfo.name} to
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          Edit surname: {userInfo.surname} to
          <input value={surname} onChange={(e) => setSurname(e.target.value)} />
        </p>
        <p>
          Edit E-mail: {userInfo.eMail} to
          <input value={eMail} onChange={(e) => setEmail(e.target.value)} />
        </p>
      </div>
      <div>
        <button onClick={() => editUserInfo()}>Save</button>
      </div>
    </div>
  );
}
