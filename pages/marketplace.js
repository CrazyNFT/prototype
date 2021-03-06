import Head from "next/head";
import PageHeader from "@/components/PageHeader/PageHeader";
// import PageFooter from "@/components/PageFooter/PageFooter"
import SideNav from "@/components/SideNav/SideNav";
import { useEffect, useState } from "react";
import TableMaker from "@/components/Retrieve/TableMaker";
import FixedMenuLayoutFooter from "@/components/FixedMenuLayoutFooter/FixedMenuLayoutFooter";

export default function Home() {
  // SIDEBAR VISIBILITY STATE
  const [sidebarVisibility, setsidebarVisibility] = useState(true);

  //toggle Sidebar Visibility
  const togglesidebar = () => {
    setsidebarVisibility(!sidebarVisibility);
    let menus = document.getElementsByClassName("headerMenus");
  };
  return (
    <>
      <Head>
        <title>CrazyNFT MarketPlace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.container}>
      </div> */}
      {/* <SideNav visibility={sidebarVisibility} togglesidebar={togglesidebar} /> */}
      <PageHeader togglesidebar={togglesidebar} visibility={sidebarVisibility} />
      <TableMaker />
      <FixedMenuLayoutFooter />
    </>
  );
}
