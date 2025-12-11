import React, { useState } from "react";
import askSarasImg from "../../assets/vendor/images/img-isaras/ask-saras.png";
import pyqsImg from "../../assets/vendor/images/img-isaras/pyqs.png";
import currentAffairsImg from "../../assets/vendor/images/img-isaras/current-affairs.png";
import ic1 from "../../assets/vendor/images/img-isaras/ic-1.png";
import ic2 from "../../assets/vendor/images/img-isaras/ic-2.png";
import ic3 from "../../assets/vendor/images/img-isaras/ic-3.png";
import ic4 from "../../assets/vendor/images/img-isaras/ic-4.png";
import ic5 from "../../assets/vendor/images/img-isaras/ic-5.png";
import ic6 from "../../assets/vendor/images/img-isaras/ic-6.png";
import ic7 from "../../assets/vendor/images/img-isaras/ic-7.png";
import ic8 from "../../assets/vendor/images/img-isaras/ic-8.png";
import ic9 from "../../assets/vendor/images/img-isaras/ic-9.png";
import ic10 from "../../assets/vendor/images/img-isaras/ic-10.png";

const tabs = ["Ask Saras", "PYQ", "Current Affairs"];

const TabContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                Ask Saras <span className="text-primary-500">AI Mentor</span>
              </h2>
              <p className="mb-6">
                Have a doubt? Ask Saras right away! From polity to economy, get
                accurate, AI-powered explanations.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4 items-start">
                  <img src={ic1} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Instant Doubt Resolution</strong>
                    <p>Get answers in seconds, not hours.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic2} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Context-Aware Guidance</strong>
                    <p>Understand not just the what, but also the why.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic3} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Topic-based Clarity</strong>
                    <p>Deep insights tailored to UPSC standards.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={askSarasImg} alt="Ask Saras" className="w-full max-w-md" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                Practice Smarter with <span className="text-primary-500">PYQs</span>
              </h2>
              <p className="mb-6">
                Master every subject with AI-curated Previous Year Questions (PYQs).
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4 items-start">
                  <img src={ic4} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Smart Question Categorization</strong>
                    <p>Organized by year, subject, and difficulty.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic5} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>AI Insights & Explanations</strong>
                    <p>Detailed reasoning for every answer.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic6} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Adaptive Practice Mode</strong>
                    <p>Based on strengths and weaknesses.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic7} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Trend-based Analysis</strong>
                    <p>Spot recurring topics and patterns.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={pyqsImg} alt="PYQs" className="w-full max-w-md" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                Daily <span className="text-primary-500">Current Affairs</span>
              </h2>
              <p className="mb-6">
                Stay updated with AI-curated current affairs tailored for UPSC.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4 items-start">
                  <img src={ic8} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Daily Curated Headlines</strong>
                    <p>Focused, exam-relevant updates.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic9} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>Syllabus-linked Insights</strong>
                    <p>Understand where each topic fits.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <img src={ic10} alt="icon" className="w-10 h-10" />
                  <div>
                    <strong>AI-powered Analysis</strong>
                    <p>Clarity on causes, impacts, and implications.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={currentAffairsImg}
                alt="Current Affairs"
                className="w-full max-w-md"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === index
                ? "bg-primary-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabContent;
