import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function ProfileEdit() {
  const dispatch = useDispatch();
  let history = useHistory();
  const userInfo = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  function editUserInfo() {
    history.push("/user");
    dispatch({ type: "EDIT_PROFILE", name, surname, email });
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
          Edit E-mail: {userInfo.email} to
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </p>
      </div>
      <div>
        <button onClick={() => editUserInfo()}>Save</button>
      </div>
    </div>
  );
}
