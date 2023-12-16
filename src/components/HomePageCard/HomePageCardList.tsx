import { cardDatas } from "./homePageCardData";
import AnimatedCard from "../AnimatedCard";

export default function HomePageCardList() {
    return (
        <>
            <ul className="flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap mt-8">
                {cardDatas.map((item) => (
                    <AnimatedCard key={item.id}>
                        <div className="bg-slate-50 hover:bg-slate-200 hover:-translate-y-2 hover:delay-200 hover:transition-transform text-black w-[200px] p-4 rounded md:w-[300px] lg:h-[200px] mb-6">
                            <div className="w-full flex justify-center items-center p-2">
                                <img className="w-1/3 md:w-1/4" src={item.icon} alt="" />
                            </div>
                            <p className="mt-2 text-center font-semibold">{item.text}</p>
                        </div>
                    </AnimatedCard>
                ))}
            </ul>
        </>
    );
}
