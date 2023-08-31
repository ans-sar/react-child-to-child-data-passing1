import React from "react";
import Header from "./Header";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../public/styles.css";
import Dice from "./Dice";
import Display from "./Display";

export default function App() {
  const [number, setNumber] = React.useState(1);
  return (
    <div>
      <Header />
      <Display number={number} />
      <Dice callback={setNumber} />
    </div>
  );
}
