import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import Title from "../Components/Shared/Title";
import CheckoutSteps from "../Components/Shared/CheckoutSteps";

const Shipping = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [cartItems.length, navigate, userInfo]);

  return (
    <div>
      <Title title="Shipping Details"></Title>
      <CheckoutSteps step1 step2/>

    </div>
  );
};

export default Shipping;