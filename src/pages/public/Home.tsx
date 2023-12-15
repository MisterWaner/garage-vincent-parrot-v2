import HomePageCardList from "../../components/HomePageCard/HomePageCardList";
import BrandLogoList from "../../components/HomePageCard/BrandLogoList";

export default function Home() {
    return (
        <>
            <main className="text-slate-50">
                <section className="w-full mt-24 relative">
                    <img
                        className="w-full object-cover"
                        src="images/chevrolet_camaro.jpg"
                        alt=""
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <h1 className=" text-2xl text-yellow-500 text-center md:text-4xl lg:text-6xl underline underline-offset-2 decoration-red-700">
                                Garage V<span className="text-red-700">.</span>{" "}
                                Parrot
                            </h1>
                            <h2 className="lg:mb-[10vh] text-xl md:text-3xl lg:text-5xl text-center">
                                Le meilleur pour votre voiture
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="mb-4 text-center text-xl md:text-3xl lg:text-5xl">
                        Nos services
                    </h2>
                    <HomePageCardList/>
                </section>
                <section className="mt-6">
                    <h2 className="mb-4 text-center text-xl md:text-3xl lg:text-5xl">
                        Nos marques
                    </h2>
                    <BrandLogoList/>
                </section>
            </main>
        </>
    );
}
