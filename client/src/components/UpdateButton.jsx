import React from "react";
import { Button } from "antd";

// Simple Button component
const UpdateButton = ({ onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      Update Points
    </Button>
  );
};

export default UpdateButton;
