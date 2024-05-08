import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = ({ type }) => {
  const showToast = (message, options = {}) => {
    toast[type](message, {
      draggable: true,
      position: options.position || "bottom-center",
      ...options,
    });
  };

  return <ToastContainer />;
};

export default ToastMessage;
