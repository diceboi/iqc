import Link from "next/link"

export default function SecondaryButton({ text, link, icon }) {
    return (
        <Link href={link} className="py-2 px-4 border border-[#000] text-black hover:text-white font-semibold text-xl rounded-md hover:bg-[#248cbc] hover:border-[#248cbc] transition-all duration-200">{icon} {text}</Link>
    )
}