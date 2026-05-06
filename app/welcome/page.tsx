import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="w-full min-h-auto flex flex-col items-center">
      {/* Css Centralizado */}
      <div className="w-auto h-[600] flex items-center justify-center">
        <Image
          src="/images/logo/logo.png"
          height={620}
          width={580}
          className="w-2xs h-auto"
          alt="ImagemInicial"
        />
      </div>

      {/* Wave */}
      <Image
        src="/images/background/wave01.png"
        height={60}
        width={1000}
        className="w-full h-[200] h-max-[300] "
        alt="backgroundWave"
      />

      {/* Css Centralizado 2 elementos row */}
      <div className="flex flex-col md:flex-row md:h-[700] items-center justify-between">
        <div className="flex items-center justify-center m-3">
          <Image
            src="/images/carroRodovia.png"
            height={400}
            width={500}
            alt="ImagemInicial"
          />
        </div>
        <div className="h-auto flex flex-col items-baseline justify-center m-3">
          <p>Garantindo sempre sua segurança nas estradas 011</p>

          <div className="w-full flex justify-end">
            <Image
              src="/images/logo/logo.png"
              height={400}
              width={480}
              className="w-2xs h-auto right-0"
              alt="ImagemInicial"
            />
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="w-full flex flex-col items-center relative mt-36">
        {/* CONTAINER DA WAVE */}
        <div className="relative w-full">
          <Image
            src="/images/background/wave01.png"
            height={60}
            width={1000}
            className="w-full h-[130] block absolute bottom-[-2] left-0 z-10"
            alt="backgroundWave"
          />
        </div>

        {/* DIV ROSA */}
        <div className="relative w-full flex md:h-[480] items-center justify-center bg-[#FA198B]">
          <div className="flex flex-col md:flex-row items-center justify-center w-auto mt-4">
            <div className="flex text-center h-auto md:text-start m-6">
              <h1 className="color-white">PRECISA DE SOCORRO IMEDIATO?</h1>
            </div>

            <div className="flex justify-end md:w-1/2">
              <Image
                src="/images/truckOne.png"
                height={220}
                width={400}
                alt="Caminhão de guincho 01"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Css elementos trocando de ordem */}
      <div className="flex flex-col md:flex-row md:w-[1200] items-center justify-between">
        <div
          className="h-[489]  md:w-[600] flex justify-center items-center my-16 bg-contain bg-no-repeat bg-center m-3 order-2 md:order-1"
          style={{ backgroundImage: "url('/images/background/bubble01.png')" }}
        >
          <Image
            src="/images/car/caminhao_01.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 01"
          />
        </div>

        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2  md:w-[600]">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>

        <div
          className="h-[450] flex justify-center items-center my-16 bg-contain bg-no-repeat bg-center m-3 order-1 md:order-2"
          style={{ backgroundImage: "url('/images/background/bubble02.png')" }}
        >
          <Image
            src="/images/car/caminhao_02.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 02"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div
          className="h-[489] flex justify-center items-center my-16 bg-contain bg-no-repeat bg-center m-3 order-2 md:order-1"
          style={{ backgroundImage: "url('/images/background/bubble03.png')" }}
        >
          <Image
            src="/images/car/caminhao_03.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 03"
          />
        </div>
        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
      </div>

      <div className="h-[600] flex items-center justify-between">
        <div className="h-auto flex flex-col items-baseline justify-center px-6">
          <h1>Mode</h1>
          <p>Garantindo sempre sua segurança nas estradas</p>
        </div>
        <div className="h-screen flex items-center">
          <Image
            src="/images/background/bubble04.png"
            height={620}
            width={580}
            alt="Caminhão de guincho 04"
          />
        </div>
      </div>

      {/* Css Centralizado 3 elementos row */}
      <div className="md:w-[1020] h-[600] flex flex-col md:flex-row items-center justify-between">
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

      {/* wave */}
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
