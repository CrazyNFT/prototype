import React from "react";
import { withdrawTransaction } from "@/components/CardChoose/Circle";

export default function Withdraw() {
  React.useEffect(() => {
    withdrawTransaction();
    // error code:2 , Invalid
  });

  return (
    <div>
      <h1>Withdraw</h1>
    </div>
  );
}
