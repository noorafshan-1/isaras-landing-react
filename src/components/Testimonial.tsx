import { useEffect } from "react";

const Testimonial = () => {
  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <rect
        width="20"
        height="20"
        rx="10"
        className="fill-secondary dark:fill-accent/80"
      />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        className="fill-white dark:fill-background-8"
      />
    </svg>
  );

  useEffect(() => {
    const container = document.querySelector(".cards-marquee-container");
    if (!container) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scrollMarquee = () => {
      scrollAmount += 0.6;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      animationFrame = requestAnimationFrame(scrollMarquee);
    };

    scrollMarquee();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // const testimonials = [
  //   {
  //     text: "I cleared both Prelims and Mains with ease. The AI mentor made my preparation structured and stress-free. A big thanks to I, Saras for being my constant guide!",
  //     img: "/img-isaras/test-saranya.png",
  //     name: "Saranya Nair",
  //     role: "UPSC Aspirant",
  //   },
  //   {
  //     text: "The cascading filters in Ask Saras are incredibly useful — it’s like having a personalized mentor who understands what I need instantly. Truly unique!",
  //     img: "/img-isaras/test-muthu.png",
  //     name: "Muthukumaran S",
  //     role: "UPSC Aspirant",
  //   },
  //   {
  //     text: "The application’s clean UI and smart navigation made learning seamless. I could focus on studying without distractions - a flawless experience.",
  //     img: "/img-isaras/test-vinoth.png",
  //     name: "Vinoth Kumar",
  //     role: "UPSC Aspirant",
  //   },
  //   {
  //     text: "The Current Affairs Analysis is a total game changer! I no longer waste hours collecting news. Saras summarizes everything with UPSC relevance.",
  //     img: "/img-isaras/test-priya.png",
  //     name: "Priya Sharma",
  //     role: "UPSC Aspirant",
  //   },
  //   {
  //     text: "The Mains Evaluation feature blew my mind. Instant AI feedback helped me improve my answer writing every single day — like having a personal evaluator!",
  //     img: "/img-isaras/test-arjun.png",
  //     name: "Arjun Mehta",
  //     role: "UPSC Mains Candidate",
  //   },
  // ];

  return (
    <>
      <section
        id="pricing"
        className="pt-14 md:pt-20 lg:pt-[90px] xl:pt-[110px] pb-20 max-2xl:px-4"
      >
        <div className="relative overflow-hidden max-w-[1440px] bg-black rounded-3xl mx-auto py-20 px-6 sm:px-10 lg:px-14 flex flex-col gap-20">
          <figure className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/images/gradient/gradient-14.png"
              className="w-full h-full object-cover opacity-80 mix-blend-screen"
            />
          </figure>

          <div className="relative text-center flex flex-col items-center">
            <span className="badge badge-blur text-ns-green mb-3">PRICING</span>

            <h2 className="max-w-[700px] text-white mb-5 text-[34px] leading-tight md:text-[42px]">
              Choose the Plan that Fits{" "}
              <span className="text-primary">Your UPSC Journey.</span>
            </h2>

            <p className="max-w-[520px] text-white/80 text-[17px]">
              Start free, learn smart, and scale your preparation with I, Saras
              — your AI mentor for UPSC success.
            </p>

            <div className="relative w-full flex justify-center">
              <div
                className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    md:grid-cols-3
                    gap-8
                    max-w-[1200px]
                    
                  "
              >
                <div className="bg-white p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg">
                  <h3 className="text-black text-[22px] font-semibold mb-5">
                    Free Trial
                  </h3>

                  <p className="text-white/70 mb-8">
                    Best for First-Time Explorers
                  </p>

                  <div className="mb-7">
                    <h4 className="text-black text-[36px] font-semibold">
                      ₹0<span className="text-[20px]">.00</span>
                    </h4>
                    <p className="text-black/60">First Month Only</p>
                  </div>

                  <a className="btn btn-md btn-white w-full mb-3">
                    Start 1-Month Free Trial
                  </a>

                  <p className="text-black/50 italic text-[14px] mb-8">
                    Free for the first month. Auto-renews at ₹500/month unless
                    cancelled.
                  </p>

                  <h4 className="text-black text-[18px] font-medium mb-5">
                    Try all premium features for 30 days.
                  </h4>

                  <ul className="space-y-3">
                    {[
                      "Doubt clearance – up to 20 queries",
                      "20 Prelims practice tests",
                      "Current Affairs Analysis",
                      "AI chat for instant UPSC help",
                      "Topic recommendations",
                    ].map((t, i) => (
                      <li className="flex gap-2 items-center" key={i}>
                        <CheckIcon />
                        <span className="text-white/80">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-[url('/images/gradient/gradient-11.png')] bg-cover bg-center max-w-[400px] mx-auto shadow-xl shadow-primary/30">
                <div className="bg-white p-8 rounded-xl">
                  <div className="flex justify-end mb-2">
                    <span className="bg-ns-green text-black px-3 py-1 rounded-full text-sm">
                      Save 16%
                    </span>
                  </div>

                  <h3 className="text-[22px] font-semibold mb-1">
                    Annual Subscription
                  </h3>
                  <p className="text-secondary mb-6">
                    Perfect for Serious Aspirants
                  </p>

                  <div className="mb-7">
                    <h4 className="text-[36px] font-semibold">
                      ₹5000<span className="text-[20px]">.00</span>
                    </h4>
                    <p className="text-secondary">₹5000 / Year (Save ₹1000)</p>
                  </div>

                  <a className="btn btn-md btn-primary w-full mb-8">
                    Join for a Year & Save ₹1000
                  </a>

                  <p className="text-secondary italic mb-8">
                    Cancel anytime — no hidden fees.
                  </p>

                  <h4 className="text-[18px] font-medium mb-5">
                    One-time payment for uninterrupted UPSC preparation.
                  </h4>

                  <ul className="space-y-3">
                    {[
                      "Unlimited doubt clearance",
                      "Unlimited Prelims test sets",
                      "Current Affairs (full access)",
                      "AI performance feedback",
                      "Personalized recommendations",
                    ].map((t, i) => (
                      <li className="flex gap-2 items-center" key={i}>
                        <CheckIcon />
                        <span className="text-secondary">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg shadow-black/20">
                <h3 className="text-black text-[22px] font-semibold mb-1">
                  Monthly Subscription
                </h3>
                <p className="text-black/70 mb-6">
                  Ideal for Consistent Learners
                </p>

                <div className="mb-7">
                  <h4 className="text-black text-[36px] font-semibold">
                    ₹500<span className="text-[20px]">.00</span>
                  </h4>
                  <p className="text-black/60">Month</p>
                </div>

                <a className="btn btn-md btn-white w-full mb-3">
                  Continue Learning for ₹500/month
                </a>

                <p className="text-black/50 italic text-[14px] mb-8">
                  Cancel anytime — no hidden fees.
                </p>

                <h4 className="text-black text-[18px] font-medium mb-5">
                  After your free trial, continue with full access.
                </h4>

                <ul className="space-y-3">
                  {[
                    "Unlimited doubt clearance",
                    "Unlimited Prelims tests",
                    "Current Affairs (full access)",
                    "AI performance feedback",
                    "Personalized tips",
                  ].map((t, i) => (
                    <li className="flex gap-2 items-center" key={i}>
                      <CheckIcon />
                      <span className="text-white/80">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
