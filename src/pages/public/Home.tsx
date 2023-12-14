export default function Home() {
    return (
        <>
            <main className="text-slate-50">
                <h1 className="text-2xl text-yellow-500 text-center md:text-3xl lg:text-5xl underline underline-offset-2 decoration-red-700">
                    Garage V<span className="text-red-700">.</span> Parrot
                </h1>

                <div className="w-full mt-24 relative">
                    <img
                        className="w-full object-cover"
                        src="images/chevrolet_camaro.jpg"
                        alt=""
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <h2 className="mb-[10vh] text-2xl md:text-4xl lg:text-6xl text-center">
                                Le meilleur pour votre voiture
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
