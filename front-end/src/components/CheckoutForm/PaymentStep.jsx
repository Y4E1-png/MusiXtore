import { useState } from "react";
import { PaymentForm, PaymentInput, PaymentFields, PaymentButton } from "./PaymentStyles";

const PaymentStep = ({setPaymentMethod, nextStep}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentMethod(`Card ending in ${cardNumber.slice(-4)}, Expiry: ${expiryDate}`);
    nextStep();
  };

  return (
    <PaymentForm onSubmit={handlePayment}>
      <h2>Payment Method</h2>
      <p>Simulated Pay. Test use only.</p>
      <label htmlFor="payment-card">Card Number</label>
      <PaymentInput
        id="payment-card"
        type="text"
        inputMode="numeric"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      <PaymentFields>
        <div>
          <label htmlFor="payment-expiry">Expiry Date:</label>
          <PaymentInput
            id="payment-expiry"
            type="text"
            placeholder="MM/AA"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="payment-cvv">CVV</label>
          <PaymentInput
            id="payment-cvv"
            type="password"
            inputMode="numeric"
            placeholder="•••"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </PaymentFields>
      <PaymentButton type="submit">Checkout</PaymentButton>
    </PaymentForm>
  );
}

export default PaymentStep;
