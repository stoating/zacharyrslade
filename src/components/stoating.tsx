import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Stoat {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  lOffset: number;
  rOffset: number;
  tOffset: number;
  bOffset: number;
  factor: number;
  vx: number;
  vy: number;
}

type Axis = {
  x: "x";
  y: "y";
};

export const Stoating: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [boundaryX, setBoundaryX] = useState(0);
  const [boundaryY, setBoundaryY] = useState(0);

  useEffect(() => {
    setBoundaryX(window.innerWidth);
    setBoundaryY(window.innerHeight);

    const stoats: Stoat[] = [];

    if (!canvasRef.current) return;

    init();

    function init() {
      createStoat("badger", 920, 400, -300, -100, 0, 0, 0.5);
      createStoat("ferret", 920, 400, -200, -180, 0, 0, 0.5);
      createStoat("stoat-top-hat", 640, 350, -50, -60, 0, 0, 0.6);
      createStoat("stoat", 350, 350, -20, 0, 0, 0, 0.75);
      createStoat("weasel", 920, 400, -200, -100, 0, 0, 0.5);

      animate();
    }

    function createStoat(
      id: string,
      width: number,
      height: number,
      lOffset: number,
      rOffset: number,
      tOffset: number,
      bOffset: number,
      factor: number
    ) {
      const dirX = Math.random() < 0.5 ? -1 : 1;
      const dirY = Math.random() < 0.5 ? -1 : 1;
      const vOffset = 0.5;
      const vFactor = 1.25;

      const stoat = {
        id: id,
        x: 0,
        y: 0,
        width: width,
        height: height,
        lOffset: lOffset,
        rOffset: rOffset,
        tOffset: tOffset,
        bOffset: bOffset,
        factor: factor,
        vx: dirX * (Math.random() * vFactor + vOffset),
        vy: dirY * (Math.random() * vFactor + vOffset),
      };

      stoats.push(stoat);
    }

    function changeDirection(stoat: Stoat, axis: keyof Axis) {
      if (axis == "x") {
        stoat.vx *= -1;
      } else {
        stoat.vy *= -1;
      }
    }

    function drawStoat(
      id: string,
      x: number,
      y: number,
      width: number,
      height: number
    ) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      const image = document.getElementById(id) as HTMLImageElement;

      if (context && image) {
        context.drawImage(image, x, y, width, height);
      }
    }

    function draw() {
      stoats.forEach((stoat) => {
        stoat.x += stoat.vx;
        stoat.y += stoat.vy;

        drawStoat(
          stoat.id,
          stoat.x,
          stoat.y,
          stoat.width * stoat.factor,
          stoat.height * stoat.factor
        );

        const lOffset = stoat.lOffset * stoat.factor;
        const tOffset = stoat.tOffset * stoat.factor;
        const rOffset = (stoat.width + stoat.rOffset) * stoat.factor;
        const bOffset = (stoat.height - stoat.bOffset) * stoat.factor;

        if (stoat.x < 0 + lOffset || stoat.x > boundaryX - rOffset) {
          changeDirection(stoat, "x");
        } else if (stoat.y < 0 + tOffset || stoat.y > boundaryY - bOffset) {
          changeDirection(stoat, "y");
        }
      });
    }

    function animate() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.clearRect(0, 0, boundaryX, boundaryY);
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  }, [boundaryX, boundaryY]);

  return (
    <section>
      <div className="relative h-screen w-screen bg-image-sky bg-cover bg-fixed bg-center">
        <div
          id="stoating"
          className="absolute top-0 left-0 h-64 w-full bg-gradient-to-b from-sky-300"
        ></div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-rose-200"></div>
        <canvas
          ref={canvasRef}
          id="container"
          width={boundaryX}
          height={boundaryY}
          className="absolute top-0 bottom-0 left-0 right-0 h-full w-full"
        ></canvas>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <a
            href="https://www.stoating.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-black bg-opacity-50 p-10 text-2xl text-white hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300"
          >
            Visit my Clojure blog and workspace at stoating.com
          </a>
        </div>
        <div className="invisible">
          <Image
            src="/images/stoating-badger.png"
            id="badger"
            alt="badger"
            width={250}
            height={250}
          />
          <Image
            src="/images/stoating-ferret.png"
            id="ferret"
            alt="ferret"
            width={250}
            height={250}
          />
          <Image
            src="/images/stoating-stoat.png"
            id="stoat"
            alt="stoat"
            width={250}
            height={250}
          />
          <Image
            src="/images/stoating-stoat-top-hat.png"
            id="stoat-top-hat"
            alt="stoat-top-hat"
            width={250}
            height={250}
          />
          <Image
            src="/images/stoating-weasel.png"
            id="weasel"
            alt="weasel"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};
