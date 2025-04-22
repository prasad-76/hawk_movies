import { faqs } from "../../utils/data";
import FAQ from "./FAQ";

export default function FAQs() {
  return <div className="block-margin" id="faq">
    <div className="lg:flex items-end justify-between">
      <div>
        <h2>Frequently Asked Questions</h2>
        <p className="max-w-[100ch] mt-4">Got questions? We&#39;ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
      </div>
      <button className="btn-red mt-8 lg:mt-0">Ask a Question</button>
    </div>
    <div className="md:grid grid-cols-2 place-content-start gap-x-10 mt-16">
      {faqs.map(faq => <FAQ key={faq.id} {...faq} />)}
    </div>
  </div>
}