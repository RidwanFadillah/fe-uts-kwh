import { Fragment } from "react";
import FormCheckout from "./FormCheckout";
import TotalCheckout from "./TotalCheckout";

function Checkout() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex">
        <FormCheckout />
        <TotalCheckout />
      </div>
    </Fragment>
  );
}

export default Checkout;
