import React from "react";

// Dynamically import images
const images = [
  new URL("../../assets/images/outreach1.jpg", import.meta.url).href,
  new URL("../../assets/images/outreach2.jpg", import.meta.url).href,
  new URL("../../assets/images/outreach.jpg", import.meta.url).href,
  
];

export default function Gallery() {
  const [active, setActive] = React.useState(images[0]);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[400px]"
          src={active}
          alt="outreach"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {images.map((img, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(img)}
              src={img}
              className={`h-20 w-full cursor-pointer rounded-lg object-cover object-center border-2 transition ${
                active === img ? "border-indigo-600" : "border-transparent"
              }`}
              alt={`outreach-thumbnail-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}