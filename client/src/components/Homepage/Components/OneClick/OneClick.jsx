import React from "react";
import "./OneClick.css";
import oneclick_1 from "./imgs/dress_1.jpg";
import oneclick_2 from "./images/oneclick_2.png";
import oneclick_3 from "./images/oneclick_3.png";
import oneclick_4 from "./images/oneclick_4.png";

function OneClick() {
  return (
    <div className="oneclick_main">
      <div className="container oneclick">
        <div className="oneclick_heading">One Click can get you new cloths</div>
        <div className="oneclick_boxes_container">
          <div className="oneclick_boxes" style={{ background: "#ffb01b" }}>
            <a href="#">
              <div
                className="oneclick_boxes_button"
                style={{ backgroundColor: "#FFE455" }}
              >
                Get Now
              </div>
            </a>
            {/* <div className="oneclick_boxes_image">
              <img src={oneclick_1} alt="" />
            </div> */}
          </div>
          <div className="oneclick_boxes" style={{ background: "#002276" }}>
            <a href="#">
              <div
                className="oneclick_boxes_button"
                style={{ backgroundColor: "#9FC1FF" }}
              >
                Get Now
              </div>
            </a>
            <div className="oneclick_boxes_image">
              <img src={oneclick_2} alt="" />
            </div>
          </div>
          <div className="oneclick_boxes" style={{ background: "#fc3e3e" }}>
            <a href="#">
              <div
                className="oneclick_boxes_button"
                style={{ backgroundColor: "#FF9E9E" }}
              >
                Get Now
              </div>
            </a>
            <div className="oneclick_boxes_image">
              <img src={oneclick_3} alt="" />
            </div>
          </div>
          <div className="oneclick_boxes" style={{ background: "#bc8948" }}>
            <a href="#">
              <div
                className="oneclick_boxes_button"
                style={{ backgroundColor: "#F7D9A8" }}
              >
                Get Now
              </div>
            </a>
            <div className="oneclick_boxes_image">
              <img src={oneclick_4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneClick;
