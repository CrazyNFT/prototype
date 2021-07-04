import Head from "next/head";
import FixedMenuLayoutFooter from "@/components/FixedMenuLayoutFooter/FixedMenuLayoutFooter";
import styles from "@/styles/Home.module.css";
import PageHeader from "@/components/PageHeader/PageHeader"
// import PageFooter from "@/components/PageFooter/PageFooter"
import SideNav from "@/components/SideNav/SideNav";
import { useState } from "react";

export default function Home() {
  // SIDEBAR VISIBILITY STATE 
  const [sidebarVisibility, setsidebarVisibility] = useState(false)
  
  //toggle Sidebar Visibility
  const togglesidebar = () =>{
    setsidebarVisibility(!sidebarVisibility)
    let menus = document.getElementsByClassName("headerMenus")
  }
  return (
    <>
      {/* <div className={styles.container}>
      </div> */}
      
      {/* <SideNav visibility={sidebarVisibility} togglesidebar={togglesidebar} /> */}
      <PageHeader togglesidebar={togglesidebar} />
      <FixedMenuLayoutFooter />  
      {/* <PageFooter /> */}
    </>
  );
}
