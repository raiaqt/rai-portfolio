import React from "react";
import { useLottie } from "lottie-react";
import quotes from "../../assets/lotties/quotes.json";
import data from "../../../data";
import "./Description.css";

const Description: React.FC = () => {
  const { description } = data;

  const options = {
    animationData: quotes,
    loop: true,
    style: {
      width: 200,
      height: 200,
    },
  };

  const { View } = useLottie(options);

  return (
    <div className="description">
      <div className="background-lottie">{View}</div>
      <span className="description-text highlight-text">{description.text}</span>
    </div>
  );
};

export default Description;
