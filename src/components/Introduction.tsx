import Image from "next/image";

export default function Introduction() {
    return (
      <>
      <div className= "w-screen h-[500px] bg-slate-600 p-8">
        <div className="flex justify-between items-center">
          <div>
          <p className="text-[#FCFFC1] text-2xl font-bold">Komputer Akuntansi</p>
          <h2 className="text-7xl font-bold text-[#D4EBF8]">Hello I&apos;m</h2>
          <h2 className="text-7xl font-bold text-[#D4EBF8]">Audrik</h2>
        
          <div className="my-8">
            <p className="text-white max-w-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Officiis facere praesentium libero aut tenetur eveniet nesciunt, 
            exercitationem laboriosam. Molestiae, quae?
            </p>
          </div>
          </div>
          
          <div className="relative w-96 h-96">
            <Image src={'/img/jj lin.jpg'} alt='Audrik' fill=
            {true} priority={true} className="rounded-3xl object-cover"/>
          </div>
        </div>
      </div>
      
   </>
    )
  }