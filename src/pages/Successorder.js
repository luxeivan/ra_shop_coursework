import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendIsOkFalse } from "../store/cartSlice";

export default function Successorder() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendIsOkFalse());
  }, []);
  return (
    <div className="order_success">
      <h3 className="order_success_text">Заказ успешно совершен! Ожидайте звонка оператора</h3>
    </div>
  );
}
