import { UserData, UserModalProps, UserProps } from "@/interfaces";
import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
// import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            /></div>
             <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Suite</label>
            <input
              type="text"
              id="suite"
              name="suite"
              value={formData.address.suite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Geo Latitude</label>
            <input
              type="text"
              id="lat"
              name="lat"
              value={formData.address.geo.lat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Geo Longitude</label>
            <input
              type="text"
              id="lng"
              name="lng"
              value={formData.address.geo.lng}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Company Name</label>
            <input
              type="text"
              id="company.name"
              name="company.name"
              value={formData.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="company.catchPhrase"
              name="company.catchPhrase"
              value={formData.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
           <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="company.bs"
              name="company.bs"
              value={formData.company.bs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div> */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
           </div>
  );
}


export default UserModal;