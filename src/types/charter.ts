import * as React from "react";
// Charter types for @fishon/ui

export type Trip = {
  name: string;
  price: number; // RM
  duration: string; // e.g. "4 hours", "8 hours"
  description?: string;
  startTimes?: string[]; // 24h strings e.g. ["07:00","13:30"]
  maxAnglers?: number; // max pax fishing
  private?: boolean; // whole boat vs shared
};

export interface ReviewMedia {
  id: string;
  type: "image" | "video";
  url: string;
  alt: string;
  poster?: string;
}

export interface ReviewProps {
  id: string;
  reviewerName: string;
  reviewerInitials?: string;
  createdAt: string;
  tripName: string;
  overallRating: number;
  review: string;
  badges?: string[];
  media?: ReviewMedia[];
}

export interface GuestFeedbackProps {
  reviews: Array<{
    createdAt: string;
    badges?: string[];
  }>;
  ratingAvg: number;
  ratingCount: number;
  summariseBadges: (reviews: Array<{ badges?: string[] }>) => Array<{
    badge: {
      id: string;
      label: string;
      icon: React.ReactNode;
      description: string;
    };
    count: number;
  }>;
}
