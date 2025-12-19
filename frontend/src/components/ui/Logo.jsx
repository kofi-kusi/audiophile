import React from "react";
import { Link } from "react-router";
import logo from "../../assets/shared/desktop/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="md:mr-auto md:ml-8 lg:m-0">
      <img src={logo} alt="Audiophile logo" />
    </Link>
  );
}
