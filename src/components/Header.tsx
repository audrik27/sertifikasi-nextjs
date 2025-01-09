export default function Header () {
    return (
        <>
        <div className="w-screen p-8 bg-slate-400 flex justify-between items-center">
            <div>
            <p className = "font-bold text-white text-3xl">BestPart
            </p>
        </div> 
            <div>
                <ul className="flex space-x-4">
                    <li className="text-white font-bold text-lg">Home</li>    
                    <li className="text-white font-bold text-lg">Techs</li>
                    <li className="text-white font-bold text-lg">Biography</li>
                    <li className="text-white font-bold text-lg">Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}