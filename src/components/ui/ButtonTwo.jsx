import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function ButtonTwo(props) {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate("/")
  }
  return (
    <button
      className={clsx(`w-[160px] h-[48px] outline outline-solid outline-black text-${props.color} uppercase tracking-[1px] font-bold text-[13px] px-[30px] py-[15px] cursor-pointer hover:text-white hover:bg-black`
      )}

      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}