"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./reviewList.module.css"; // Updated import!
import Review from "../review/review.component";

// Accept children to render the header text inline with controls
const ReviewList = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.emblaRoot}>
      {/* 1. Header Row (Text + Navigation Buttons) */}
      <div className={styles.headerRow}>
        {children}
        <div className={styles.emblaControls}>
          <button className={styles.emblaButton} onClick={scrollPrev}>
            ‹
          </button>
          <button className={styles.emblaButton} onClick={scrollNext}>
            ›
          </button>
        </div>
      </div>

      {/* 2. Embla Slider */}
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div className={styles.emblaSlide}>
            <Review
              imageUrl="/bologna-2.jpg"
              reviewerName="Jason"
              reviewMonth="April 2025"
              reviewText="Bologna is the food capital of Italy for a reason! Food was incredible and reasonably priced, and the walk to San Luca was stunning!"
              ratings={{
                Safety: 5,
                "Food Scene": 5,
                Affordability: 5,
                Scenery: 5,
              }}
              destination="Bologna, Italy"
            />
          </div>
          <div className={styles.emblaSlide}>
            <Review
              imageUrl="/favignana-2.jpg"
              reviewerName="Bri"
              reviewMonth="September 2026"
              reviewText="Hidden gem!! We took a ferry out from Trapani for a day trip. We spent €10 on a day hire for bikes, and cycled to a few different beaches on the island. Perfect for a day trip but I'd recommend getting an early ferry out so you can maximise on the island! The beaches get crowded too. But you can find some quieter spots."
              ratings={{
                Safety: 5,
                Scenery: 5,
                "Food Scene": 3,
                Affordability: 3,
              }}
              destination="Favignana, Italy"
            />
          </div>
          <div className={styles.emblaSlide}>
            <Review
              imageUrl="/fort-william-2.jpg"
              reviewerName="Brady"
              reviewMonth="August 2025"
              reviewText="The city itself can be explored in half a day, but it serves as a perfect place for some of the best day trips in the country. Don't miss out on hiking Ben Nevis, or taking a day trip to see the Glenfinnan Viaduct. Fort Williams is a nature lovers dream."
              ratings={{
                Safety: 5,
                Scenery: 5,
                "Culture & History": 5,
                "Food Scene": 3,
              }}
              destination="Fort William, Scotland"
            />
          </div>
          <div className={styles.emblaSlide}>
            <Review
              imageUrl="/annecy-2.jpg"
              reviewerName="Bradley"
              reviewMonth="May 2026"
              reviewText="There's a dedicated cycle lane that goes round the entire lake and is a beautiful experience, as well as awesome looking paragliding round the mountains"
              ratings={{
                Safety: 5,
                Scenery: 5,
                Affordability: 4,
                "Food Scene": 3,
              }}
              destination="Annecy, France"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
