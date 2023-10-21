"use client";

import { useState } from "react";

export function Services_Buttons({
  getServicesData,
  count,
}: {
  getServicesData: (skip: number) => void;
  count: number;
}) {
  const [skip, setSkip] = useState(3);
  const handleSeeMore = () => {
    getServicesData(skip);
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

export function Portfolio_Buttons({
  getPortfolioData,
  count,
}: {
  getPortfolioData: (skip: number) => void;
  count: number;
}) {
  const [skip, setSkip] = useState(3);
  const handleSeeMore = () => {
    getPortfolioData(skip);
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

import { signOut } from "next-auth/react";

export function HandleSignOut() {
  return <button onClick={() => signOut()}>SignOut</button>;
}
