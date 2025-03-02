import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ConsultantsGrid from "../components/Module/ConsultantsGrid";
import CaseStudies from "../components/Module/CaseStudies";
import ResourcesList from "../components/Module/Downloadableresources";
import FAQSection from "../components/Module/FAQSection";

export default function DemoPage() {
  const demoData = {
    consultants: [
      {
        name: "Anna Lee",
        profilePicture: "/assets/images/anna.jpg", // Placeholder path
        biography:
          "Anna has over 20 years of experience in financial controlling...",
        specialties: ["Strategic cost management", "Performance analysis"],
        contactLink: "anna@example.com",
      },
      {
        name: "Raj Patel",
        profilePicture: "/assets/images/raj.jpg",
        biography: "Raj brings innovative cost control solutions...",
        specialties: ["Cost analysis", "Budgeting strategies"],
        contactLink: "raj@example.com",
      },
    ],
    caseStudies: [
      {
        title: "Manufacturer Reduces Costs by 25%",
        content: "Case study details here...",
      },
    ],
    resources: [
      { title: "SAP CO Quick Guide", pdfUrl: "/assets/pdfs/guide.pdf" },
    ],
    faqs: [
      {
        question: "Best practices for cost centers?",
        answer: "Detailed answer here...",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sap-blue mb-8">
          Component Library
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Consultants Grid</h2>
          <ConsultantsGrid consultants={demoData.consultants} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
          <CaseStudies caseStudies={demoData.caseStudies} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Resources List</h2>
          <ResourcesList resources={demoData.resources} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">FAQ Section</h2>
          <FAQSection faqs={demoData.faqs} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
