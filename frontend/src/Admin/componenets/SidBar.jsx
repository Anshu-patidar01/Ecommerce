import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SidBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                >
                  {/* close button */}
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </TransitionChild>

                  <div className="flex h-full flex-col bg-slate-600 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      {/* heading */}
                      <DialogTitle className=" flex flex-row items-center gap-5 font-extrabold text-5xl text-gray-50">
                        <div>Fashon HUB</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-16 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                            />
                          </svg>
                        </div>
                      </DialogTitle>
                    </div>
                    <div className="relative mt-8 bg-slate-800 flex-1  ">
                      {/* Your content */}
                      <div className="mt-5 flex flex-col gap-8">
                        <div className=" pr-40 hover:pr-20 duration-500 cursor-pointer">
                          <Link
                            to={"/admin/dashboard"}
                            className="bg-slate-600 block shadow-lg shadow-slate-900 hover:shadow-slate-600 hover:bg-slate-400 hover:text-black text-white font-semibold text-3xl p-2  rounded-r-3xl"
                          >
                            Dashboard
                          </Link>
                        </div>
                        <div className=" pr-40 hover:pr-20 duration-500 cursor-pointer">
                          <Link
                            to={"/admin/addproduct"}
                            className="bg-slate-500 block shadow-lg shadow-slate-900 hover:shadow-slate-600 hover:bg-slate-400 hover:text-black text-white font-semibold text-2xl p-2  rounded-r-3xl"
                          >
                            Add New Products
                          </Link>
                        </div>
                        <div className=" pr-40 hover:pr-20 duration-500 cursor-pointer">
                          <Link
                            to={"/admin/orders"}
                            className="bg-slate-500 block shadow-lg shadow-slate-900 hover:shadow-slate-600 hover:bg-slate-400 hover:text-black text-white font-semibold text-2xl p-2  rounded-r-3xl"
                          >
                            Orders
                          </Link>
                        </div>
                        <div className=" pr-40 hover:pr-20 duration-500 cursor-pointer">
                          <Link
                            to={"/admin/products"}
                            className="bg-slate-500 block shadow-lg shadow-slate-900 hover:shadow-slate-600 hover:bg-slate-400 hover:text-black text-white font-semibold text-2xl p-2  rounded-r-3xl"
                          >
                            Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="flex justify-end">
        <button
          className=" bg-white hidden md:block rounded-3xl p-2 px-4"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SidBar;
