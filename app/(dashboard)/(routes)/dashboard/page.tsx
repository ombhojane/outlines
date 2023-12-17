"use client";

import { ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from 'next/image';


import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";
import React, { useState } from 'react';
import Calendar from "./Calender";
// import Calendar from 'Calender.tsx';

export default function HomePage() {
  const router = useRouter();

  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleFilterButtonClick = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  return (
    <div>
      <div className="mb-8 space-y-4 filterHeader">
        <h2 className="text-2xl md:text-4xl font-bold text-left dateHeader">
          Date: 17/12/2023
        </h2>
        <div>
      <button className="filterButton">
        Filters
      </button>
      <Calendar />
    </div>
      </div>
      <div className="summarySection">
        <div className="summaryDropDown">
          <div className="summary">
          <div className="IDNO">
            <h1>1</h1>
          </div>
          <div className="sentiment">
            <Image src="/positive.png" alt="" width={30} height={30}/>
            <h1>Positive</h1>
          </div>
          <div className="NPS">
            <h1>8 NPS</h1>
            <ArrowDown/>
          </div>
          </div>
          <div className="dropDown">
            <h1 className="dropDownTitle">Summary: <span>AgentID: 215</span></h1>
            <p className="summarized">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem labore molestias laboriosam veritatis minima eius facilis hic necessitatibus provident, sapiente velit itaque quos beatae placeat commodi ipsam corporis doloremque ducimus ab?
            </p>
          </div>
        </div>
        <br />
        <div className="summaryDropDown">
          <div className="summary">
          <div className="IDNO">
            <h1>2</h1>
          </div>
          <div className="sentiment sentiment2">
            <Image src="/negative.png" alt="" width={30} height={30}/>
            <h1>Negative</h1>
          </div>
          <div className="NPS">
            <h1>4 NPS</h1>
            <ArrowDown/>
          </div>
          </div>
          <div className="dropDown">
            <h1 className="dropDownTitle">Summary: <span>AgentID: 256</span></h1>
            <p className="summarized">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem labore molestias laboriosam veritatis minima eius facilis hic necessitatibus provident, sapiente velit itaque quos beatae placeat commodi ipsam corporis doloremque ducimus ab?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
