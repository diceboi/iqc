import Link from "next/link"

export default function MainButton({ text, link, icon, onclick, classname }) {
    return (
        <Link href={link} className={`flex flex-nowrap items-center gap-2 py-2 px-4 bg-[#248cbc] border border-[#248cbc] text-white font-semibold rounded-md hover:bg-[#248cbc] transition-all duration-200 min-w-fit lg:text-xl text-xs self-start ${classname}`} onClick={onclick}>{icon}{text}</Link>
    )
}