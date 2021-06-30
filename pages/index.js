import Head from "next/head";
import FixedMenuLayout from "@/components/FixedMenuLayout";
import styles from "@/styles/Home.module.css";
import PageHeader from "@/components/PageHeader/PageHeader"
import PageFooter from "@/components/PageFooter/PageFooter"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
      </div>
      <PageHeader />
      <FixedMenuLayout />
      <PageFooter />
    </>
  );
}
