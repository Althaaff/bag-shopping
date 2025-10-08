import { useState } from "react";
import {
  Package,
  DollarSign,
  Hash,
  Palette,
  Ruler,
  Upload,
  X,
  Save,
  ArrowLeft,
} from "lucide-react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "Premium Leather Handbag",
    description:
      "Elegant genuine leather handbag with spacious interior compartments and a timeless design. Ideal for daily use or special occasions, featuring adjustable shoulder strap.",
    price: 250,
    countInStock: 25,
    sku: "BAG-001-BLK",
    category: "Handbags",
    brand: "LuxBag Co.",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["Small (8x6x3 in)", "Medium (10x8x4 in)", "Large (12x9x5 in)"],
    collections: "Fall 2024",
    gender: "Women",
    material: "Genuine Leather",
    images: [
      {
        url: "https://picsum.photos/150?random=10",
      },
      {
        url: "https://picsum.photos/150?random=11",
      },
      {
        url: "https://picsum.photos/150?random=12",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
    console.log("productsData", productData);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        url: URL.createObjectURL(file),
      };
      setProductData({
        ...productData,
        images: [...productData.images, newImage],
      });
    }
  };

  const handleRemoveImage = (index) => {
    setProductData({
      ...productData,
      images: productData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    alert("Product updated successfully!");
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Products</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Edit Product
              </h1>
              <p className="text-gray-600 mt-1">
                Update product information and details
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="space-y-8">
              {/* Basic Information Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      name="name"
                      placeholder="Enter product name"
                      value={productData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Describe your product..."
                      value={productData.description}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  {/* SKU */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      SKU *
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        name="sku"
                        placeholder="e.g., TSH-001-BLK"
                        value={productData.sku}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      name="category"
                      placeholder="e.g., Apparel"
                      value={productData.category}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Brand
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      name="brand"
                      placeholder="Enter brand name"
                      value={productData.brand}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                      value={productData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Unisex">Unisex</option>
                      <option value="Kids">Kids</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Pricing & Inventory Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Pricing & Inventory
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price ($) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        name="price"
                        placeholder="0.00"
                        value={productData.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  {/* Count in Stock */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Stock Quantity *
                    </label>
                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        name="countInStock"
                        placeholder="0"
                        value={productData.countInStock}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Variants Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-600" />
                  Product Variants
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sizes */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sizes (comma separated)
                    </label>
                    <div className="relative">
                      <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        name="sizes"
                        placeholder="S, M, L, XL"
                        value={productData.sizes.join(", ")}
                        onChange={(e) =>
                          setProductData({
                            ...productData,
                            sizes: e.target.value
                              .split(",")
                              .map((size) => size.trim()),
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {productData.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Colors (comma separated)
                    </label>
                    <div className="relative">
                      <Palette className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        name="colors"
                        placeholder="Black, White, Navy"
                        value={productData.colors.join(", ")}
                        onChange={(e) =>
                          setProductData({
                            ...productData,
                            colors: e.target.value
                              .split(",")
                              .map((color) => color.trim()),
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {productData.colors.map((color, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Material
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      name="material"
                      placeholder="e.g., 100% Cotton"
                      value={productData.material}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Collections */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Collection
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      name="collections"
                      placeholder="e.g., Summer 2024"
                      value={productData.collections}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-indigo-600" />
                  Product Images
                </h3>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="bg-blue-100 p-4 rounded-full mb-3">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-1">
                      Click to upload images
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </label>
                </div>

                {/* Image Preview */}
                {productData.images.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Uploaded Images ({productData.images.length})
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {productData.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all"
                        >
                          <img
                            src={image.url}
                            alt={`Product ${index + 1}`}
                            className="w-full h-32 object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="px-6 sm:px-8 py-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-semibold shadow-sm flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
