export default function Overview({ moduleData }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {moduleData.overviewTitle}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {moduleData.overviewContent}
          </p>
        </div>
      </div>
    </section>
  );
}
