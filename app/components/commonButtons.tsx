"use client";

export function Services_Portfolio_Buttons() {
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
