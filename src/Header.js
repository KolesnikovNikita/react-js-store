import { useSelector } from "react-redux";

export default function UserInfo() {
  const { name, surname, eMail } = useSelector((state) => state.user);
  return (
    <div className="UserStyle">
      <h2>
        {name} {surname}
      </h2>
      <p>
        <b>{eMail}</b>
      </p>
    </div>
  );
}
