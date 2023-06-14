import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setDAta] = useState<string>("");
  const savePrompt = () => {
    fetch("api/gather", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDAta(data);
      });
  };
  useEffect(() => {
    savePrompt();
  }, []);
  return <main className={styles.main}>{JSON.stringify(data, null, 4)}</main>;
}
