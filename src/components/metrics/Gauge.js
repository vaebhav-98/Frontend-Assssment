import React from "react";

const Gauge = ({ value, min, max }) => {
    const range = max - min;
    const normalizedValue = Math.min(Math.max(value, min), max);
    const percentage = ((normalizedValue - min) / range) * 100;

    const gaugeStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "10px solid #ccc",
        position: "relative",
    };

    const needleStyle = {
        width: "2px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) rotate(${(percentage * 1.8 - 90)}deg)`,
        transformOrigin: "bottom center",
    };

    return (
        <div>
            <div style={gaugeStyle}>
                <div style={needleStyle}></div>
            </div>
            <p>Value: {normalizedValue}</p>
        </div>
    );
};

export default Gauge;
