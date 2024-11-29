import Image from "next/image";
import styles from "./page.module.css";
import KnowMore from "./components/know-more/KnowMore";

export default function Home() {
  return (
    <main>
      <div>
        <KnowMore/>
      </div>
    </main>
  );
}
