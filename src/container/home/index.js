import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Card from "../card";
import { POST_DATA, POST } from "./data";

function Home() {
  const [cardList, setCard] = useState(POST_DATA);

  // function that loads at scroll at end of window
  const loadFunc = (i) => {
    let cardItem = [...cardList, POST];
    setCard(cardItem);
  };

  return (
    <>
      <div className="cardMainWrapper mt-5">
        <div className="container">
          <div>
            <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
              useWindow={true}
            >
              {cardList.map((data) => (
                <Card post={data} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
