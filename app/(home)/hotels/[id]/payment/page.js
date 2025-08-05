import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();
  if (!session) redirect("/login");
  console.log(id, checkin, checkout);
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{" "}
          <b>$10</b>
        </p>
        <PaymentForm checkin={checkin} checkout={checkout} />
      </div>
    </section>
  );
};

export default PaymentPage;
