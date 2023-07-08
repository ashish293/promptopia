import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const prompt = await Prompt.find().populate('creator');
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "No post is available" }), { status: 500 });

  }

}