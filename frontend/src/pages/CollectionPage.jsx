import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sideBarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBarOpen = () => {
    // e.stopPropagation();
    // console.log(e);
    setIsSideBarOpen(!isSideBarOpen);
  };
  const handleClickOutside = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 1000,
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSideBarOpen}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* filter sidebar */}
      <div
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
        ref={sideBarRef}
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
//
