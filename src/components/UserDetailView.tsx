// app/users/[id]/users-detail-client.tsx
"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  username: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

export default function UsersDetailClient({ id }: { id: string }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6 mt-10">
        <h1 className="text-2xl font-bold mb-4">
          {user.name.firstname} {user.name.lastname}
        </h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Street:</strong> {user.address.street}, {user.address.number}
        </p>
        <p>
          <strong>Zipcode:</strong> {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
