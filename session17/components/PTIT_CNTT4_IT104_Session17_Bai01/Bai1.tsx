import React, { useState } from "react";
export default function Bai1() {
  const [name] = useState<string>("Nguyen Van A");
  return (
    <div>
      <div>Ho va ten: {name}</div>
    </div>
  );
}
