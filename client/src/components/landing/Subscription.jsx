import { useState } from "react";

const plans = [
  { id: 1, title: "Basic Plan", description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.", price: 9.99 },
  { id: 2, title: "Standard Plan", description: "Access to a wider selection of movies and shows, including most new releases and exclusive content", price: 12.99 },
  { id: 3, title: "Premium Plan", description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing", price: 14.99 },
]

export default function Subscription() {
  const [yearly, setYearly] = useState(false);
  return <div className="block-margin">
    <div className="lg:flex items-center justify-between">
      <div>
        <h2>Choose the plan that&#39;s right for you</h2>
        <p className="max-w-[100ch] mt-4">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
      </div>
      <div className="w-max ml-auto mt-8 lg:mt-0 bg-[#0f0f0f] p-2 rounded-md border-2 border-[#262626]">
        <div
          className={`{styleBtn} ${!yearly && "bg-[#1f1f1f]"}`}
          onClick={() => setYearly(false)}
        >
          Monthly
        </div>
        <div
          className={`{styleBtn} ${yearly && "bg-[#1f1f1f]"}`}
          onClick={() => setYearly(true)}
        >
          Yearly
        </div>
      </div>
    </div>
    <div className="lg:flex gap-8 mt-10 lg:mt-20">
      {plans.map(plan => <div
        key={plan.id}
        className="bg-1 lg:w-1/3 mb-10 lg:mb-0 p-8 rounded-lg max-w-[400px] lg:max-w-none mx-auto"
      >
        <h4>{plan.title}</h4>
        <p className="my-4">{plan.description}</p>
        <p className="my-4"><span className="text-white font-bold text-3xl">
          ${yearly ? plan.price * 12 : plan.price}</span> /{yearly ? "year" : "month"}
        </p>
        <button className={`btn-dark mr-4 {styleBtn}`}>Start Free Trial</button>
        <button className={`btn-red {styleBtn}`}>Choose Plan</button>
      </div>)}
    </div>
  </div>
}