import { useState } from "react";

export default function FeaturesGrid({ features = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-sap-blue/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sap-blue mb-4">
            Key Features and Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to streamline your financial operations and
            enhance profitability analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-sap-accent rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-sap-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {expandedIndex === index ? feature.content : ""}
                </p>
              </div>
              <div
                className="border-t border-gray-100 px-8 py-4 bg-gray-50 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <span className="text-sm text-sap-accent font-medium">
                  {expandedIndex === index ? "Show less ↑" : "Learn more →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
