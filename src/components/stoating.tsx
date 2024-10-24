import Image from "next/image";
import { useEffect, useRef } from "react";

export const Stoating = () => {
  return (
    <section>
      <div className="relative h-screen w-screen bg-image-sky bg-cover bg-fixed bg-center">
        <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-sky-300"></div>
        <div
          id="stoating"
          className="relative h-4/5 w-full pt-32"
        >
          <Image
            src="/images/stoating-badger.png"
            alt="Stoating Badger"
            width={225}
            height={100}
          />
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-rose-200"></div>
      </div>
    </section>
  );
};
