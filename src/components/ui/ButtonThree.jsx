import clsx from "clsx";

export default function ButtonOne(props) {
  return (
    <button
      className={clsx(`w-[160px] h-[48px] bg-${props.bg} text-${props.color} uppercase tracking-[1px] font-bold text-[13px] px-[30px] py-[15px]`
      )}
    >
      {props.children}
    </button>
  );
}