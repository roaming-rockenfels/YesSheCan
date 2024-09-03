import React, { useEffect, useState } from "react";
import quotes from "../assets/quotes";
import { Container } from "@mui/material";
import { animated, useTransition, useSpringRef } from "@react-spring/web";

const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(null);

  const transRef = useSpringRef()

  const transitions = useTransition(quoteIndex, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
// TODO: ADD DROP ANIMATION
  })
  
  const pickAQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length - 1);
    console.log(quotes[quoteIndex]);
    setQuoteIndex(quoteIndex);
  };

  useEffect(() => {
    transRef.start()
  }, [quoteIndex, transRef])

  return(
    <animated.div >
    <Container
      className="Text-Box"
      onClick={pickAQuote}
      style={{
        height: "35%",
        borderRadius: 25,
        padding: 5,
        paddingLeft: 15,
        alignContent: "center",
      }}
    >

      {!quoteIndex && quoteIndex !== 0 && (
                <h1 className="Quote-Text" style={{ paddingLeft: "35%"}}>
                  Press for inspiration
                </h1>
      )}

{transitions((style, i) => {
      const quote = i ? quotes[i] : undefined
        return  (
          <>
        <h1 className="Quote-Text">
        {quote?.quote}
      </h1>
      <h2 className="Quote-Text" style={{ paddingLeft: "65%" }}>
        {`${quote?.author ?? ""}`}
      </h2>
          </>
      )
})}
    </Container>
      </animated.div>
  );
};
export default QuoteBox;
 