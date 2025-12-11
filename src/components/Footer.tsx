import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
      <figure
        className="
          pointer-events-none select-none absolute
          size-[550px]
          top-[-20%] right-[-15%]
          rotate-[-30deg]
          opacity-80
        "
      >
        <img
          src="/images/gradient/gradient-31.png"
          className="size-full object-cover object-top"
          alt="Gradient"
        />
      </figure>

      <figure
        className="
          pointer-events-none select-none absolute
          size-[750px]
          bottom-[-55%] left-[-25%]
          opacity-80
        "
      >
        <img
          src="/images/gradient/gradient-2.png"
          className="size-full object-bottom"
          alt="Gradient"
        />
      </figure>

      <div className="main-container px-5">
        <div className="w-full xl:flex xl:justify-between gap-16 pt-20 pb-12">
          <div className="xl:w-1/2 max-w-[500px]">
            <img
              src="/img-isaras/t-2-white.svg"
              alt="I Saras Logo"
              className="mb-5"
            />

            <p className="text-accent/60 font-normal mb-4">
              Your AI Mentor for UPSC Success.
            </p>

            <p className="text-accent/60 font-normal mb-7">
              Learn, practice, and grow smarter with our AI-driven UPSC
              preparation ecosystem — powered by intelligent learning and
              continuous feedback.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/people/I-Saras/61554945903034/"
                target="_blank"
              >
                <img src="/images/icons/facebook.svg" className="size-5" />
              </a>
              <a href="https://www.instagram.com/i_saras_ai/" target="_blank">
                <img src="/images/icons/instagram.svg" className="size-5" />
              </a>
              <a href="https://x.com/I_Saras_AI" target="_blank">
                <img src="/img-isaras/x.svg" className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/89921620/admin/feed/posts/"
                target="_blank"
              >
                <img src="/images/icons/linkedin.svg" className="size-5" />
              </a>
            </div>
          </div>

          <div className="xl:w-1/2 grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-heading-6 text-primary-50 mb-6">Company</h4>

              <ul className="space-y-3">
                <li>
                  <a className="footer-link" href="/aboutus.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:w-1/2 grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-heading-6 text-primary-50 mb-6">
                Legal Policies
              </h4>

              <ul className="space-y-3">
                <li>
                  <a className="footer-link" href="/Terms-and-conditions.html">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-16 text-center relative">
          <div className="absolute top-0 left-0 right-0 mx-auto w-full h-px bg-accent/10"></div>

          <p className="text-tagline-1 font-normal text-primary-50">
            © 2025 Aramporul Info Tech Pvt.Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
