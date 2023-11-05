import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res
    .status(200)
    .json({ message: "Hello, I am a response from the server of Next.js" });
}
