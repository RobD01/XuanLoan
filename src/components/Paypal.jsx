import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const Paypal = (props) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  // Initial Settings
  // const clientIdLive =
  //   "AdLWDq-HyVznQI24Tg7VzyS4nydT-DarSL2M0ctpG21Pc0y_E6PQaQ6sy81OGLVj-PDCUskv3t1YEq4e";
  const clientIdSandbox =
    "Aa_ftxbQ3E7kIotFRPRbvO5MohxVIAIxNy73cxF3QAr2YyKc_M_rA6QWShE91hgtMxuxVE9jjmj6HT3C";

  const handleApprove = (orderID) => {
    // call backend to fulfill order

    // if response is success
    setPaidFor(true);

    // refresh user account or subscription status

    // if response is error
    alert("Payment unsucessful");
  };

  if (paidFor) {
    alert("Thank you for your purchase");
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientIdSandbox,
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: props.description,
                amount: {
                  value: props.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
          console.log("order", order);
          handleApprove(data.orderID);
        }}
        // onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.log("Checkout Error: ", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
