import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("Data in Main component", data);
  const product = {
    name: 'IPhone',
    category: 'Mobile',
    price: 100000,
    color: 'black'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Product List</button>
    </div>
  );
}

export default Main;
