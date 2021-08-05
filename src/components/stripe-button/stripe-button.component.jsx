import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //
  const priceForStripe = price * 100; // dollar to cent
  const publishableKey =
    'pk_test_51JL7L3KUXJhvftqEtJzbsa3tzchPTndWMsbmCsrDYJCp49PeR3MG5Kb2yU6iT3WiZQAAD2OhLLw1XhkT11uYH7TF00wzDEaMPt';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  //https://github.com/azmenak/react-stripe-checkout
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
