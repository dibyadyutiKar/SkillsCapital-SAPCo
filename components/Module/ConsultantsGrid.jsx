import { EnvelopeIcon } from "@heroicons/react/24/outline";
export default function ConsultantsGrid({ consultants = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our SAP Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our SAP CO consultants are seasoned professionals dedicated to
            enhancing your financial control and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {consultants.map((consultant, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mb-6">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="rounded-full object-cover w-full h-full border-4 border-white shadow-md"
                />
              </div>

              {/* Profile Details */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {consultant.name}
                </h3>

                <p className="text-gray-600 mb-4 max-w-prose mx-auto">
                  {consultant.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {consultant.specialties.map((specialty, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Link */}
                <a
                  href={consultant.contact}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Contact {consultant.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
