import React from "react";

const Form = (props) => {
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
              <p className="text-xs text-[--Cool-gray]">$9/mo</p>
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
              <p className="text-xs text-[--Cool-gray]">$9/mo</p>
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
              <p className="text-xs text-[--Cool-gray]">$9/mo</p>
            </div>
          </div>
        </label>
        
        <div className="flex justify-around bg-[--Magnolia] ">
            <p>Monthly</p>
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
            <p>Yearly</p>

        </div>

      </div>
      
    </>
  );
  const pages = ["",page1,page2]
  return (
    <form action="" className="relative  mx-4 rounded-xl bg-white p-7">
      {pages[props.currentPage]}
    </form>
  );
};

export default Form;
