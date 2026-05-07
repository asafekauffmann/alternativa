import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="w-full min-h-auto flex flex-col items-center">
      {/* Css Centralizado 2 elementos row */}
      <div className="flex flex-col md:flex-row md:h-[700] items-center justify-between">
        <div className="flex items-center justify-center m-3">
          <Image
            src="/images/carroRodovia.png"
            height={500}
            width={600}
            alt="ImagemInicial"
          />
        </div>
        <div className="h-full flex flex-col items-baseline justify-end m-3">
          <div className="mb-20">
            <h2>Garantindo sempre sua segurança nas estradas</h2>

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
            <div className="flex flex-col text-center justify-start h-[400] md:text-start m-6 leading-tight">
              <h1 className="color-white mt-10">
                PRECISA DE SOCORRO IMEDIATO?
              </h1>
              <h2 className="color-white my-3">Calma, é só chamar o Boca!</h2>
              <p>
                Equipe 24 horas de plantão para te atender e te dar a total
                segurança nas estradas.
              </p>
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

      <div className="flex items-end w-3xl mt-16">
        <h1>
          Aqui voce tem guincho rapido com total segurança & Serviço 24 horas
        </h1>
      </div>

      {/* Css elementos trocando de ordem */}
      <div className="flex flex-col md:flex-row md:w-[1200] items-center justify-between">
        <div
          className="h-[489] md:w-[600] flex justify-center items-center my-16 bg-contain bg-no-repeat bg-center m-3 order-2 md:order-1"
          style={{ backgroundImage: "url('/images/background/bubble01.png')" }}
        >
          <Image
            src="/images/car/caminhao_01.png"
            height={600}
            width={600}
            alt="Caminhão de guincho 01"
          />
        </div>

        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2 md:w-[600]">
          <h1 className="leading-tight">
            Segurança do início ao fim para o seu conforto
          </h1>
          <p>
            Guincho para caminhões e maquinários pesados e com total segurança
            ao seu veículo.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2 md:w-[600] leading-tight">
          <h1>Serviço para carros leves e pesados</h1>
          <p>
            Entre em contato com a nossa equipe 24 horas prontos para te atender
            e te dar a total segurança nas estradas.
          </p>
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
        <div className="h-auto flex flex-col items-baseline justify-center m-3 order-1 md:order-2 md:w-[600] leading-tight">
          <h1>Serviços para Caminhões, Maquinários e Serviços pesados</h1>
          <p>
            Guincho para caminhões e maquinários pesados e com total segurança
            ao seu veículo.
          </p>
        </div>
      </div>

      <div className="h-[600] flex items-center justify-between">
        <div className="h-auto flex flex-col items-baseline justify-center px-6 md:w-[600] leading-tight">
          <h1>Faça orçamento com o Boka! Disk-socorro</h1>
          <p>
            Entre em contato com a nossa equipe 24 horas prontos para te atender
            e te dar a total segurança nas estradas.
          </p>
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
      <div className="w-full h-[600] flex flex-col md:flex-col items-center justify-center bg-pink">
        <h1 className="my-6">Avaliações de clientes</h1>

        <div className="md:w-[1020] flex flex-row items-center">
          <div className="h-auto w-1/3 flex items-center justify-center">
            <div className="h-72 w-72 flex flex-col items-center justify-center bg-card">
              <p>perfil</p>
              <Image
                src="/images/logo/stars.png"
                height={120}
                width={160}
                alt="star"
              />
              <p className="text-center">
                Agradecimento ao serviços da alternativa, muito rapido e de total confiança
                </p>
            </div>
          </div>

          <div className="h-auto w-1/3 flex items-center justify-center">
            <div className="h-72 w-72 flex flex-col items-center justify-center bg-card">
              <p>perfil</p>
              <Image
                src="/images/logo/stars.png"
                height={120}
                width={160}
                alt="star"
              />
              <p className="text-center">
                Agradecimento ao serviços da alternativa, muito rapido e de total confiança
              </p>
            </div>
          </div>

          <div className="h-auto w-1/3 flex items-center justify-center">
            <div className="h-72 w-72 flex flex-col items-center justify-center bg-card">
              <p>perfil</p>
              <Image
                src="/images/logo/stars.png"
                height={120}
                width={160}
                alt="star"
              />
              <p className="text-center">
                Agradecimento ao serviços da alternativa, muito rapido e de total confiança
              </p>
            </div>
          </div>
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
