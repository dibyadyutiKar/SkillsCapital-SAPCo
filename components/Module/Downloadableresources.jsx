// components/DownloadableResources.jsx
import {
  DocumentArrowDownIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function DownloadableResources({ resources = [] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Additional Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download essential guides and tools to enhance your SAP CO expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <BookOpenIcon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {resource.description}
                  </p>
                </div>
              </div>
              <a
                href={resource.pdfLink}
                download
                className="inline-flex items-center w-full justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
