"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { reviewData } from "@/data/productData";
import styles from "@/style/ProductSection/ProductSection.module.css";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    setReviews(reviewData);
  }, []);

  const reviewTemplate = (review) => {
    return (
      <div className="mt-[2rem] border-round m-2 text-left py-5 px-4 ">
        <div className="mb-3 flex items-center justify-between">
          <img
            src={review.img}
            alt="Rating"
            className="mb-2 "
            style={{ height: "2rem" }}
          />
          <p className="mb-1  font-[500]">{review.dateOfExperience}</p>
        </div>
        <div>
          <h4 className="mb-2 text-lg font-medium">{review.title}</h4>
          <p className="mb-3 font-[500]">
            {review.description.length > 120
              ? review.description.slice(0, 120) + "..."
              : review.description}
          </p>
          <div className="flex items-center justify-start gap-2">
            <p className="font-bold">Date of Experience:</p>
            <p className="mb-1  font-[500]">{review.dateOfExperience}</p>
          </div>
          <p className="mb-1  font-[500]">{review.name}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between md:flex-col sm:flex-col lg:flex-row flex-col w-[100%] mt-[3rem] border-1 border-b">
        <div className="flex flex-col items-center justify-between gap-5 whitespace-nowrap">
          <h1 className="text-center !text-[2.3rem] ">Excellent</h1>
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt="Reviews"
            width={200}
            height={200}
            className="max-w-[80%]"
          />
          <span>
            Based on
            <a href="#" className=" text-gray-700 border-b-2">
              18 Reviews
            </a>
          </span>
          <div className="flex items-center justify-center">
            <IoStarSharp size={20} color="#00b67a" />
            <h1>TrustPilot</h1>
          </div>
        </div>
        <div className="card w-[90%] ">
          <Carousel
            value={reviews}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            autoplayInterval={4000}
            itemTemplate={reviewTemplate}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
