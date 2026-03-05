export default function Shipping() {
  return (
    <section className="w-full space-y-6">
      {/* Shipping Policy */}
      <div>
        <h2 className="text-[22px] font-semibold text-gray-900 mb-3">
          Shipping policy
        </h2>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
          At our Company, we understand the importance of timely delivery. We
          offer a variety of shipping options to suit your needs, including
          standard, expedited, and express shipping. Our dedicated team works
          diligently to process and dispatch your orders promptly, aiming to
          deliver them to your doorstep within the estimated timeframe.
        </p>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          We strive to provide fast and reliable shipping to our customers.
          Here's everything you need to know about our shipping process:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-[15px] text-gray-700 mb-4">
          <li>Dispatch: Within 24 Hours</li>
          <li>
            Free shipping across all products on a minimum purchase of $99.
          </li>
          <li>International delivery time 5 to 7 business days</li>
          <li>Cash on delivery might be available</li>
          <li>Easy 30 days returns and exchanges</li>
        </ul>

        <p className="text-[15px] text-gray-700 leading-relaxed italic">
          Please note that delivery times are estimates and may vary depending
          on factors such as product availability, destination, and carrier
          delay
        </p>
      </div>

      {/* Returns Policy */}
      <div>
        <h2 className="text-[22px] font-semibold text-gray-900 mb-3">
          Returns policy
        </h2>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          We want you to be completely satisfied with your purchase from our
          website. If for any reason you are not entirely happy with your order,
          we're here to help. Certain exclusions and conditions may apply, so we
          encourage you to review our detailed return policy for more
          information. Rest assured, our goal is to ensure your complete
          satisfaction with every purchase you make from our website
        </p>

        <ol className="list-decimal ml-6 space-y-2 text-[15px] text-gray-700">
          <li>
            Returned items must be unused, undamaged, and in the same condition
            as received.
          </li>
          <li>
            Original tags, labels, and packaging must be intact and included
            with the returned item.
          </li>
          <li>
            Proof of purchase, such as your order confirmation or receipt, is
            required for all returns.
          </li>
        </ol>
      </div>
    </section>
  );
}
