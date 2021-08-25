import React from "react";
import { getBalance } from "@/components/CardChoose/Circle";

export default function Balance() {
  React.useEffect(() => {
    getBalance();
  });

  return (
    <div>
      <h1>Balance</h1>
    </div>
  );
}
