// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const delete_ = req.query.delete;
    const fileContent = fs.readFileSync("data.csv", "utf8");
    if (delete_) {
      fs.unlink("data.csv", (err: any) => {
        if (err) {
        } else {
        }
      });
    }
    res.send(fileContent);
  }
}
