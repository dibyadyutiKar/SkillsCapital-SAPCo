import connectDB from "@/lib/connectDB";
import Module from "@/models/Module";

export default async function handler(req, res) {
  await connectDB();

  const { moduleName } = req.query;

  if (!moduleName) {
    return res.status(400).json({ message: "Missing module name" });
  }

  try {
    const moduleData = await Module.findOne({ moduleName });
    if (!moduleData) {
      return res.status(404).json({ error: "Module not found" });
    }

    res.status(200).json(moduleData);
  } catch (error) {
    console.error("Error fetching module data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
