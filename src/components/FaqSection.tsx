import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Who am I?",
    answer:
      "I am an AI assistant designed to help aspirants prepare for the UPSC exams. I use the power of AI to provide personalized guidance and support throughout your preparation journey.",
  },
  {
    question: "What are the study materials I am trained on?",
    answer:
      "I draw knowledge from NCERT books, standard reference materials, and newspapers.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial period to allow you to experience the platform before committing to a subscription.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-0 lg:pt-0 xl:pb-0 xl:pt-0 overflow-hidden"
    >
      <figure
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] 
        -translate-y-1/3 md:-translate-y-[60%] lg:-translate-y-[80%] rotate-[10deg] z-0 select-none pointer-events-none"
      >
        <img
          src="/images/gradient/gradient-40.png"
          alt="background gradient"
          className="w-full h-auto"
        />
      </figure>

      <div className="main-container">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span className="badge badge-green mb-3.5 md:mb-5">Faq</span>

          <h2>
            Frequently{" "}
            <span className="text-primary-500 inline-block">asked</span>{" "}
            Questions
          </h2>

          <p className="lg:max-w-[620px] mx-auto">
            By offering concise and informative responses, this section helps
            users find solutions without needing customer support.
          </p>
        </div>

        <div className="accordion max-w-[850px] space-y-4 mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="accordion-item group bg-white dark:bg-background-5 border 
              border-stroke-4 dark:border-stroke-8 rounded-[8px] px-6 
              overflow-hidden relative z-10"
            >
              <div
                className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] 
                lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] 
                pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <img src="/images/gradient/gradient-23.png" alt="gradient" />
              </div>

              <button
                className="accordion-action flex items-center cursor-pointer justify-between 
                sm:pt-8 pt-5 sm:pb-8 pb-5 w-full"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  {faq.question}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      className="stroke-secondary dark:stroke-accent"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`accordion-content transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
