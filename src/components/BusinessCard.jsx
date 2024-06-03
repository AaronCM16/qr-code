import Link from "next/link";

const BusinessCard = ({ text, imgSrc, id }) => {
  return (
    <Link href={`/${id}`}>
      <div className="mx-3 my-3 h-[18rem] w-[15rem] cursor-pointer overflow-hidden rounded-lg bg-slate-800 shadow-sm shadow-slate-700/50 transition-all duration-300 hover:scale-105">
        <img src={imgSrc} className="h-[14rem] w-full bg-cover" id={id} />
        <p className="my-2 py-1 text-center text-xl">{text}</p>
      </div>
    </Link>
  );
};

export default BusinessCard;
