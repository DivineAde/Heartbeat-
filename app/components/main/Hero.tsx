import HeroTextContent from "../submain/HeroTextContent";

export default function Hero() {
  return (
    <>
     <div className="relative w-full h-full flex flex-col">
      <video  
       autoPlay
       muted
       loop
       className="absolute top-[-340px] left-0 flex flex-col z-[1] object-cover h-full w-full rotate-180"
      >
        <source src="blackhole.webm" type="video/webm"  />
      </video>
      <HeroTextContent />
     </div>
    </>
  )
}