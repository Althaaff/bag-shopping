import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 123,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // default role //
  });

  const handleChange = function (e) {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // reset form after submission :
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log(userId, newRole);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete user?")) {
      console.log("deleting user with userId", userId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Add new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Role
              <select
                name="role"
                className="w-full p-2 border rounded"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User list management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <td className="py-3 px-4">Name</td>
              <td className="py-3 px-4">Email</td>
              <td className="py-3 px-4">Role</td>
              <td className="py-3 px-4">Actions</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id} className="border-b bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {user.name}
                  </td>

                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="p-2 border rounded"
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
