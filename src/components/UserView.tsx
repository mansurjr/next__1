"use client";
import React from "react";
import ProductImage from "./ProductImage";

interface User {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

const UserView = ({ users }: { users: User[] }) => {
  return (
    <section className="container mx-auto px-6">
      <h1 className="text-2xl font-bold mb-6">User View</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
            <ProductImage
              type="user"
              src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
              alt={`${user.name.firstname} ${user.name.lastname}`}
              id={user.id}
            />
            <h2 className="text-lg font-semibold mt-3">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-xs">
              {user.address.street}, {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserView;
