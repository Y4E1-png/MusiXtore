import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createOrder } from "../../redux/slices/orderSlice";
import { CartItem } from "../CartItem/CartItem";
import { PaymentForm, PaymentButton } from "./PaymentStyles";
import { OrderItems, OrderTotal, OrderActions, BackButton, OrderError } from "./ConfirmationStyles";

const ConfirmationStep = ({paymentMethod, prevStep}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.order);
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, song) => {
    return sum + Number(song.price);
  }, 0);


  const handleConfirm = async () => {
    const order = {
      products: items.map((song) => song.id),
      total: total.toFixed(2),
    };
    try {
      await dispatch(createOrder({ order, items })).unwrap();
      navigate("/post-checkout", { replace: true, state: { clearPurchasedCart: true } });
    } catch {

    }
  };



  return (
    <PaymentForm as="section" aria-labelledby="confirmation-title">
      <h2 id="confirmation-title">Check your order</h2>
      <p><strong>Payment Method:</strong> {paymentMethod}</p>
      <OrderItems>
        {items.map((song) => (
          <CartItem 
            key={song.id}
            song={song}
          />
        ))}
      </OrderItems>
      <OrderTotal>
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </OrderTotal>
      <OrderActions>
        <BackButton type="button" onClick={prevStep}>Back to Payment</BackButton>
        <PaymentButton type="button" onClick={handleConfirm}>Confirm Purchase</PaymentButton>
      </OrderActions>
      {status === "failed" && <OrderError role="alert">{error}</OrderError>}
    </PaymentForm>
  );
};

export default ConfirmationStep;


