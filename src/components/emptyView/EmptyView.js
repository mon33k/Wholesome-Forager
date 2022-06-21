import React from "react";
import "./EmptyView.css";

const EmptyView = ({ message = "No Result" }) => {
  return <div className="empty-view">{message}</div>;
};

export default EmptyView;
