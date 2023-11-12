"use client";

import { useEffect } from "react";

const CustomScript: React.FC = () => {
  useEffect(() => {
    const handleBodyClick = () => {
      const videoElement = document.querySelector(
        "video.inlinevideo"
      ) as HTMLVideoElement | null;
      if (videoElement && !videoElement.paused) {
        videoElement.play();
      }
    };

    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", handleBodyClick);
    });

    return () => {
      document.removeEventListener("DOMContentLoaded", handleBodyClick);
    };
  }, []);

  return null;
};

export default CustomScript;
