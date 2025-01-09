import TechCard from "./TechCard";


export default function Tech () {
    return (
        <>
        <div className="bg-slate-900 w-screen min-h-[300px] p-8">
            <h1 className="text-4xl text-white font-bold mb-4">Techs</h1>
            <div className="w-32 border-2 mb-8"/>
            <div className="flex justify-center items-center w-full flax-wrap">
                <TechCard imageURL="/img/python.png" techStack="Python"/>
                <TechCard imageURL="/img/php.png" techStack="PHP"/>
                <TechCard imageURL="/img/js.png" techStack="JS"/>
                
            </div>
        </div>
        </>
    )
}