import Image from "next/image"

export default function Services() {
    return(
        <section className="relative container mx-auto border-x border-[#ddd] py-20 cross-bottom-left">
            
            <div className="ruled-grid lg:grid-cols-3 grid-cols-1 grid-rows-2 min-h-[500px] border-b border-[#ddd] cross-top">
                <div className="card flex items-end justify-end">
                <div className="absolute -left-0 lg:top-0 bottom-0 -translate-y-1/2 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                    <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">Services</h2>
                </div>
                <div className="card">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/assembly-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/assembly-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Assembly</h3>
                    </div>
                </div>
                <div className="card h-[300px]">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/metal-working-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/metal-working-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Metal Working</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/logistics-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/logistics-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Logistic Services</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/engeneering-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/engeneering-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Engeneering services</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/labor-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/labor-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Labor Hire</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}