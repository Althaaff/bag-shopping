import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
//
const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneekers",
      size: "42",
      color: "white",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],

  totalPrice: 195,
};

const CheckOut = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [checkOutId, setCheckOutId] = useState(null);

  const handleCreateCheckOut = (e) => {
    e.preventDefault();

    setCheckOutId(12);
  };

  const handlePaymentSuccess = (details) => {
    console.log("payment successfull", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}

      <div className="bg-white rounded-lg p-6">
        <h2 className=" text-2xl uppercase mb-6">Checkout</h2>

        <form onSubmit={handleCreateCheckOut}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={"user@exampele.com"}
              disabled
              className="w-full border rounded p-2"
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 rounded border"
                required
              />
            </div>

            <div>
              <label htmlFor="" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 rounded border"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Address
            </label>

            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              required
              className="w-full rounded p-2 border"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            {" "}
            <div>
              <label htmlFor="" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 rounded border"
                required
              />
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 rounded border"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>

            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              required
              className="w-full rounded p-2 border"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              required
              className="w-full rounded p-2 border"
            />
          </div>
          <div className="mt-6">
            {!checkOutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay With Paypal</h3>
                {/* PayPal Button Component */}

                <PayPalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(error) => alert("Payment failed. Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/*Right Section  */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg mb-4">Order Summary</h2>

        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => {
            return (
              <div
                key={index}
                className="flex items-start justify-between py-2 border-b"
              >
                <div className="flex items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover mr-4"
                  />

                  <div className="">
                    <h3 className="text-md">{product.name}</h3>
                    <p className="text-gray-500">Size: {product.size}</p>
                    <p className="text-gray-500">Color: {product.color}</p>
                  </div>
                </div>

                <p className="text-xl">{product.price.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p className="">{cart.totalPrice.toLocaleString()}</p>
        </div>

        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
