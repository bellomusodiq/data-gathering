import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [deleteData, setDeleteData] = useState<boolean>(false);
  const router = useRouter();

  const now = new Date();

  return (
    <main className={styles.main}>
      <a
        style={{ backgroundColor: "blue", padding: 20 }}
        href={`/api/download?${deleteData ? "delete=true" : ""}`}
        download={`data-${now.toISOString()}.csv`}
      >
        download
      </a>
      <div>
        <input
          type="checkbox"
          checked={deleteData}
          onChange={() => setDeleteData(!deleteData)}
          name="delete"
          id="delete"
        />
        <label htmlFor="delete">Delete existing data</label>
      </div>
    </main>
  );
}
