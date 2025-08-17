import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export default function ButtonOne({ bg, children }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <button
      className={clsx(
        `${
          bg === "black"
            ? "w-[160px] h-[48px] bg-black text-white uppercase tracking-[1px] cursor-pointer font-bold text-[13px] px-[30px] py-[15px] hover:bg-quartz"
            : "w-[160px] h-[48px] bg-burnt-orange text-white uppercase tracking-[1px] cursor-pointer font-bold text-[13px] px-[30px] py-[15px] hover:bg-light-orange"
        }`
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
