import React, { useState } from "react";

const Form = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const page1 = (
    <>
      <h2 className="text-2xl font-bold text-[--Marine-blue]">Personal Info</h2>
      <p className="text-[--Cool-gray]">
        Please provide your name, email address, and phone number.
      </p>
      <div className="my-2">
        <label
          className="text-xs font-semibold text-[--Marine-blue]"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g Stephen King"
          className="h-10 w-full rounded-md border-2 px-2 text-sm font-semibold"
        />
      </div>
      <div className="my-2">
        <label
          className="text-xs font-semibold text-[--Marine-blue]"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="e.g stephenking@lorem.com"
          className="h-10 w-full rounded-md border-2 px-2 text-sm font-semibold"
        />
      </div>
      <div className="my-2">
        <label
          className="text-xs font-semibold text-[--Marine-blue]"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          placeholder="e.g +1 234 567 890"
          className="h-10 w-full rounded-md border-2 px-2 text-sm font-semibold"
        />
      </div>
    </>
  );
  const page2 = (
    <>
      <h2 className="text-2xl font-bold text-[--Marine-blue]">
        Select your plan
      </h2>
      <p className="text-[--Cool-gray]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 py-2">
        <label>
          <input
            type="radio"
            name="plan"
            value={1}
            id="option1"
            className="hidden"
          />
          <div className="label-checked:border-[--Marine-blue] flex cursor-pointer gap-3 rounded-md border-2 p-2">
            <div>
              <img src="./assets/images/icon-arcade.svg" alt="" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[--Marine-blue]">
                Arcade
              </h3>
              <div>
                <p className="text-xs text-[--Cool-gray]">
                  {!isChecked ? "$9/mo" : "$90/yr"}
                </p>
                <p className="text-xs text-[--Marine-blue]">
                  {!isChecked ? null : "2 months free"}
                </p>
              </div>
            </div>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="plan"
            value={1}
            id="option1"
            className="hidden"
          />
          <div className="label-checked:border-[--Marine-blue] flex cursor-pointer gap-3 rounded-md border-2 p-2">
            <div>
              <img src="./assets/images/icon-advanced.svg" alt="" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[--Marine-blue]">
                Advanced
              </h3>
              <div>
                <p className="text-xs text-[--Cool-gray]">
                  {!isChecked ? "$12/mo" : "$120/yr"}
                </p>
                <p className="text-xs text-[--Marine-blue]">
                  {!isChecked ? null : "2 months free"}
                </p>
              </div>
            </div>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="plan"
            value={1}
            id="option1"
            className="hidden"
          />
          <div className="label-checked:border-[--Marine-blue] flex cursor-pointer gap-3 rounded-md border-2 p-2">
            <div>
              <img src="./assets/images/icon-pro.svg" alt="" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[--Marine-blue]">
                Pro
              </h3>
              <div>
                <p className="text-xs text-[--Cool-gray]">
                  {!isChecked ? "$15/mo" : "$150/yr"}
                </p>
                <p className="text-xs text-[--Marine-blue]">
                  {!isChecked ? null : "2 months free"}
                </p>
              </div>
            </div>
          </div>
        </label>

        <div className="flex items-center justify-center rounded-lg bg-[--Magnolia] p-2">
          <p
            className={`${
              !isChecked ? "text-[--Marine-blue]" : "text-[--Cool-gray]"
            } text-xs font-semibold`}
          >
            Monthly
          </p>
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />

            <span
              className={`slider mx-4 flex h-5 w-[40px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-3 w-3 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[16px]" : ""
                }`}
              ></span>
            </span>
          </label>
          <p
            className={`${
              isChecked ? "text-[--Marine-blue]" : "text-[--Cool-gray]"
            } text-xs font-semibold`}
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  );
  const page3 = <>
  <h2 className="text-2xl font-bold text-[--Marine-blue]">
        Pick add-ons
      </h2>
      <p className="text-[--Cool-gray] my-2">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3 py-2">
        <label className="flex peer-checked:border-[--Marine-blue] cursor-pointer gap-3 rounded-md border-2 p-2 items-center ">
            <div><input className="h-4 w-4 peer" type="checkbox" name="online" id="online" /></div>
            <div className="w-full">
                <p className="text-sm font-bold text-[--Marine-blue]">Online service</p>
                <p className="text-xs text-[--Cool-gray]">Access to multiplayer games</p>
            </div>
            <p className="text-xs">+$1/mo</p>
        </label>
      </div>
  </>;
  const pages = ["", page1, page2,page3];
  return (
    <form action="" className="relative  mx-4 rounded-xl bg-white p-7">
      {pages[props.currentPage]}
    </form>
  );
};

export default Form;
