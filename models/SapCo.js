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

const SapCoSchema = new mongoose.Schema({
  features: [FeatureSchema],
  subModules: [SubModuleSchema],
  consultants: [ConsultantSchema],
  caseStudies: [CaseStudySchema],
  resources: [ResourceSchema],
  faqs: [FAQSchema],
});

export default mongoose.models.SapCo || mongoose.model("SapCo", SapCoSchema);
