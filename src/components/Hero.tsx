// src/components/Hero.tsx
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import "../components/css/hero.css"; // Import custom styles

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const length = 4;
  const intervalRef = useRef<number | null>(null);

  // ✅ SWIPE refs (solo para mobile)
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const isSwipingRef = useRef(false);

  // Define control theme per slide
  const controlThemes: ("light" | "dark")[] = [
    "dark",  // Slide 1
    "light",  // Slide 2
    "light", // Slide 3
    "dark", // Slide 4
  ];

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);
  const goTo = (i: number) => setCurrent(i);

  useEffect(() => {
    if (intervalRef.current != null) clearInterval(intervalRef.current);
    if (!isPaused) intervalRef.current = window.setInterval(next, 6000);
    return () => { if (intervalRef.current != null) clearInterval(intervalRef.current); };
  }, [isPaused, current]);

  const togglePause = () => setIsPaused((p) => !p);

  // Determine button styles based on current slide theme
  const isLight = controlThemes[current] === "light";
  const btnClasses = isLight
    ? "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
    : "bg-black/20 backdrop-blur-sm hover:bg-black/30 text-black";

  // ✅ SWIPE handlers (touch)
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startXRef.current = t.clientX;
    startYRef.current = t.clientY;
    isSwipingRef.current = true;
    // Pausa autoplay mientras el usuario interactúa
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isSwipingRef.current || startXRef.current == null || startYRef.current == null) return;

    const t = e.touches[0];
    const dx = t.clientX - startXRef.current;
    const dy = t.clientY - startYRef.current;

    // Si el usuario está scrolleando vertical, no interceptar
    if (Math.abs(dy) > Math.abs(dx)) return;

    // Evita scroll horizontal/bounce mientras se swipa
    e.preventDefault();
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isSwipingRef.current || startXRef.current == null || startYRef.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startXRef.current;
    const dy = t.clientY - startYRef.current;

    const THRESHOLD = 50; // sensibilidad del swipe

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      if (dx < 0) next(); // swipe left -> next
      else prev();        // swipe right -> prev
    }

    startXRef.current = null;
    startYRef.current = null;
    isSwipingRef.current = false;

    // Reanuda autoplay después de un momentito (opcional)
    window.setTimeout(() => setIsPaused(false), 900);
  };

  return (
    <section
      className="relative h-[400px] lg:h-[500px] overflow-hidden"
      // ✅ Swipe en mobile
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      // ✅ Permite scroll vertical normal, y swipe horizontal dentro del componente
      style={{ touchAction: "pan-y" }}
    >

      {/* Slide 1 */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${current === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
      >
        <img
          src="/assets/bg/bg-banner-homepage-1.jpg"
          alt="Fundamentos de Terapia Dialéctica Conductual"
          className="absolute inset-0 w-full h-full object-cover object-left z-0"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />

        <div className="relative h-full flex items-center z-10">
          <div className="sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[#1A2F3F]">
              <h2 className="text-3xl md:text-4xl mb-2">
                Diplomado en <strong>Fundamentos de Terapia Dialéctica Conductual</strong>
              </h2>
              <div className="flex justify-content-space-around gap-6 mt-lg-12">
                <div>
                  <p className="text-sm uppercase opacity-80">Fechas:</p>
                  <p className="text-base">12, 13 y 14 de Junio</p>
                </div>
                <div>
                  <p className="text-base mt-1 whitespace-pre-line">
                    Revisa nuestra Formación académica para más información
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${current === 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
      >
        {current === 1 && (
          <img
            src="/assets/bg/bg-banner-homepage-2.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-left md:object-right z-0"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        <div className="relative h-full flex items-center z-10">
          <div className="sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 w-full lg:flex">
            <div className="text-white w-full md:w-[60%]">
              <h2 className="text-3xl md:text-4xl mb-2">
                Curso: <br></br> <strong>Para entrenar habilidades DBT</strong>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base mt-1 inline-block">22, 23 y 24 de Mayo.</p>
                  <p className="text-base mt-1 inline-block ml-2"><strong>Formato Híbrido</strong></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${current === 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
      >
        {current === 2 && (
          <img
            src="/assets/bg/bg-banner-homepage-3.jpg"
            alt="background"
            className="mx-auto absolute inset-0 w-full h-full object-cover object-left z-0"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        <div className="sm:max-w-[90%] mx-auto relative h-full flex items-center z-10">
          <div className="w-full md:w-[68%] px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Curso-Taller: DBT Familias
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm uppercase opacity-80">Fechas:</p>
                  <p className="text-base">12, 13 y 14 de Junio</p>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase opacity-80 mt-2">Modalidad:</p>
                <p className="text-base ">Híbrido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${current === 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
      >
        {current === 3 && (
          <img
            src="/assets/bg/bg-banner-homepage-4.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-left lg:object-right z-0"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        <div className="relative h-full flex items-center z-10">
          <div className="sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 w-full lg:flex">
            <div className="text-[#000000]">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Nivel inicial RO-DBT
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm uppercase opacity-80">Fechas:</p>
                  <p className="text-base">22 y 23 de agosto</p>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase opacity-80 mt-2">Modalidad:</p>
                <p className="text-base ">Híbrido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (hidden on mobile) */}
      <button
        onClick={prev}
        className={`hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110 ${btnClasses} z-10`}
        aria-label="Prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className={`hidden sm:block absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110 ${btnClasses} z-10`}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots and Pause/Play */}
      <div className=" absolute bottom-1 sm:bottom-6 left-1/2 -translate-x-1/2 sm:flex items-center space-x-4 z-10">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 ${idx === current
                ? `${isLight ? 'bg-white' : 'bg-black'} w-12 h-3 rounded-full`
                : `${isLight ? 'bg-white/50 hover:bg-white/75' : 'bg-black/50 hover:bg-black/75'} w-3 h-3 rounded-full`
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          onClick={togglePause}
          className={`hidden sm:block p-3 rounded-full transition hover:scale-110 ${btnClasses}`}
          aria-label="Play/Pause"
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>
      </div>

      {/* Progress bar (adjust color per theme) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-10">
        <div
          className={`h-full transition-all duration-300 ease-linear ${isLight ? 'bg-white' : 'bg-black'}`}
          style={{ width: `${((current + 1) / length) * 100}%` }}
        />
      </div>
    </section>
  );
}
