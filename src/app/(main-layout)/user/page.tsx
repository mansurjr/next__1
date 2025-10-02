import React from "react";
import UserView from "../../../components/UserView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Users data",
  description: "See users data from the Fake Store API",
};

const User = async () => {
  const res = await fetch("https://fakestoreapi.com/users", {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return (
    <div>
      <UserView users={products} />
    </div>
  );
};

export default User;
