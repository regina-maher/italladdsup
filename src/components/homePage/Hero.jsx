import React from "react";
import Button from "../Button";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <h1 className="title">Professional bookeeping services</h1>
      <Button
        whiteBackground={true}
        to="./Contact"
        text="book a consultation"
      />
    </div>
  );
}
