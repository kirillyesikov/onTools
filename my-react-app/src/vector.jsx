import React from "react";

export const Vector = ({ className }) => {
  return (
    <svg
      className={`vector ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 21 24"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0 2.9313C0 2.15387 0.276562 1.40828 0.768845 0.858557C1.26113 0.308832 1.92881 0 2.625 0L18.375 0C19.0712 0 19.7389 0.308832 20.2312 0.858557C20.7234 1.40828 21 2.15387 21 2.9313V20.5191C21 21.2965 20.7234 22.0421 20.2312 22.5918C19.7389 23.1415 19.0712 23.4504 18.375 23.4504H2.625C1.92881 23.4504 1.26113 23.1415 0.768845 22.5918C0.276562 22.0421 0 21.2965 0 20.5191V2.9313ZM19.6875 2.9313C19.6875 2.54258 19.5492 2.16979 19.3031 1.89493C19.0569 1.62006 18.7231 1.46565 18.375 1.46565H2.625C2.2769 1.46565 1.94306 1.62006 1.69692 1.89493C1.45078 2.16979 1.3125 2.54258 1.3125 2.9313V20.5191C1.3125 20.9078 1.45078 21.2806 1.69692 21.5554C1.94306 21.8303 2.2769 21.9847 2.625 21.9847H18.375C18.7231 21.9847 19.0569 21.8303 19.3031 21.5554C19.5492 21.2806 19.6875 20.9078 19.6875 20.5191V2.9313Z"
        fill="#0F172A"
      />
    </svg>
  );
};