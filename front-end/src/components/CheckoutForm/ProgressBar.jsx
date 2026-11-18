import { Step, Steps } from "./ProgressBarStyles";


const ProgressBar = ({ step }) => {
  return (
    <Steps aria-label="Progreso del checkout">
      <Step $reached={step >= 1} aria-current={step === 1 ? "step" : undefined}>Payment</Step>
      <Step $reached={step >= 2} aria-current={step === 2 ? "step" : undefined}>Confirmation</Step>
    </Steps>
  );
};

export default ProgressBar;
