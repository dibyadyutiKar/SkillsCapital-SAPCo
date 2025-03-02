// components/Tutorials.jsx
import { PlayCircleIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function VideoTutorials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master SAP CO through our interactive tutorials and video
            demonstrations
          </p>
        </div>

        {/* Video Embed Section */}
        <div className="mb-16">
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-200 rounded-xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Effective Cost Management with SAP CO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center mt-4 text-gray-600 italic">
            "Effective Cost Management with SAP CO"
          </p>
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <PlayCircleIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Video Tutorials</h3>
            </div>
            <p className="text-gray-600">
              Step-by-step video guides covering SAP CO configuration and daily
              operations
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpenIcon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Interactive Guides</h3>
            </div>
            <p className="text-gray-600">
              Hands-on exercises with live SAP CO environment simulations
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <PlayCircleIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold">Webinars</h3>
            </div>
            <p className="text-gray-600">
              Live sessions with Q&A from our SAP CO experts
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/learning-hub"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Explore All Resources
            <BookOpenIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
