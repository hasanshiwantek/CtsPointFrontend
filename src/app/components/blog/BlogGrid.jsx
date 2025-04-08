import * as React from "react";
import styles from "@/style/blog/Blog.module.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { blogData } from "@/data/BlogData";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const BlogGrid = () => {
  return (
    <div className={styles.blogGridContainer}>
      <div
        className={`${styles.blogGridSec} md:flex-col md:items-center lg:flex-row sm:flex-col sm:items-center flex-col`}
      >
        <div className={styles.blogLeft}>
          <h1> Recent Blog Posts</h1>
          <div className="flex items-center justify-start">
            <span className="text-[#4563b3] underline">
              <Link href="#">View All Posts</Link>
            </span>
            <IoIosArrowForward className="text-[#4563b3] " size={15} />
          </div>
        </div>

        <div className={styles.blogRight}>
          <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
              {blogData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 sm:basis-1/2 "
                >
                  <div className="p-1">
                    <Card className=" border-none shadow-none bg-[transparent]  rounded-lg  md:w-[100%]   flex justify-center items-center text-center ">
                      <CardContent className="flex flex-col items-center justify-center p-4 ">
                        {/* Product Image */}
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="object-contain mb-3 lg:h-[20vh] md:h-[50vh] sm:h-[50vh]  "
                        />
                        <div className="flex flex-col justify-center ">
                          <h2 className="uppercase">{item.title}</h2>
                          <p className="opacity-60 ">{item.date}</p>
                        </div>
                        <p className="">
                          {item.description}...
                          <span className="text-[#4563b3] underline">
                            View Details
                          </span>
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
      </div>
    </div>
  );
};

export default BlogGrid;
