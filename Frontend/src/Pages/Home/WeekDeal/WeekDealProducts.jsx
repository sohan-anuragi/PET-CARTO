import React, { useState, useEffect } from "react";
import WeekDeal from "./WeekDeal";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 649,
    hours: 12,
    minutes: 57,
    seconds: 21,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-red-600 font-bold text-sm">
        Hurry up! Sale end in:
      </span>
      <div className="flex gap-2">
        <div className="border-2 border-red-600 rounded-md px-2 py-1 flex flex-col items-center">
          <span className="text-red-600 font-bold text-sm">
            {String(time.days).padStart(3, "0")}
          </span>
          <span className="text-red-600 text-xs font-semibold">DAYS</span>
        </div>
        <div className="border-2 border-red-600 rounded-md px-2 py-1 flex flex-col items-center">
          <span className="text-red-600 font-bold text-sm">
            {String(time.hours).padStart(2, "0")}
          </span>
          <span className="text-red-600 text-xs font-semibold">HOURS</span>
        </div>
        <div className="border-2 border-red-600 rounded-md px-2 py-1 flex flex-col items-center">
          <span className="text-red-600 font-bold text-sm">
            {String(time.minutes).padStart(2, "0")}
          </span>
          <span className="text-red-600 text-xs font-semibold">MINS</span>
        </div>
        <div className="border-2 border-red-600 rounded-md px-2 py-1 flex flex-col items-center">
          <span className="text-red-600 font-bold text-sm">
            {String(time.seconds).padStart(2, "0")}
          </span>
          <span className="text-red-600 text-xs font-semibold">SEC</span>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const buttonBase =
    "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200";

  return (
    <div className="mt-[4rem]">
      <div className="m-[1rem] border-b-[1px] flex-col items-center border-gray-300 flex sm:justify-between gap-6 sm:flex-row">
        <h2 className="text-2xl p-[1rem]  font-bold ">Deal Of The Week</h2>
        {/* COUNTDOWN TIMER */}
        <CountdownTimer />
      </div>
      <div className="mt-[-1rem]  ">
        <WeekDeal />
      </div>
    </div>
  );
}
