/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../Database/data";
import Navbar from "./Navbar";

const SingleCard = () => {
  const { link } = useParams();
  console.log(link, "sj");
  const [show,setShow] = useState(true)

  // const anchors = iframeItem.contentWindow.document.getElementsByTagName("a");

  const frameLink = database[link - 1];
  console.log(frameLink.link);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 d-md-block d-none ">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falishaon.me%2Fposts%2F1930307310497292&show_text=true&width=300"
              style={{
                flexBasis: "425px",
                width: "100%",
                border: "none",
                overflow: "hidden",
              }}
              height="100%"
              //   style={{  }}

              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="col-12 col-md-8 text-center">
            {show?<h2>Loading</h2>:null}
            <iframe
              src={frameLink.link}
              onLoad={()=>setShow(false)}
              //   width="425"
              style={{ flexBasis: "425px", width: "100%" }}
              height="600"
              scrolling="none"
              frameBorder="0"
              webkitallowfullscreen="webkitallowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
