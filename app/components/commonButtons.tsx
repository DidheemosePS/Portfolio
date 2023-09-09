"use client";

export function Services_Portfolio_Buttons() {
  return (
    <button
      className="w-fit border rounded-lg border-red-#ff044c pl-6 pr-6 pt-2 pb-2"
      onClick={() => alert("Button Clicked")}
    >
      See More
    </button>
  );
}

export function Contact_Download_Buttons() {
  return (
    <button
      className="w-fit border rounded-lg border-red-#ff044c pl-6 pr-6 pt-2 pb-2"
      onClick={() => alert("Button Clicked")}
    >
      Download Resume
    </button>
  );
}

export function Contact_Submit_Buttons() {
  return (
    <button
      className="w-fit border rounded-lg border-red-#ff044c pl-6 pr-6 pt-2 pb-2 absolute top-[17.5rem] left-2/4 -translate-x-2/4 md:top-[16.75rem] md:left-0 md:-translate-x-0"
      onClick={() => alert("Button Clicked")}
    >
      Submit
    </button>
  );
}
