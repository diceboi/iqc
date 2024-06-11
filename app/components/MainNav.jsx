import Image from "next/image"
import Link from "next/link"
import MainButton from "./UI/MainButton"

export default function MainNav() {
    return(
        <section className="w-full container mx-auto z-50 py-8">
            <nav className="flex flex-nowrap w-full">
                <div className="relative flex flex-col justify-start items-start">
                    <Link href="/">
                    <Image 
                    src="/images/IQC_logo.png" 
                    width={100}
                    height={100}
                    alt={"logo"}
                    />
                    </Link>
                </div>
                <div className="flex flex-nowrap w-full justify-end items-center">
                    <MainButton text={'Contact us'} link={'mailto:hello@iqc-services.hu'} icon={''}/>
                </div>
            </nav> 
        </section>
        
    )
}