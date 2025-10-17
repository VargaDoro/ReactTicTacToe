import React from "react";
import "./jatekter.css";
import Elem from "./Elem";

export default function Jatekter(props) {
  return (
    <>
      <h2>Jatekter</h2>
      <div className="jatekter">
        {props.lista.map((adat, index) => {
          return <Elem adat={adat} key={index} katt={props.katt} index={index}/>;
        })}
      </div>
    </>
  );
}
