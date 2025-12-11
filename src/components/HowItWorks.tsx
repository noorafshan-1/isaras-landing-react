import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".js-stack-cards__item");
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;

      cards.forEach((card, index) => {
        const offset = scrollTop * 0.04;
        card.style.transform = `translateY(${offset * index}px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hiw"
      className="py-[50px] md:py-[80px] lg:py-[100px] relative"
      aria-label="How It Works section"
    >
      <figure
        className="absolute top-0 left-1/2 -translate-x-1/2 
                  w-[600px] md:w-[800px] lg:w-[900px] 
                  pointer-events-none -z-10 overflow-hidden"
        style={{ opacity: 0.35, filter: "blur(1px)" }}
      >
        <img
          src="/images/gradient/gradient-23.png"
          alt="How it Works background gradient"
          className="w-full h-auto object-cover"
        />
      </figure>

      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[60px] gap-y-12 items-start">
          <div className="col-span-6 xl:col-span-3 lg:sticky lg:top-28">
            <div className="space-y-7 xl:text-left text-center">
              <div className="space-y-3">
                <h2 className="xl:max-w-[629px] mx-auto xl:mx-0">
                  How it Works
                </h2>

                <p className="xl:max-w-[544px] mx-auto xl:mx-0">
                  Prepare smarter in four simple steps. <br />
                  From login to personalized AI mentorship - I, Saras will make
                  UPSC learning seamless, interactive, and efficient.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 xl:col-span-3 flex justify-center">
            <div className="stack-cards js-stack-cards xl:max-w-full max-w-[820px] mx-auto">
              <div className="stack-cards__item js-stack-cards__item p-2 relative rounded-[20px] flex items-center justify-center sm:max-w-[483px] w-full overflow-hidden">
                <figure className="absolute pointer-events-none top-[-62%] md:-top-[85%] left-[-48%] md:-left-[68%] opacity-50 rotate-[312deg] size-[500px] md:size-[800px] -z-10">
                  <img src="/images/gradient/gradient-32.png" alt="step" />
                </figure>

                <div className="relative z-10 p-8 rounded-[14px] bg-white dark:bg-black space-y-6 w-full sm:max-w-[467px]">
                  <div className="space-y-1">
                    <h5 className="mb-2">
                      <span className="text-primary-500">Login</span>
                    </h5>
                    <p className="text-heading-4 text-secondary dark:text-accent">
                      Start your journey with a click.
                    </p>
                    <p>
                      Sign in to your Saras dashboard and unlock access to
                      India’s first AI-powered UPSC preparation ecosystem.
                    </p>
                  </div>

                  <figure className="rounded-2xl overflow-hidden max-w-[385px]">
                    <img
                      src="/img-isaras/step-1.png"
                      alt="step"
                      className="md:max-h-[315px] md:min-h-[315px]"
                    />
                  </figure>
                </div>
              </div>

              <div className="stack-cards__item js-stack-cards__item p-2 relative rounded-[20px] flex items-center justify-center sm:max-w-[483px] w-full overflow-hidden">
                <figure className="absolute pointer-events-none top-[-127%] md:-top-[130%] left-[-103%] md:-left-[79%] opacity-50 rotate-[255deg] size-[800px] md:size-[1000px] -z-10">
                  <img src="/images/gradient/gradient-33.png" alt="step" />
                </figure>

                <div className="relative z-10 p-8 rounded-[14px] bg-white dark:bg-black space-y-6 w-full sm:max-w-[467px]">
                  <div className="space-y-1">
                    <h5 className="mb-2">
                      <span className="text-primary-500">
                        Choose Exam & Subject
                      </span>
                    </h5>
                    <p className="text-heading-5 text-secondary dark:text-accent">
                      Learn what matters the most.
                    </p>
                    <p>
                      Select UPSC stage and subjects to get personalized
                      material, curated question sets, and AI-recommended
                      topics.
                    </p>
                  </div>

                  <figure className="rounded-2xl overflow-hidden max-w-[403px]">
                    <img
                      src="/img-isaras/step-2.png"
                      alt="step"
                      className="md:max-h-[315px] md:min-h-[315px]"
                    />
                  </figure>
                </div>
              </div>

              <div className="stack-cards__item js-stack-cards__item p-2 relative rounded-[20px] flex items-center justify-center sm:max-w-[483px] w-full overflow-hidden">
                <figure className="absolute pointer-events-none top-[-127%] md:-top-[130%] left-[-107%] md:-left-[88%] opacity-50 rotate-[240deg] size-[800px] md:size-[1000px] -z-10">
                  <img src="/images/gradient/gradient-34.png" alt="step" />
                </figure>

                <div className="relative z-10 p-8 rounded-[14px] bg-white dark:bg-black space-y-6 w-full sm:max-w-[467px]">
                  <div className="space-y-1">
                    <h5 className="mb-2">
                      <span className="text-primary-500">
                        Chat with AI Mentor
                      </span>
                    </h5>
                    <p className="text-heading-5 text-secondary dark:text-accent">
                      Get instant answers & guidance.
                    </p>
                    <p>
                      Ask any UPSC question — your AI Mentor provides detailed
                      explanations in seconds.
                    </p>
                  </div>

                  <figure className="rounded-2xl overflow-hidden max-w-[403px]">
                    <img
                      src="/img-isaras/step-3.png"
                      alt="step"
                      className="md:max-h-[315px] md:min-h-[315px]"
                    />
                  </figure>
                </div>
              </div>

              <div className="stack-cards__item js-stack-cards__item p-2 relative rounded-[20px] flex items-center justify-center sm:max-w-[483px] w-full overflow-hidden">
                <figure className="absolute pointer-events-none top-[-143%] md:-top-[117%] left-[-72%] md:-left-[37%] opacity-50 rotate-[245deg] size-[1000px] -z-10">
                  <img src="/images/gradient/gradient-9.png" alt="step" />
                </figure>

                <div className="relative z-10 p-8 rounded-[14px] bg-white dark:bg-black space-y-6 w-full sm:max-w-[467px]">
                  <div className="space-y-1">
                    <h5 className="mb-2">
                      <span className="text-primary-500">
                        Practice & Learn at Your Pace
                      </span>
                    </h5>
                    <p className="text-heading-5 text-secondary dark:text-accent">
                      Reinforce. Review. Repeat.
                    </p>
                    <p>
                      Test your understanding with adaptive MYQ & PYQ. Get
                      feedback and stay exam-ready.
                    </p>
                  </div>

                  <figure className="rounded-2xl overflow-hidden max-w-[403px]">
                    <img
                      src="/img-isaras/step-4.png"
                      alt="step"
                      className="md:max-h-[315px] md:min-h-[315px]"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
