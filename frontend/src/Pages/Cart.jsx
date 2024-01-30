import { useContext } from "react";
import { Store } from "../Store";
import Title from "../Components/Shared/Title";
import { Col, Row } from "../imports";
import ItemsInCart from "../Components/CartPage/ItemsInCart";
import Checkout from "../Components/CartPage/Checkout";


const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  const updateCartHandler = async () => {};
  return (
    <div>
      <Title title={"Shopping Cart"}></Title>
      <Row>
        <Col md={8}><ItemsInCart cartItems={cartItems} updateCartHandler={updateCartHandler}/></Col>
        <Col md={4}><Checkout cartItems={cartItems}/></Col>
      </Row>
    </div>
  );
};

export default Cart;
