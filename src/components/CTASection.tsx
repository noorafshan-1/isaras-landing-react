import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-[60px] md:py-20 lg:py-24 bg-white dark:bg-background-6"
    >
      <div className="max-w-[1150px] mx-auto px-5">
        {/* <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:max-w-[600px] space-y-5"> */}
        <div className="grid grid-cols-12 gap-x-10 space-y-5">
          <div className="col-span-6 md:col-span-3">
            <h2 className="text-[34px] leading-[1.2] font-semibold text-black dark:text-accent">
              Build your future with
              <span className="text-[#8A2EFF]"> I, Saras</span>
            </h2>

            <p className="text-[16px] text-gray-600 dark:text-accent/70">
              Join thousands of aspirants learning smarter with their personal
              UPSC mentor
            </p>

            <p className="text-[16px] text-gray-600 dark:text-accent/70">
              Start your free trial today — clarify doubts, practice PYQs, and
              master every subject with intelligent guidance.
            </p>

            <h3 className="text-[28px] font-semibold text-black dark:text-accent mt-4">
              Contact Us at
            </h3>

            <p className="text-gray-600 dark:text-accent/70">
              For any queries or support, feel free to connect with us — we’re
              just a message away.
            </p>

            <ul className="flex flex-col sm:flex-row gap-5 mt-4">
              <li className="flex items-center gap-3">
                <img
                  src="/img-isaras/phone.svg"
                  className="w-8 h-8"
                  alt="Phone"
                />
                <span className="text-[18px] text-black dark:text-accent">
                  +91 78455 50250
                </span>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src="/img-isaras/mail.svg"
                  className="w-8 h-8"
                  alt="Mail"
                />
                <a href="mailto:contact@isaras.ai">
                  <span className="text-[18px] text-black dark:text-accent">
                    contact@isaras.ai
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-6 gap-x-10 space-y-10">
            <div className="col-span-12 md:col-span-5">
              <div className="w-full lg:w-[450px] mt-10 lg:mt-0 flex items-center justify-end">
                <form className="flex w-full sm:w-[90%] md:w-[80%] lg:w-full gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                          flex-1 h-12 px-4 rounded-full 
                          border !border-gray-300 
                          dark:!border-gray-400
                          text-black dark:text-white
                          shadow-sm placeholder:text-gray-400
                        "
                  />

                  <button
                    className="
                  h-12 px-10 rounded-full text-white text-[16px] font-semibold
                  bg-gradient-to-r from-[#B06BFF] to-[#7A2FF1]
                "
                  >
                    Get started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
