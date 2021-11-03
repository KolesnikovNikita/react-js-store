import { useSelector } from "react-redux";

export default function UserInfo() {
  const { name, surname, email } = useSelector((state) => state.user);
  return (
    <div className="UserStyle">
      <h2>
        {name} {surname}
      </h2>
      <p>
        <b>{email}</b>
      </p>
    </div>
  );
}
