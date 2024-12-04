import Image from "next/image"
import Link from "next/link"
import MainButton from "./UI/MainButton"

export default function MainNav() {
    return(
        <section className="w-full container mx-auto z-50 py-8">
            <nav className="flex flex-nowrap items-center gap-8 w-full">
                <div className="relative flex flex-nowrap justify-start items-center gap-4 border-r border-[--lightgrey] min-w-fit pr-4">
                    <Link href="/">
                    <Image 
                    src="/images/IQC_logo.png" 
                    width={100}
                    height={100}
                    alt={"logo"}
                    className="min-w-[100px]"
                    />
                    </Link>
                    <h3 className="font-bold min-w-fit text-[--grey]">Plan it,<br></br>Make it,<br></br>Deliver it</h3>
                </div>
                <ul className="flex gap-8 text-[--grey] font-bold justify-between h-full min-w-fit">
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Assembly</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Cable manufacturing</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Metal working</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Engeneering services</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Labor hire</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Signage</li>
                    <li className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">Mobile container</li>
                </ul>
                <div className="flex flex-nowrap items-center justify-end w-full justify-self-end">
                    <MainButton text={'Contact us'} link={'mailto:hello@iqc-services.hu'} icon={''}/>
                </div>
            </nav> 
        </section>
        
    )
}