// src/components/ui/alert.js
import React from "react";


export default function FiAlertCircle({ children, className }) {
  return <div className={className}>{children}</div>;
}

export const Alert = ({ children, type = "success" }) => {
  const typeClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className={`flex items-start p-4 rounded-md ${typeClasses[type]}`}>
      {children}
    </div>
  );
};

export const AlertTitle = ({ children }) => {
  return <h3 className="font-bold text-sm">{children}</h3>;
};

export const AlertDescription = ({ children }) => {
  return <p className="text-sm">{children}</p>;
};

// AlertCircle icon component
export const AlertCircle = ({ className }) => {
  return <FiAlertCircle className={className} />;
};
