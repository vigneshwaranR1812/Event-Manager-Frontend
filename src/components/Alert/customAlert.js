import React, { useState } from "react";

const Alert = ({ message, variant }) => {
  const [showAlert, setShowAlert] = useState(true);
  const classNames = [
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-blueGray-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-indigo-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-amber-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-purple-500",
    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-500",
  ];
  (() => {
    setInterval(() => {
      setShowAlert(false);
    }, 5000);
  })();

  return (
    <>
      {showAlert ? (
        <div className={classNames[variant]}>
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{message}</b>
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() =>
              setInterval(() => {
                setShowAlert(false);
              }, 2000)
            }
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
