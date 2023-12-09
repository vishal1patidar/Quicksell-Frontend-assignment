import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = ({
  size = 80,
  color = "#4fa94d",
  text = "Loading",
  showCircles = true,
  circleSize = 100,
  circleColor = "#4fa94d",
  textColor = "green",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {showCircles && (
        <ThreeCircles
          height={circleSize}
          width={circleSize}
          color={circleColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bolder",
          letterSpacing: "2px",
          ...textStyle,
        }}
      >
        {text}
      </span>
    </div>
  );
};
export default Loading;




