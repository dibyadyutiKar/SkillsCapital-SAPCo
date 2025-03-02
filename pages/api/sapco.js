import connectDB from "@/lib/connectDB";
import SapCo from "@/models/SapCo";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const data = await SapCo.findOne(); // Fetch single document
      if (!data) return res.status(404).json({ message: "No data found" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
