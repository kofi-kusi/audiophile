import React from "react";
import { Link, useNavigate } from "react-router";

export default function GoBack() {
  const navigate = useNavigate()
  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1)
    }else{
      navigate("/")
    }
  }
  return (
    <button className="font-medium leading-[25px] tracking-normal opacity-50" onClick={handleGoBack}>
      Go Back
    </button>
  );
}
