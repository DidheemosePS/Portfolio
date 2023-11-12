"use client";

import { ReactElement } from "react";

export function HomeButtons({
  text,
  label,
  icon,
  style,
  action,
}: {
  text?: string;
  label?: string;
  icon?: ReactElement;
  style?: string;
  action: string;
}) {
  const handleOnSubmit = () => {
    window.open(action);
  };

  return (
    <button onClick={handleOnSubmit} className={style} aria-label={label}>
      {text}
      {icon}
    </button>
  );
}

export function FooterButtons({
  text,
  icon,
  action,
  aos,
}: {
  text?: string;
  icon?: ReactElement;
  action: string;
  aos: { style: string; duration: number };
}) {
  const handleOnSubmit = () => {
    window.open(action);
  };

  return (
    <button
      data-aos={aos.style}
      data-aos-duration={aos.duration}
      onClick={handleOnSubmit}
      className="flex flex-col items-center"
    >
      {icon}
      <p className="font-medium text-white">{text}</p>
    </button>
  );
}

export function WorksButtons({
  text,
  icon,
  action,
}: {
  text?: string;
  icon?: ReactElement;
  action: string;
}) {
  const handleOnSubmit = () => {
    window.open(action);
  };

  return (
    <button
      onClick={handleOnSubmit}
      className="flex justify-center items-center gap-2 px-2 py-2 rounded-lg shadow-md backdrop-blur-xl"
    >
      {icon}
      {text}
    </button>
  );
}
