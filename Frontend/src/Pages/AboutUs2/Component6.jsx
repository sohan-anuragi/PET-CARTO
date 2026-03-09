import img6 from "./AboutUsImg/img6.webp";
import { LuDog } from "react-icons/lu";

function DogBadge() {
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0d125b] mt-1">
      <LuDog className="text-[1.35rem] text-white" />
    </div>
  );
}

export default function Component6() {
  return (
    <section className="w-full bg-[#f9f7f5] px-6 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative bg-white p-1">
                <img
                  src={img6}
                  alt="Pet store interior"
                  className="w-full max-w-[540px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-[3rem]">
            <div className="flex gap-4">
              <DogBadge />
              <p className="text-[1rem] leading-relaxed text-[#2d2d2d] md:text-[1.05rem]">
                From starting out in a small room, to having our big retail
                break in <span className="font-bold">2008</span> as a tiny kiosk
                at the{" "}
                <span className="font-bold">Select City Mall in New Delhi</span>
                , we&apos;ve carved a new path for ourselves.
              </p>
            </div>

            <div className="flex gap-4">
              <DogBadge />
              <p className="text-[1rem] leading-relaxed text-[#2d2d2d] md:text-[1.05rem]">
                We grew one store at a time and before we knew it, we had{" "}
                <span className="font-bold">
                  90 stores in 18 different cities and 68 pet spas
                </span>{" "}
                as well!
              </p>
            </div>

            <div className="flex gap-4">
              <DogBadge />
              <p className="text-[1rem] leading-relaxed text-[#2d2d2d] md:text-[1.05rem]">
                Today, our team of pet experts have created over{" "}
                <span className="font-bold">400 first Indian pet products</span>{" "}
                and continue to help provide for the furry members of{" "}
                <span className="font-bold">
                  2,00,000 families across India!
                </span>
              </p>
            </div>

            <div className="flex gap-4">
              <DogBadge />
              <p className="text-[1rem] leading-relaxed text-[#2d2d2d] md:text-[1.05rem]">
                Our journey has been eventful, filled with lessons and more love
                than we had hoped for.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-[800px] text-[1.05rem] leading-relaxed text-[#2d2d2d] md:text-[1.1rem]">
            Pets are at the heart of everything we do and with each product and
            collection, we promise to do our best to honour them.
          </p>
        </div>
      </div>
    </section>
  );
}
