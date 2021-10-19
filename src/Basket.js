import './App.css';
import { useSelector } from 'react-redux';

export default function Basket() {
  const basketProducts = useSelector((state) => state.cart)
  let totalCount = basketProducts.reduce((acc, item) => acc + item.count, 0)
  return (
    <div>
      <h3>Cart Items</h3>
      <p>{totalCount}</p>
    </div>
  )
}

