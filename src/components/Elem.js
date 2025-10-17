import React from "react";

export default function Elem(props) {
  function katt() {
    /* a kattapp fv-t kéne meghíni */
    props.katt(props.index)
  }
  return (
    <>
      <div className="elem" onClick={katt}>
        {props.adat}
      </div>
    </>
  );
}
