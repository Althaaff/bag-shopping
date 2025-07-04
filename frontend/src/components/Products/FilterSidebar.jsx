import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 👜 Bag-shopping initial filter data
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: "",
    maxPrice: "",
    // Optional extras ↓
    // capacity: [], // ["0-10 L", "11-20 L", …]
    // feature: [],  // ["Water-resistant", "Laptop sleeve", …]
  });

  const [priceRange, setPriceRange] = useState([0, 10000]);

  // 1️⃣ What kinds of bags do you sell?
  const categories = [
    "Backpacks",
    "Tote Bags",
    "Messenger Bags",
    "Handbags",
    "Duffel Bags",
    "Sling/Crossbody",
    "Laptop Bags",
    "Travel Luggage",
    "Waist Packs",
    "Kids’ Bags",
  ];

  // 2️⃣ Typical bag colours (add your palette)
  const colors = [
    "Black",
    "Brown",
    "Tan",
    "Navy",
    "Grey",
    "Olive",
    "Blue",
    "Red",
    "Yellow",
    "Pink",
  ];

  // 3️⃣ “Size” for bags usually means volume; use labels or litre ranges
  const sizes = [
    "Small (≤10 L)",
    "Medium (11–20 L)",
    "Large (21–35 L)",
    "Extra Large (36 L+)",
  ];

  // 4️⃣ Common bag materials
  const materials = [
    "Genuine Leather",
    "PU Leather",
    "Vegan Leather",
    "Canvas",
    "Nylon",
    "Polyester",
    "Cordura®",
    "Denim",
    "Ripstop",
  ];

  // 5️⃣ Example brands (swap for yours)
  const brands = [
    "Herschel",
    "Fjällräven",
    "Wildcraft",
    "American Tourister",
    "Skybags",
    "Tumi",
    "Michael Kors",
    "Fossil",
    "Nike",
    "Adidas",
  ];

  // 6️⃣ Gender/target segment
  const genders = ["Men", "Women", "Unisex"];

  useEffect(() => {
    console.log("search params", searchParams);
    const params = Object.fromEntries([...searchParams]);
    console.log("params", params);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newFilters = { ...filters };

    console.log("new filters", newFilters.size);

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
        console.log("-->", [...(newFilters[name] || []), value]);
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
    console.log("new filters", newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);

    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };

    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Category
        </label>
        {categories.map((category) => (
          <div className="flex items-center mb-1" key={category}>
            <input
              type="radio"
              value={category}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              checked={filters.category === category}
              onChange={handleFilterChange}
              name="category"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Gender
        </label>
        {genders.map((gender) => (
          <div className="flex items-center mb-1" key={gender}>
            <input
              type="radio"
              value={gender}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="gender"
              checked={filters.gender === gender}
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>

        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              key={color}
              name="color"
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={handleFilterChange}
            ></button>
          ))}
        </div>
      </div>

      {/* size filter */}
      <div className="mb-6">
        {" "}
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div className="flex items-center mb-1" key={size}>
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              onChange={handleFilterChange}
            />

            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* material filter */}
      <div className="mb-6">
        {" "}
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div className="flex items-center mb-1" key={material}>
            <input
              type="checkbox"
              name="material"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
            />

            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* brand filter */}
      <div className="mb-6">
        {" "}
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div className="flex items-center mb-1" key={brand}>
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              onChange={handleFilterChange}
            />

            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* price range filter */}
      <div className="mb-8">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>

        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
        />

        <div className="flex justify-between text-gray-600 mr-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
//
