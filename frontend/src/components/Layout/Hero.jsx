import React from "react";
import ImageCarousel from "../Common/ImageCarousel";

const images = [
  "https://wildcraft.com/media/wysiwyg/Cargo_Packs_2.jpeg",
  "https://wildcraft.com/media/wysiwyg/Cargo_Life_Clothing_2.jpeg",
  "https://wildcraft.com/media/wysiwyg/Cargo_Cases_Hard_2_1.jpeg",
  "https://wildcraft.com/media/wysiwyg/Cargo_Footwear_2.jpeg",
];

const Hero = () => {
  return (
    <div>
      <section className="relative">
        <div className="w-full mx-auto">
          {" "}
          <ImageCarousel images={images} />
        </div>

        {/* <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              Vacation <br /> Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore our vacation ready outfits with fast worldwide shipping.
            </p>
            <Link
              to={"#"}
              className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
//
