import Head from "next/head";
import FixedMenuLayoutFooter from "@/components/FixedMenuLayoutFooter/FixedMenuLayoutFooter";
import PageHeader from "@/components/PageHeader/PageHeader";
// import PageFooter from "@/components/PageFooter/PageFooter"
import HomePage from "@/components/HomePage/HomePage";
import SideNav from "@/components/SideNav/SideNav";
import { useState } from "react";

export default function Home() {
  // SIDEBAR VISIBILITY STATE
  const [sidebarVisibility, setsidebarVisibility] = useState(false);

  //toggle Sidebar Visibility
  const togglesidebar = () => {
    setsidebarVisibility(!sidebarVisibility);
    let menus = document.getElementsByClassName("headerMenus");
  };
  return (
    <>
      <Head>
        <title>CrazyNFT Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.container}>
      </div> */}
      {/* <SideNav visibility={sidebarVisibility} togglesidebar={togglesidebar} /> */}
      <PageHeader togglesidebar={togglesidebar} visibility={sidebarVisibility} />
      <HomePage />
      <FixedMenuLayoutFooter />
      {/* <PageFooter /> */}
    </>
  );
}
