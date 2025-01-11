import React from "react";

interface FieldErrorProps {
  id: string;
  message: string;
}

const FieldError: React.FC<FieldErrorProps> = ({ message, id }) => {
  return (
    <p id={id} className={`text-red-500 mt-2 hidden`}>
      {message}
    </p>
  );
};

export default FieldError;
