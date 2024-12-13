import React from "react";

export const IconComponentNode = ({ className }) => {
  return (
    <svg
      className={`icon-component-node ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.3215 10L7.74408 6.42259C7.41864 6.09715 7.41864 5.56952 7.74408 5.24408C8.06951 4.91864 8.59715 4.91864 8.92259 5.24408L13.0893 9.41074C13.4147 9.73618 13.4147 10.2638 13.0893 10.5893L8.92259 14.7559C8.59715 15.0814 8.06951 15.0814 7.74408 14.7559C7.41864 14.4305 7.41864 13.9028 7.74408 13.5774L11.3215 10Z"
        fill="#9EAFB9"
        fillRule="evenodd"
      />

      <mask
        className="mask"
        height="10"
        id="mask0_0_36"
        maskUnits="userSpaceOnUse"
        width="7"
        x="7"
        y="5"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M11.3215 10L7.74408 6.42259C7.41864 6.09715 7.41864 5.56952 7.74408 5.24408C8.06951 4.91864 8.59715 4.91864 8.92259 5.24408L13.0893 9.41074C13.4147 9.73618 13.4147 10.2638 13.0893 10.5893L8.92259 14.7559C8.59715 15.0814 8.06951 15.0814 7.74408 14.7559C7.41864 14.4305 7.41864 13.9028 7.74408 13.5774L11.3215 10Z"
          fill="white"
          fillRule="evenodd"
        />
      </mask>

      <g className="g" mask="url(#mask0_0_36)" />
    </svg>
  );
};