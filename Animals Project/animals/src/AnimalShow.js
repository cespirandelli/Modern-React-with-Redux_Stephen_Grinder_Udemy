import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse,
};

function AnimalShow({ type }) {
  return <div>{type}</div>;
}

export default AnimalShow;
