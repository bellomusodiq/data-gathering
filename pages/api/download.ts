// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");
const csvWriter = require("csv-write-stream");

function getCsvFileLength(csvFilePath: string) {
  const fileContent = fs.readFileSync(csvFilePath, "utf8");
  const rows = fileContent.split("\n");
  const length = rows.length - 2; // Subtract 1 to exclude the header row (if any)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const fileContent = fs.readFileSync("data.csv", "utf8");
    res.send(fileContent);
  }
}
