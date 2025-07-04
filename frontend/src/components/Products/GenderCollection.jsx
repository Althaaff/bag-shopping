import React from "react";
import bagCollection1 from "../../assets/bags /c1.png";
import bagCollection2 from "../../assets/bags /c2.png";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* bag1 collection */}
        <div className="relative flex-1">
          <img
            src={bagCollection1}
            alt="bag collection"
            className="w-full h-[700px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Bag's Collection
            </h1>

            <Link
              to={"/collections/all?gender=Women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* bags2 collection */}
        <div className="relative flex-1">
          <img
            src={bagCollection2}
            alt="bag collection"
            className="w-full h-[700px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Bag's Collection
            </h1>

            <Link
              to={"/collections/all?gender=Women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
//
