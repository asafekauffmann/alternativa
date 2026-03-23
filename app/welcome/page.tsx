import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="w-full min-h-auto flex flex-col items-center">

      {/* Css Centralizado */}
      <div className="w-auto h-[600]  flex items-center justify-center">
        <Image
          src="/images/logo/logo.png"
          height={620}
          width={580}
          className="w-2xs h-auto"
          alt="ImagemInicial"
        />
      </div>


        <Image
        src="/images/background/wave01.png"
        height={60}
        width={1000}
        className="w-full h-[200] h-max-[300] "
        alt="backgroundWave"
      />



      {/* Css Centralizado 2 elementos row */}
      <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className="h-auto w-1/2 flex items-center justify-center">
          <Image
            src="/images/carroRodovia.png"
            height={620}
            width={580}
            alt="ImagemInicial"
          />
        </div>
        <div className="h-auto w-1/2 flex flex-col items-baseline justify-center">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>

          <Image
            src="/images/logo/logo.png"
            height={620}
            width={580}
            className="w-2xs h-auto"
            alt="ImagemInicial"
          />
        </div>
      </div>








      {/* Css elementos trocando de ordem */}

      <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className="h-auto w-1/2 flex items-center">
          <Image
            src="/images/background/bubble01.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 01"
          />
        </div>
        <div className="h-auto w-1/2 flex flex-col items-baseline justify-center px-6">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
      </div>

      <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className=" h-auto w-1/2 flex flex-col items-baseline justify-center px-6">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
        <div className="h-screen w-1/2 flex items-center">
          <Image
            src="/images/background/bubble02.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 02"
          />
        </div>
      </div>

       <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className="h-auto w-1/2 flex items-center">
          <Image
            src="/images/background/bubble03.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 03"
          />
        </div>
        <div className="h-auto w-1/2 flex flex-col items-baseline justify-center px-6">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
      </div>

      <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className=" h-auto w-1/2 flex flex-col items-baseline justify-center px-6">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
        <div className="h-screen w-1/2 flex items-center">
          <Image
            src="/images/background/bubble04.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 04"
          />
        </div>
      </div>



      {/* Css Centralizado 3 elementos row */}
      <div className="w-[1020] h-[600] flex items-center justify-between">
        <div className="h-auto w-1/3 flex items-center justify-center">
          Mode
        </div>
        <div className="h-auto w-1/3 flex items-center justify-center">
          Mode
        </div>
        <div className="h-auto w-1/3 flex items-center justify-center">
          Mode
        </div>
      </div>

      <Image
        src="/images/background/wave01.png"
        height={60}
        width={1000}
        className="w-full h-auto"
        alt="backgroundWave"
      />
    </div>
  );
}
