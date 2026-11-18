import { useState } from "react";
import PaymentStep from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";
import ProgressBar from "./ProgressBar";


const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const nextStep = () => setStep (step+1);
  const prevStep = () => setStep (step-1);


  return (
    <div> 
      <ProgressBar step={step} />
      {step === 1 && (
        <PaymentStep 
          setPaymentMethod={setPaymentMethod}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <ConfirmationStep
          paymentMethod={paymentMethod}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default CheckoutForm