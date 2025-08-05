import { useNavigate } from "react-router-dom";

export default function ButtonOne(props) {
  const navigate = useNavigate()

  function handleClick(){
    navigate("/")
  }

  return (
    <button
      className={`w-[160px] h-[48px] bg-${props.bg} text-${
        props.color
      } uppercase tracking-[1px] cursor-pointer font-bold text-[13px] px-[30px] py-[15px] ${
        props.bg === "black" ? "hover:bg-quartz" : "hover:bg-light-orange"
      }`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}
