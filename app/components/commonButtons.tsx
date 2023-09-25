"use client";

import { useState } from "react";

export function Services_Buttons({
  getAboutData,
  count,
}: {
  getAboutData: any;
  count: number;
}) {
  const [skip, setSkip] = useState(3);
  const handleSeeMore = () => {
    getAboutData(skip);
    setSkip((current) => current + 3);
  };

  return (
    <button
      className={`${
        skip >= count ? "hidden" : "block"
      } w-fit border rounded-lg border-red-#ff044c px-6 py-2`}
      onClick={handleSeeMore}
    >
      See More
    </button>
  );
}

export function Portfolio_Buttons() {
  return (
    <button
      className="w-fit border rounded-lg border-red-#ff044c px-6 py-2"
      onClick={() => alert("Button Clicked")}
    >
      See More
    </button>
  );
}

export function Contact_Download_Buttons() {
  return (
    <button
      className="w-fit border rounded-lg border-red-#ff044c px-6 py-2"
      onClick={() => alert("Button Clicked")}
    >
      Download Resume
    </button>
  );
}
