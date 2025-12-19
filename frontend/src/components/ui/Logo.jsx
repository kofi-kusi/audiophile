import React from "react";
import { Link } from "react-router";
import logo from "../../assets/shared/desktop/logo.svg";

export default function Logo() {
  return (
    <Link>
      <img src={logo} alt="Audiophile logo" />
    </Link>
  );
}
