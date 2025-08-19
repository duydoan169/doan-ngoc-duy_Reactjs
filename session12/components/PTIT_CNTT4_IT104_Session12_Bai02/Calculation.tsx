import React from "react";

export default function Calculation() {
  const add = (a: number, b: number): number => a + b;
  const subtract = (a: number, b: number): number => a - b;
  const multiply = (a: number, b: number): number => a * b;
  const divide = (a: number, b: number): number => a / b;
  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <p>10 + 10 = {add(10, 10)}</p>
      <p>10 - 10 = {subtract(10, 10)}</p>
      <p>10 * 10 = {multiply(10, 10)}</p>
      <p>10 / 10 = {divide(10, 10)}</p>
    </div>
  );
}