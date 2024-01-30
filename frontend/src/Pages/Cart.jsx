import { useContext } from "react";
import { Store } from "../Store";
import Title from "../Components/Shared/Title";
import { Col, Row, axios, toast } from "../imports";
import ItemsInCart from "../Components/CartPage/ItemsInCart";
import Checkout from "../Components/CartPage/Checkout";
import { PRODUCT_ADD_TO_CART } from "../actions";
import { getError } from "../utils";


const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  const updateCartHandler = async (product, quantity) => {
    try {
        const { data } = await axios.get(`/api/v1/products/${product._id}`);
    
        if (data.countInStock < quantity) {
          alert("Sorry, product is out of stock");
          return;
        }
        ctxDispatch({
          type: PRODUCT_ADD_TO_CART,
          payload: { ...product, quantity },
        });
      } catch (error) {
        toast.error(getError(error));
      }
  };
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
