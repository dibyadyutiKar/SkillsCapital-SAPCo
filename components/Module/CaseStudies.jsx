// components/CaseStudies.jsx
import {
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function CaseStudies({ cases = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our clients have transformed their financial processes and
            profitability with SAP CO.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-700 mb-2">Client:</p>
                  <p className="text-gray-600">{caseStudy.client}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-medium text-blue-700 mb-2">Results:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {caseStudy.results.map((result, rIndex) => (
                      <li key={rIndex} className="text-gray-600">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={caseStudy.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <DocumentMagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Read Full Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
