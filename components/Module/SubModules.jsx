// components/SubModules.jsx
import { CheckIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function SubModules({ items = [] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          SAP CO Sub-Modules Detailed
        </h2>

        <div className="space-y-20">
          {items.map((module, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {module.title}
                </h3>

                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600">{module.overview}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {module.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-gray-600">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                        Benefits
                      </h4>
                      <p className="text-gray-600">{module.benefits}</p>
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-8">
                    <a
                      href={module.pdf}
                      download
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      aria-label={`Download ${module.title} PDF`}
                    >
                      <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                      Download {module.title} Guide (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
