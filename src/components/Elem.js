import React from "react";
import { JatekTerContext } from "../contexts/JatekTerContext";
import { useContext } from 'react';

export default function Elem(props) {
  const { kattintas }=useContext(JatekTerContext)
  function katt() {
    /* a kattapp fv-t kéne meghíni */
    kattintas(props.index)
  }
  return (
    <>
      <div className="elem" onClick={katt}>
        {props.adat}
      </div>
    </>
  );
}
