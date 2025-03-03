import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const SubModuleSchema = new mongoose.Schema({
  title: String,
  overview: String,
  features: [String],
  benefits: String,
  pdf: String,
});

const ConsultantSchema = new mongoose.Schema({
  name: String,
  image: String,
  bio: String,
  specialties: [String],
  contact: String,
});

const CaseStudySchema = new mongoose.Schema({
  title: String,
  client: String,
  results: [String],
  link: String,
});

const ResourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  pdfLink: String,
});

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const ModuleSchema = new mongoose.Schema({
  moduleName: { type: String, required: true },
  overviewTitle: { type: String, required: true },
  overviewContent: { type: String, required: true },
  bannerImage: { type: String, required: true },
  headline: { type: String, required: true },
  SubHeadline: { type: String, required: true },
  features: [FeatureSchema],
  subModules: [SubModuleSchema],
  consultants: [ConsultantSchema],
  caseStudies: [CaseStudySchema],
  resources: [ResourceSchema],
  faqs: [FAQSchema],
});

export default mongoose.models.Module || mongoose.model("Module", ModuleSchema);
