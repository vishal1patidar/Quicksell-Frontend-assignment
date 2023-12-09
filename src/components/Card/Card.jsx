import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";
const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src="data:image/jpeg;base64,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"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <BiLoader style={{ fontSize: "14px" }} />
            )
              : status === "Todo" ? (
                <FaRegCircle style={{ fontSize: "13px", color: "#ddeded" }} />
              ) : status === "In progress" ? (
                <BiAdjust style={{ fontSize: "14px", color: "#f2d750" }} />
              ) : status === "Done" ? (
                <BsCheckCircleFill />
              )
                : (
                  <IoMdCloseCircleOutline />
                ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
