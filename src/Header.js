import React from "react";
import { useSelector } from 'react-redux';

export default function Header() {
  const userName = useSelector((state) => state.user.name)
  const userId = useSelector((state) => state.user.id)
  return <div>
    <h1>Hello, {userName}</h1>
    <p><b>your id: {userId}</b></p>
  </div>
}
