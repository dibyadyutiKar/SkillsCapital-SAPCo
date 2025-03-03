import FeaturesGrid from "@/components/Module/FeaturesGrid";
import SubModules from "@/components/Module/SubModules";
import Header from "@/components/Layout/Header";
import OverviewCard from "@/components/Module/Overview";
import ConsultantsGrid from "@/components/Module/ConsultantsGrid";
import VideoTutorials from "@/components/Module/VideoTutorials";
import CaseStudies from "@/components/Module/CaseStudies";
import FAQSection from "@/components/Module/FAQSection";
import Footer from "@/components/Layout/Footer";
import DownloadableResources from "@/components/Module/Downloadableresources";
import MainBanner from "@/components/Module/MainBanner";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ModulePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { moduleName } = router.query;

  useEffect(() => {
    if (!moduleName) return;
    async function fetchData() {
      try {
        const response = await fetch(`/api/module?moduleName=${moduleName}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [moduleName]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!data) return <p className="text-center py-10">No data available</p>;
  // Data for dynamic sections
  //   const features = [
  //     {
  //       title: "Cost Elements and Cost Centers",
  //       content: "Detailed tracking and management of costs.",
  //     },
  //     {
  //       title: "Profit Center Accounting",
  //       content:
  //         "Monitor and report on profit centers to optimize profitability.",
  //     },
  //     {
  //       title: "Integration with SAP FI",
  //       content:
  //         "Seamless interaction with Financial Accounting to ensure comprehensive financial control.",
  //     },
  //     // Add other features...
  //   ];

  //   const subModules = [
  //     {
  //       title: "Cost Element Accounting",
  //       overview: "Manage and analyze different types of costs...",
  //       features: ["Cost recording", "Category management"],
  //       benefits: "Enhances transparency and control...",
  //       pdf: "/pdfs/sap-co.docx",
  //     },
  //     {
  //       title: "Cost Center Accounting:",
  //       overview:
  //         "Responsible for controlling costs and evaluating performance within specific business segments.",
  //       features: ["Budget management", "Variance Analysis"],
  //       benefits: "Improves budget adherence and operational efficiency",
  //       pdf: "/pdfs/sap-co.docx",
  //     },
  //     {
  //       title: "Profit Center Accounting",
  //       overview:
  //         "Tracks profit and loss by business segment, supporting effective decision-making and financial reporting",
  //       features: ["Profit tracking", "Segment reporting"],
  //       benefits:
  //         "Aids an identifyying profitable areas and potential improvements",
  //       pdf: "/pdfs/sap-co.docx",
  //     },

  //     // Add other sub-modules...
  //   ];

  //   const consultants = [
  //     {
  //       name: "Anna Lee",
  //       image: "/assets/anna-lee.jpg",
  //       bio: "Anna has over 20 years of experience in financial controlling, specializing in cost management and profitability analysis within SAP CO.",
  //       specialties: [
  //         "Strategic cost management",
  //         "Performance analysis",
  //         "Profit optimization",
  //       ],
  //       contact: "mailto:anna.lee@skillscapital.com",
  //     },
  //     {
  //       name: "Raj Patel",
  //       image: "/assets/raj-patel.jpg",
  //       bio: "Raj brings innovative cost control solutions to complex business environments, helping clients enhance operational and financial efficiency with SAP CO.",
  //       specialties: ["Cost analysis", "Budgeting strategies", "Internal audits"],
  //       contact: "mailto:raj.patel@skillscapital.com",
  //     },
  //   ];
  //   const caseStudies = [
  //     {
  //       title: "Manufacturing Cost Reduction",
  //       client: "Leading Automotive Manufacturer",
  //       results: [
  //         "25% reduction in operational costs",
  //         "30% faster financial reporting",
  //         "Improved cost allocation accuracy",
  //       ],
  //       link: "/case-studies/manufacturing-cost-reduction",
  //     },
  //     {
  //       title: "Retail Chain Profitability Boost",
  //       client: "Global Fashion Retailer",
  //       results: [
  //         "20% reduction in inventory carrying costs",
  //         "15% increase in profit margins",
  //         "Real-time cost tracking across 500+ stores",
  //       ],
  //       link: "/case-studies/retail-profitability",
  //     },
  //     {
  //       title: "Healthcare Cost Optimization",
  //       client: "National Hospital Network",
  //       results: [
  //         "18% reduction in operational waste",
  //         "95% compliance with budget targets",
  //         "40% faster month-end closing process",
  //       ],
  //       link: "/case-studies/healthcare-cost-optimization",
  //     },
  //   ];
  //   const resources = [
  //     {
  //       title: "SAP CO Quick Reference Guide",
  //       description: "Essential commands and transaction codes",
  //       pdfLink: "/pdfs/sap-co.docx",
  //     },
  //     {
  //       title: "Strategic Cost Management Workbook",
  //       description: "Practical exercises and templates",
  //       pdfLink: "/pdfs/sap-co.docx",
  //     },
  //   ];

  //   const faqs = [
  //     {
  //       question:
  //         "What are the best practices for setting up cost centers in SAP CO?",
  //       answer:
  //         "Key best practices include: 1) Align cost centers with organizational structure, 2) Establish clear naming conventions, 3) Define proper hierarchy levels, 4) Implement regular audits, and 5) Integrate with other SAP modules for consistent data flow.",
  //     },
  //     {
  //       question:
  //         "How can SAP CO help in achieving more accurate profitability analysis?",
  //       answer:
  //         "SAP CO enables precise profitability analysis through: 1) Real-time cost tracking, 2) Multidimensional reporting, 3) Profit center accounting, 4) Integration with sales data, and 5) Advanced contribution margin calculations.",
  //     },
  //   ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div id="home">
        {" "}
        <Header />
      </div>

      <MainBanner moduleData={data} />
      <div id="about">
        {" "}
        <OverviewCard moduleData={data} />{" "}
      </div>

      <FeaturesGrid features={data.features} />
      <SubModules items={data.subModules} />
      <ConsultantsGrid consultants={data.consultants} />
      <VideoTutorials />
      <div id="case-studies">
        {" "}
        <CaseStudies cases={data.caseStudies} />
      </div>
      <div id="resources">
        {" "}
        <DownloadableResources resources={data.resources} />
      </div>
      <FAQSection faqs={data.faqs} />
      <Footer />
    </div>
  );
}
