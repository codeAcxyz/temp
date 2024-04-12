import React from "react";
import { useToasts } from "react-toast-notifications";

const Toast = ({ message, type }) => {
  const { addToast } = useToasts();

  React.useEffect(() => {
    addToast(message, {
      appearance: type || "info", // or 'success', 'error', 'warning'
      autoDismiss: true,
      // Example of inline styles
      style: {
        border: `2px solid ${
          type === "success" ? "green" : type === "error" ? "red" : "blue"
        }`,
        borderRadius: "8px",
        background: "white",
        color: "black",
        padding: "10px",
      },
      toastButtonColor:
        type === "success" ? "green" : type === "error" ? "red" : "blue",
    });
  }, [message, addToast, type]);

  return null;
};

export default Toast;
