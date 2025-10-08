export default function CategoryHeader({ title }) {
    return(
        <div className="w-full text-center bg-black py-8 md:py-24">
        <h2 className="uppercase font-bold text-white text-[28px] tracking-[2px] md:text-[40px] md:tracking-[1.5px]">{title}</h2>
        </div>
    )
}