import { FC } from "react";
import { useLottie } from "lottie-react";
import dna from "../../assets/lotties/dna.json";

import "./DnaBackground.css";

const DnaBackground: FC = () => {
  const options = {
    animationData: dna,
    loop: true,
    style: {
      width: 400,
      height: 400,
    },
  };

  const { View } = useLottie(options);

  return <div className="dna">{View}</div>;
};

export default DnaBackground;
