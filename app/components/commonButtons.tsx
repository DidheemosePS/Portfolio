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
      className="w-fit border rounded-lg border-red-#ff044c px-6 py-2 justify-self-center md:absolute md:left-0 md:-bottom-16"
      onClick={() => alert("Button Clicked")}
    >
      Submit
    </button>
  );
}
