import React from "react";
const MiniCard = (props) => {
  return (
    <div className=" h-[27rem] mt-3">
      <div>
        <div className="group my-3 flex h-[25rem] w-[12rem] max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
          <a
            className="relative mx-1 mt-1 flex h-60 overflow-hidden rounded"
            href="#"
          >
            <img
              className="peer top-0 right-0 h-full w-full object-cover object-top"
              src={props.image}
              alt="product image"
            />
            <img
              className="peer absolute top-0 -right-96 h-full w-full object-cover object-bottom transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
              src={props.image}
              alt="product image"
            />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                {props.itemsTitle}{" "}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-sm text-slate-900">
                  {props.discription}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
