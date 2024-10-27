import Image from "next/image";
import { useEffect, useRef } from "react";

export const Stoating = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface Stoat {
    id: string;
    x: number;
    y: number;
    ratio: number;
    factor: number;
    vx: number;
    vy: number;
  }

  type Axis = {
    x: "x";
    y: "y";
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const stoats: Stoat[] = [];
    const boundaryX = window.innerWidth;
    const boundaryY = window.innerHeight;
    const vOffset = 0.25;
    const vFactor = 1.5;

    init();

    function init() {
      createStoat("badger", 920/400, 200);
      createStoat("ferret", 920/400, 200);
      createStoat("stoat-top-hat", 640/350, 220);
      createStoat("stoat", 350/350, 400);
      createStoat("weasel", 920/400, 200);

      animate();
    }

    function createStoat(id: string, ratio: number, factor: number) {
      const dirX = Math.random() < 0.5 ? -1 : 1;
      const dirY = Math.random() < 0.5 ? -1 : 1;

      const stoat = {
        id: id,
        x: Math.random() * boundaryX,
        y: Math.random() * boundaryY,
        ratio: ratio,
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
      ratio: number,
      factor: number
    ) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      const image = document.getElementById(id) as HTMLImageElement;

      const width = ratio * factor * (window.innerHeight / window.innerWidth);
      const height = ratio * factor;

      if (context && image) {
        context.drawImage(image, x, y, width, height);
      }
    }

    function draw() {
      stoats.forEach((stoat) => {
        stoat.x += stoat.vx;
        stoat.y += stoat.vy;
        drawStoat(stoat.id, stoat.x, stoat.y, stoat.ratio, stoat.factor);

        if (stoat.x < 0 || stoat.x > boundaryX) {
          changeDirection(stoat, "x");
        } else if (stoat.y < 0 || stoat.y > boundaryY) {
          changeDirection(stoat, "y");
        }
      });
    }

    function animate() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.clearRect(0, 0, 1000, 1000);
      draw();
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <section>
      <div className="relative h-screen w-screen bg-image-sky bg-cover bg-fixed bg-center">
        <div
          id="stoating"
          className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-sky-300"
        ></div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-rose-200"></div>
        <canvas
          ref={canvasRef}
          id="container"
          width="1000"
          height="1000"
          className="absolute top-0 bottom-0 left-0 right-0 m-auto h-4/6 w-5/6"
        ></canvas>
        <div className="invisible">
          <Image
            src="/images/stoating-badger.png"
            id="badger"
            alt="badger"
            width={300}
            height={300}
          />
          <Image
            src="/images/stoating-ferret.png"
            id="ferret"
            alt="ferret"
            width={300}
            height={300}
          />
          <Image
            src="/images/stoating-stoat.png"
            id="stoat"
            alt="stoat"
            width={300}
            height={300}
          />
          <Image
            src="/images/stoating-stoat-top-hat.png"
            id="stoat-top-hat"
            alt="stoat-top-hat"
            width={300}
            height={300}
          />
          <Image
            src="/images/stoating-weasel.png"
            id="weasel"
            alt="weasel"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
