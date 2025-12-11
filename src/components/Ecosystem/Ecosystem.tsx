import React, { useState } from "react";

type Tab = "ask" | "pyq" | "current";

const Ecosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("ask");

  return (
    <section className="bg-white dark:bg-background-6 pt-24 pb-32 overflow-hidden relative">
      <figure className="absolute w-[900px] lg:w-[1200px] rotate-[140deg] top-[650px] left-1/2 -translate-x-1/2 opacity-70 pointer-events-none">
        <img
          src="/images/gradient/gradient-3.png"
          alt="bg"
          className="w-full object-cover"
        />
      </figure>

      <div className="main-container text-center">
        <h2 className="text-heading-2 mb-3">
          AI-powered{" "}
          <span className="text-primary-500 font-semibold">I, Saras</span>{" "}
          Ecosystem
        </h2>

        <p className="text-tagline-2 mb-12 max-w-[680px] mx-auto">
          With I, Saras, you can chat, learn, and practice in one unified
          AI-powered environment - from doubt solving to personalized test prep
          and real-time current affairs analysis.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("ask")}
            className={`px-5 py-2.5 rounded-full border text-[15px] ${
              activeTab === "ask"
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-white border-gray-300 text-secondary/70"
            }`}
          >
            Ask Saras
          </button>

          <button
            onClick={() => setActiveTab("pyq")}
            className={`px-5 py-2.5 rounded-full border text-[15px] ${
              activeTab === "pyq"
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-white border-gray-300 text-secondary/70"
            }`}
          >
            PYQ
          </button>

          <button
            onClick={() => setActiveTab("current")}
            className={`px-5 py-2.5 rounded-full border text-[15px] ${
              activeTab === "current"
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-white border-gray-300 text-secondary/70"
            }`}
          >
            Current Affairs
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-start">
          {activeTab === "ask" && (
            <>
              <div className="flex-1 text-left">
                <h3 className="text-heading-2 mb-4 leading-tight">
                  Ask Saras <br />
                  Your{" "}
                  <span className="text-primary-500">
                    AI-powered UPSC Mentor
                  </span>
                </h3>

                <p className="text-secondary/80 max-w-[480px]">
                  Have a doubt? Ask Saras right away! From intricate polity
                  concepts to challenging economy topics — get accurate,
                  easy-to-grasp explanations powered by AI, fine-tuned for UPSC
                  aspirants.
                </p>

                <ul className="space-y-4 py-10 mb-14">
                  <li className="flex items-center gap-4">
                    <span>
                      <figure className="size-10 overflow-hidden">
                        <img
                          src="/img-isaras/ic-1.png"
                          alt="Instant Doubt Resolution"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>
                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        Instant Doubt Resolution
                      </strong>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2">
                        Get answers in seconds, not hours.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-4">
                    <span>
                      <figure className="size-10 overflow-hidden">
                        <img
                          src="/img-isaras/ic-2.png"
                          alt="Guidance"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>
                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        Context-Aware Guidance
                      </strong>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2">
                        Understand not just the “what,” but the “why.”
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-4">
                    <span>
                      <figure className="size-10 overflow-hidden">
                        <img
                          src="/img-isaras/ic-3.png"
                          alt="Topic-based clarity"
                          className="size-full object-cover"
                        />
                      </figure>
                    </span>
                    <div>
                      <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        Topic-based Clarity
                      </strong>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2">
                        Deep insights tailored to UPSC standards.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex-1 flex justify-end lg:pl-10 -mt-6">
                  <img
                    src="/img-isaras/ask-saras.png"
                    alt="Ask Saras"
                    className="w-full max-w-[480px] object-contain"
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === "pyq" && (
            <div className="flex flex-col lg:flex-row items-start gap-x-24 gap-y-14 w-full">
              <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
                <h3 className="mb-3">
                  Practice Smarter with{" "}
                  <span className="text-primary-500">
                    AI-curated Question Sets
                  </span>
                </h3>
                <p className="mb-6 lg:max-w-[478px]">
                  Master every subject with intelligently structured Previous
                  Year Questions (PYQs) tailored for UPSC preparation. Saras
                  analyzes trends, identifies key topics, and helps you focus
                  where it truly matters.
                </p>
              </div>
              <div className="flex-1 flex justify-end lg:pl-10 -mt-6">
                <img
                  src="/img-isaras/PYQS.png"
                  alt="Happy man using phone"
                  className="w-full max-w-[480px] object-contain"
                />
              </div>
            </div>
          )}

          {activeTab === "current" && (
            <div className="flex flex-col lg:flex-row items-start gap-x-24 gap-y-14 w-full">
              <div className="flex-1 sm:max-w-[500px] sm:mx-auto">
                <h3 className="mb-3">
                  Your Daily{" "}
                  <span className="text-primary-500">
                    UPSC-ready News Companion
                  </span>
                </h3>
                <p className="mb-6 lg:max-w-[478px]">
                  Stay updated with AI-curated current affairs tailored for
                  UPSC. From government policies to global developments - Saras
                  summarizes, analyzes, and connects every event to the syllabus
                  you’re preparing for.
                </p>
              </div>
              <div className="flex-1 sm:max-w-[500px] sm:mx-auto flex justify-center">
                <img
                  src="/img-isaras/current-affairs.png"
                  alt="Current Affairs"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
