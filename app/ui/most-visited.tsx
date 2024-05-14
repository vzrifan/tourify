import Image from "next/image";

export default function MostVisited() {
  return (
    <div className="pl-16">
      <div className="text-4xl pt-6">Most Visited</div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-6">
        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">1</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>

        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">2</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>

        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">3</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>

        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">4</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>

        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">5</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>

        <div>
          <Image
            src="/images/IMG_7990.png"
            width={450}
            height={300}
            alt="foto tempat wisata"
            className="rounded-3xl"
          />
          <div className="flex gap-x-2">
            <div className="text-xl">6</div>
            <div className="text-md pt-1">905560000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
