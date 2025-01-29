import React, { useEffect, useState } from "react";
function OfferTimer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-row text-center py-1 text-xl font-thin bg-slate-600 backdrop-blur-md w-full h-full  items-center text-white justify-center gap-2">
      <h1>Sale Ends In: </h1>
      <h1 className="">{"2"}</h1>
      <h1>:</h1>
      <h1 className="">{60 - time.getMinutes()}</h1>
      <h1>:</h1>
      <h1 className="">{60 - time.getSeconds()}</h1>
    </div>
  );
}

export default OfferTimer;
