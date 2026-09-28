"use client";

import React from "react";
import styles from "./review.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faMoneyBill1Wave,
  faMartiniGlassCitrus,
  faShieldHalved,
  faMountainSun,
  faUtensils,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type CategoryName =
  | "Culture & History"
  | "Affordability"
  | "Nightlife"
  | "Safety"
  | "Scenery"
  | "Food Scene";

export interface ReviewProps {
  reviewerName?: string;
  reviewMonth?: string;
  reviewText?: string;
  imageUrl?: string;
  destination?: string;
  ratings?: Partial<Record<CategoryName, number>>;
}

const ICON_MAP: Record<string, IconDefinition> = {
  "book-atlas": faBookAtlas,
  "money-bill-1-wave": faMoneyBill1Wave,
  "martini-glass-citrus": faMartiniGlassCitrus,
  "shield-halved": faShieldHalved,
  "mountain-sun": faMountainSun,
  utensils: faUtensils,
};

interface CategoryData {
  id: string;
  name: CategoryName;
  icon_name: string;
  active: boolean;
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "0d575c8a-f908-46ba-bcdf-8408b2cdc141",
    name: "Culture & History",
    icon_name: "book-atlas",
    active: true,
  },
  {
    id: "2250a86a-0e52-4392-8e75-727086ee22ab",
    name: "Affordability",
    icon_name: "money-bill-1-wave",
    active: true,
  },
  {
    id: "3df5194a-5793-4857-9bb4-b3414d8bc281",
    name: "Nightlife",
    icon_name: "martini-glass-citrus",
    active: true,
  },
  {
    id: "4777771f-36fa-4659-902e-9ec22793d388",
    name: "Safety",
    icon_name: "shield-halved",
    active: true,
  },
  {
    id: "d540de6a-8f48-4f5c-9fcb-437eced8001f",
    name: "Scenery",
    icon_name: "mountain-sun",
    active: true,
  },
  {
    id: "fb7a1bf6-6ddb-43ba-9856-66e1ab9ea8b6",
    name: "Food Scene",
    icon_name: "utensils",
    active: true,
  },
];

const getRatingColors = (rating: number): { color: string; bg: string } => {
  if (rating >= 4.0) return { color: "#1D7044", bg: "#EBFAF2" }; // Good
  if (rating >= 3.0) return { color: "#FF7E01", bg: "#FFF2E5" }; // Medium
  return { color: "#C91414", bg: "#FEE6E9" }; // Poor
};

const Review: React.FC<ReviewProps> = ({
  reviewerName = "John Doe",
  reviewMonth = "March 2026",
  reviewText = "Amazing experience! The destinations recommended by Promad were top-notch.",
  imageUrl = "/paris.jpg",
  destination = "Paris, France",
  ratings = {
    "Culture & History": 4.8,
    Affordability: 3.5,
    Nightlife: 2.2,
    Safety: 4.5,
    Scenery: 4.9,
    "Food Scene": 4.9,
  },
}) => {
  // Filter out undefined ratings, then sort highest to lowest
  const reviewCategories = CATEGORIES_DATA.filter(
    (cat) => cat.active && ratings[cat.name] !== undefined,
  ).sort((a, b) => {
    const ratingA = ratings[a.name] || 0;
    const ratingB = ratings[b.name] || 0;
    return ratingB - ratingA;
  });

  return (
    <div className={styles.reviewItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.reviewImage}
          src={imageUrl}
          alt={`Review by ${reviewerName}`}
        />
        <div className={styles.imageOverlay}></div>
        <span className={styles.destinationText}>{destination}</span>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewHeader}>
          <p className={styles.reviewName}>{reviewerName}</p>
          <p className={styles.reviewMonth}>{reviewMonth}</p>
        </div>

        <p className={styles.reviewText}>{reviewText}</p>

        <div className={styles.categoryList}>
          {reviewCategories.map((cat) => {
            const ratingValue = ratings[cat.name]!;
            const { color, bg } = getRatingColors(ratingValue);
            const icon = ICON_MAP[cat.icon_name];

            return (
              <div key={cat.id} className={styles.categoryItem}>
                <div
                  className={styles.iconContainer}
                  style={{
                    backgroundColor: bg,
                    borderColor: color,
                  }}
                >
                  {icon && (
                    <FontAwesomeIcon icon={icon} size="sm" color={color} />
                  )}
                </div>
                <div className={styles.categoryDetails}>
                  <span className={styles.categoryName}>{cat.name}</span>
                  <span
                    className={styles.categoryRating}
                    style={{ color: color }}
                  >
                    {ratingValue.toFixed(1)}/5
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
