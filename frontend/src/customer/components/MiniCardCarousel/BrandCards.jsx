import React from "react";
const BrandCard = (props) => {
  return (
    <div className=" h-[27rem] mt-3">
      <div>
        <div className="group my-3 mx-1 flex h-[25rem] w-[15rem] max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-lg shadow-gray-900">
          <a
            className="relative mx-1 mt-1 flex h-full overflow-hidden rounded"
            href="#"
          >
            <div>
              <div className=" absolute bottom-0 font-black mt-4 px-5 pb-5">
                <div className="  w-full h-full  bg-gray-400 items-center text-center p-2 bg-opacity-50 rounded-xl z-10">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      Brand XYz
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className=" text-sm text-slate-900">
                        Lorem ipsum dolor, sit amet consectetur.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="peer top-0 right-0 h-full w-full object-cover object-top"
                src={props.image}
                alt="product image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
