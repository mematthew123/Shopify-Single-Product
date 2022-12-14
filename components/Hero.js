// // import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { useState } from "react";
import UnderlineLink from "./UnderlineLink";
import React from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/outline";
function Hero() {
  return (
    <div>
      <div className="h-[90vh] w-full relative">
        <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black opacity-80">
            Summer styles are finally here
          </h1>

          {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
          <Image
            src="/images/truck.jpg"
            layout="fill"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
          />
          {/* // this is the overlay that makes the text readable */}
          <p className=" flex font-extrabold text-xl text-center align-middle left-50% top-50%  text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn&apos;t care if you live or die.
          </p>
          {/* <button className="flex items-center justify-center w-40 h-12 bg-primary-500 rounded-full text-white text-base-regular font-bold drop-shadow-md shadow-black">
            Shop Now
            </button> */}

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <Link href="/store">
        <div className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
          <span>Check it out</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
}

export default Hero;
