import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    colors: [],
    sizes: [],
    collections: "",
    gender: "",
    material: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(productData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded-md p-2"
            value={productData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Price
          </label>

          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-2"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Count in Stock */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Price
          </label>

          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-2"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            required
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            required
          />{" "}
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma seprated)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            required
          />{" "}
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma seprated)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            required
          />{" "}
        </div>

        {/*  Image Upload */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Upload Image
          </label>
          <input type="file" onChange={handleImageUpload} />

          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
