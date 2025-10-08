import React, { useState } from "react";
import { Package, User, DollarSign, CheckCircle } from "lucide-react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 200,
      status: "Processing",
    },
    {
      _id: 124,
      user: {
        name: "Jane Smith",
      },
      totalPrice: 350,
      status: "Shipped",
    },
    {
      _id: 125,
      user: {
        name: "Bob Johnson",
      },
      totalPrice: 150,
      status: "Delivered",
    },
  ]);

  const handleSelectChange = (orderId, status) => {
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  const handleStatusChange = (orderId, status) => {
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      Processing: "bg-blue-100 text-blue-800",
      Shipped: "bg-purple-100 text-purple-800",
      Delivered: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 justify-self-center">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Order Management
          </h1>
          <p className="text-gray-600">Manage and track all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.length}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${orders.reduce((sum, o) => sum + o.totalPrice, 0)}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Processing</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter((o) => o.status === "Processing").length}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <User className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Delivered</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter((o) => o.status === "Delivered").length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table/Cards */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Customer
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Total Price
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">
                          #{order._id}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                            {order.user.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-gray-900">
                            {order.user.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">
                          ${order.totalPrice}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <select
                            onChange={(e) =>
                              handleSelectChange(order._id, e.target.value)
                            }
                            value={order.status}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 outline-none transition-all"
                          >
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                          {order.status !== "Delivered" && (
                            <button
                              onClick={() =>
                                handleStatusChange(order._id, "Delivered")
                              }
                              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium text-sm shadow-sm"
                            >
                              Mark Delivered
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500">
                      <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p>No orders found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-100">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  key={order._id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        #{order._id}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-2">
                          {order.user.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-700">{order.user.name}</span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-600">Total Price</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${order.totalPrice}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <select
                      onChange={(e) =>
                        handleSelectChange(order._id, e.target.value)
                      }
                      value={order.status}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 outline-none"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    {order.status !== "Delivered" && (
                      <button
                        onClick={() =>
                          handleStatusChange(order._id, "Delivered")
                        }
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-sm"
                      >
                        Mark as Delivered
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No orders found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
