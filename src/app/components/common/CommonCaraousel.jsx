import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "@/style/ProductSection/ProductSection.module.css";
import Image from "next/image";
const CommonCarousel = ({title,items=[]}) => {
  return (
    <>
      <div className={`${styles.productCarouselContainer} shadow-sm`}>
        <div >
        {title && <h1 className="mb-4 text-center md:text-left">{title}</h1>}

        </div>
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/5 sm:basis-1/2 "
              >
                <div className={`${styles.card} p-1`}>
                  <Card className=" border-none shadow-none  rounded-lg lg:h-[50vh] md:h-[70vh] md:w-[100%]   flex justify-center items-center ">
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      {/* Product Image */}
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={250}
                        height={250}
                        className="object-cover  mb-3 lg:h-[20vh] md:h-[50vh] sm:h-[50vh] "
                      />

                      <h2>{item.title}</h2>
                      <p className={`${styles.description} text-center`}>
                        {item.description.substring(0, 60)}...
                      </p>
                      <p className="text-xl font-bold  mt-2">{item.price}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default CommonCarousel;
