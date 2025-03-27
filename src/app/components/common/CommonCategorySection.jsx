import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "@/style/motherboard/MotherboardPage.module.css"; // reuse same CSS
import {  IoIosArrowForward } from "react-icons/io";

const CommonCategorySection = ({
  title,
  viewMoreLink,
  categories,
  bannerImage,
  shopNowTitle,
  shopNowLink,
  shopNowImage,
  productData = [],
}) => {
  return (
    <div className={styles.motherboardContainer}>
      {/* Header */}
      <div
        className={`${styles.motherboardHeader} flex justify-center lg:justify-start  gap-10 items-center`}
      >
        <h1>{title}</h1>
        <span className="text-[#4563b3]">
          <Link href={viewMoreLink}>View More</Link>
        </span>
      </div>

      <div className={styles.motherboardSection}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <ul className="text-center lg:text-left md:text-left">
            {categories.map((cat, index) => (
              <li key={index}>
                <Link href={"#"}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Banner */}
        <div className={styles.banner}>
          <Link href={shopNowLink}>
            <Image
              src={bannerImage}
              alt="Banner"
              width={700}
              height={900}
              objectFit="cover"
              className="h-full"
            />
          </Link>
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          <div
            className={`${styles.productGrid1} flex justify-around items-center md:flex-col lg:flex-row sm:flex-col flex-col mt-8`}
          >
            <div>
              <h2>{shopNowTitle}</h2>
              <div className="flex items-center justify-start">
                <span className="text-[#4563b3]">
                  <Link href={shopNowLink}>Shop Now</Link>
                </span>
                < IoIosArrowForward className="text-[#4563b3] " size={15} />
              </div>
            </div>
            <div>
              <Link href={shopNowLink}>
                <Image
                  src={shopNowImage}
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt={shopNowTitle}
                />
              </Link>
            </div>
          </div>

          <div className={styles.productGrid2}>
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {productData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/3 lg:basis-1/4 sm:basis-1/2"
                  >
                    <div className={`${styles.card} p-1`}>
                      <Card className="border-none shadow-none rounded-lg flex justify-center items-center">
                        <CardContent className="flex flex-col items-center justify-center p-4">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={250}
                            height={250}
                            className="object-contain mb-3 lg:h-[20vh]"
                          />
                          <h2>{item.title}</h2>
                          <p className={`${styles.description} text-center`}>
                            {item.description.substring(0, 60)}...
                          </p>
                          <p className="text-xl font-bold mt-2">{item.price}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCategorySection;
