import Image from "next/image"

export default function Gallery() {
    return(
        <section className="relative container mx-auto border-x border-[#ddd] py-20 cross-top-right">
            <div className="ruled-grid grid-cols-3">
                <div className="card min-h-[300px]  col-span-2 row-span-2">
                    <div className="relative w-full h-full rounded-2xl">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_010_MKB_3055 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale"
                    />
                    </div>
                </div>
                <div className="card min-h-[300px]">
                    <div className="relative w-full h-full rounded-2xl">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_020_MKB_3120 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale"
                    />
                    </div>
                </div>
                <div className="card min-h-[300px]">
                    <div className="relative w-full h-full rounded-2xl">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_064_MKB_3266 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale"
                    />
                    </div>
                </div>
                <div className="card min-h-[300px]  col-span-2 row-span-2">
                    <div className="relative w-full h-full rounded-2xl">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_078_MKB_3324 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale"
                    />
                    </div>
                </div>
                <div className="card min-h-[300px]">
                    <div className="relative w-full h-full rounded-2xl">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_096_IMG_8813 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale"
                    />
                    </div>
                </div>
                <div className="card min-h-[300px]">
                    <div className="relative w-full h-full rounded-2xl ">
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_146_MKB_3650 copy.webp" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl grayscale "
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}