import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import Link from "next/link";
import React from "react";

export default function Home() {
  // await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
