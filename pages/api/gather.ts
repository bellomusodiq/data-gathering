// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const csvWriter = require("csv-write-stream");
const fs = require("fs");

function getCsvFileLength(csvFilePath: string) {
  const fileContent = fs.readFileSync(csvFilePath, "utf8");
  const rows = fileContent.split("\n");
  const length = rows.length - 2; // Subtract 1 to exclude the header row (if any)
  return length;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const body = req.body;
    const csvFilePath = "data.csv";
    // // Append the JSON data to the CSV file
    const writer = csvWriter({ sendHeaders: false });
    writer.pipe(fs.createWriteStream(csvFilePath, { flags: "a" }));
    writer.write(body);
    writer.end();

    res.status(200).json({ success: true });
  }
  if (req.method === "GET") {
    res.status(200).json({ prompCount: getCsvFileLength("data.csv") });
  }
}
