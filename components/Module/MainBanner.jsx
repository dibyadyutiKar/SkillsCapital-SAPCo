// components/MainBanner.jsx
export default function MainBanner() {
  return (
    <section className="relative h-96 md:h-128 bg-[url('/assets/co-banner.jpg')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center w-full">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Drive Business Performance with SAP CO
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Gain detailed insights and control over your costs and
              profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
