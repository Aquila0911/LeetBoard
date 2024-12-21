import React, { useState } from "react";
import { Button, notification, App } from "antd";
import CustomAntdStyles from "../styles/CustomAntdStyles";

const UpdateButton = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { notification } = App.useApp();

  const handleClick = async () => {
    setIsLoading(true);

    const startTime = Date.now();
    try {
      await onClick();
      notification.success({
        message: "Success",
        description: "Points saved successfully!",
        showProgress: true,
        placement: "topRight",
        duration: 3,
      });
    } catch (err) {
      notification.error({
        message: "Error",
        description: "Failed to save points. Please try again.",
        placement: "topRight",
      });
    } finally {
      const elapsedTime = Date.now() - startTime;
      const minDuration = 500;
      setTimeout(
        () => setIsLoading(false),
        Math.max(0, minDuration - elapsedTime)
      );
    }
  };

  return (
    <Button
      type="default"
      ghost
      color="default"
      variant="outlined"
      onClick={handleClick}
      loading={isLoading}
    >
      Save Points
    </Button>
  );
};

export default UpdateButton;
