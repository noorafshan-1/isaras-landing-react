import React from "react";

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="
        pt-20 md:pt-24 lg:pt-[110px]
        pb-20 md:pb-24 lg:pb-[120px]
        bg-background-1 dark:bg-background-7
        relative overflow-hidden
      "
    >
      <figure
        className="
          absolute top-0 left-1/2
          w-[650px] sm:w-[900px] md:w-[1100px]
          opacity-70 pointer-events-none select-none
        "
        style={{ transform: "translate(-50%, 10%) rotate(170deg)" }}
      >
        <img
          src="/images/gradient/gradient-23.png"
          alt=""
          className="w-full h-auto"
        />
      </figure>

      <div className="main-container max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <h2 className="text-heading-2 mb-3">
            Why <span className="text-primary-500 font-semibold">I, Saras</span>
          </h2>
          <p className="text-tagline-2">
            A smarter, faster, calmer way to prepare for UPSC
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-6 md:col-span-3">
            <div className="p-8 rounded-[28px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full">
              <h3 className="text-heading-5 font-semibold mb-2">
                Smarter than search
              </h3>
              <p className="text-secondary/80 mb-6 leading-relaxed">
                No more information overload. Saras filters unnecessary web
                clutter and gives only relevant, UPSC-focused explanations.
              </p>
              <img
                src="/img-isaras/smarter-than-search.png"
                alt=""
                className="w-full max-h-[260px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="col-span-6 md:col-span-6">
            <div className="p-8 rounded-[28px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full">
              <h3 className="text-heading-5 font-semibold mb-2">
                Smarter than ChatGPT
              </h3>
              <p className="text-secondary/80 mb-6 leading-relaxed">
                Saras understands UPSC patterns and provides tailored,
                fact-checked, exam-oriented responses.
              </p>
              <img
                src="/img-isaras/smarter-than-chatgpt.png"
                alt=""
                className="w-full max-h-[260px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <div className="p-8 rounded-[28px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full">
              <h3 className="text-heading-5 font-semibold mb-2">
                Study efficiently
              </h3>
              <p className="text-secondary/80 mb-6 leading-relaxed">
                AI study plans help you focus on high-priority topics and track
                improvement.
              </p>
              <img
                src="/img-isaras/study-efficient.png"
                alt=""
                className="w-full max-h-[220px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <div className="p-8 rounded-[28px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full">
              <h3 className="text-heading-5 font-semibold mb-2">
                Perform better
              </h3>
              <p className="text-secondary/80 mb-6 leading-relaxed">
                Take AI mock tests and get personalized insights to improve
                faster.
              </p>
              <img
                src="/img-isaras/perform-better.png"
                alt=""
                className="w-full max-h-[220px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <div className="p-8 rounded-[28px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full">
              <h3 className="text-heading-5 font-semibold mb-2">Stress Less</h3>
              <p className="text-secondary/80 mb-6 leading-relaxed">
                24×7 concept clearing and instant support keeps you confident &
                exam-ready.
              </p>
              <img
                src="/img-isaras/stress-less.png"
                alt=""
                className="w-full max-h-[220px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
