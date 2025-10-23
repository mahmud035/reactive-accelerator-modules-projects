import PaymentForm from '@/components/payment/PaymentForm';

const PaymentPage = () => {
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="text-2xl font-bold">Payment Details</h2>
        <p className="text-sm text-gray-600">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{' '}
          <b>$10</b>
        </p>
        <PaymentForm />
      </div>
    </section>
  );
};

export default PaymentPage;
