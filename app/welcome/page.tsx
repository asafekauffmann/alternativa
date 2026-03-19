import Image from "next/image";



export default function WelcomePage() {

  return (
    <div className="w-full min-h-auto flex flex-col items-center">

      {/* Css Centralizado */}
      <div className="h-screen w-auto flex items-center justify-center">
        <Image src="/images/alternativaLogo.svg" height={150} width={400} alt="Logo"/>
      </div>


      {/* Css Centralizado 2 elementos row */}
      <div className="w-[980] flex items-center justify-between">
        <div className="h-screen w-1/2 flex items-center justify-center">
          <Image src="/images/carroRodovia.png" height={620} width={580}  alt="Carro na rodovia"/>
        </div>
        <div className="h-screen w-1/2 flex items-center justify-center">
        <h1>
          Mode
        </h1>
        </div>
      </div>


      {/* Css Centralizado 3 elementos row */}
      <div className="w-[980] flex items-center justify-between">
        <div className="h-screen w-1/3 flex items-center justify-center">
          Mode
        </div>
        <div className="h-screen w-1/3 flex items-center justify-center">
          Mode
        </div>
         <div className="h-screen w-1/3 flex items-center justify-center">
          Mode
        </div>
      </div>










    </div>
  );
}
