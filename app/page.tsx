export default function Home() {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(257deg,hsla(18,84%,90%,0.35)_-32.4%,rgba(255,165,129,0.35)_-3.42%,rgba(255,73,0,0.35)_23.87%,rgba(255,140,160,0.35)_50.46%,rgba(255,120,170,0.35)_79.15%,rgba(249,57,166,0.35)_103.64%)] z-0"></div>

        <div className="relative px-10 w-full h-full z-10 flex flex-col items-center">
          <div className="flex flex-col justify-evenly w-full h-full max-w-[150ch]">
            <h1 className="2xl:text-8xl text-6xl font-bold text-left self-start-safe">OG BEST Karlsruhe</h1>
            <h1 className="2xl:text-6xl text-5xl font-bold text-right self-end-safe">Something cool</h1>
            <h1 className="2xl:text-6xl text-5xl font-bold text-left self-start-safe">Something else cool</h1>
          </div>
        </div>
      </div>
      <p>below</p>
    </div>
  );
}
