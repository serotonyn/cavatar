import React from "react";
import "./CarouselButton.scss";

export interface CarouselButtonProps {
  handleClick: () => void;
  direction: "LEFT" | "RIGHT";
}

export const CarouselButton = ({
  handleClick,
  direction = "LEFT",
}: CarouselButtonProps) => {
  return (
    <div
      data-testid="carousel-button"
      id="carousel-button-container"
      style={{ top: `calc(50% - 20px)` }}
      onClick={handleClick}>
      <label id="carousel-button-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="carousel-button-svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            {...(direction === "RIGHT" && {
              style: { transform: "scaleX(-1) translateX(-20px)" },
            })}
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
