import React from "react";
import { Link } from "react-router";

export default function GoBack({ to }) {
  return (
    <Link to={to}>
      <button className="font-medium leading-[25px] tracking-normal opacity-50">
        Go Back
      </button>
    </Link>
  );
}
