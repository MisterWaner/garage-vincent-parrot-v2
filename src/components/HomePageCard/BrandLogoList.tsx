import { logoDatas } from "./homePageCardData";
import AnimatedCard from "../AnimatedCard";

export default function BrandLogoList() {
    return (
        <>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                {logoDatas.map((item) => (
                    <div className="flex justify-center items-center">
                        <AnimatedCard key={item.id}
                        >
                            <div className="bg-slate-50 h-[200px] w-[200px] md:w-[300px] rounded flex justify-center items-center hover:bg-slate-200 hover:-translate-y-2 hover:delay-200 hover:transition-transform">
                                <img className="w-1/2" src={item.logo} alt="" />
                            </div>
                        </AnimatedCard>
                    </div>
                ))}
            </ul>
        </>
    );
}
