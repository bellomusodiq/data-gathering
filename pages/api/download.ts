// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const fileContent = fs.readFileSync("data.csv", "utf8");
    res.send(fileContent);
  }
}
