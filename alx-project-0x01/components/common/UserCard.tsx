import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  const imageUrl = `https://i.pravatar.cc/150?u=${username}`;
  const twitterUrl = `https://twitter.com/${username}`;
  const websiteUrl = `https://${website}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Company */}
      <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-500">{company?.name}</p>

      {/* Contact Info */}
      <div className="mt-3 space-y-1 text-sm text-gray-600">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-6">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          Twitter
        </a>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline text-sm"
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default UserCard;
