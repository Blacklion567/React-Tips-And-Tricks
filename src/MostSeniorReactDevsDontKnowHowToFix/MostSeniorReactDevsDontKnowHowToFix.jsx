import { useState } from "react";
import Counter from "./Counter";

function MostSeniorReactDevsDontKnowHowToFix() {

  const [isKyle, setIsKyle] = useState(true);

  return (
    <>
      {isKyle ? <Counter name="Blacklion567" key="Blacklion567" /> : <Counter name="Kyle" />}
      <br />
      <button onClick={() => setIsKyle(k => !k)}>Swap</button>
    </>

  );
}



export default MostSeniorReactDevsDontKnowHowToFix;
