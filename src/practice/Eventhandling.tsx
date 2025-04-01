import React from "react";

function Eventhandling() {
  const handleClick = () => {
    alert("Button clicked!!!!");
  };

  const handleEvent = (event: React.SyntheticEvent) => {
    if (event.type === "click") {
      alert("Button clicked!");
    } else if (event.type === "keypress") {
      alert("Key pressed!");
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleClick}>Click Me</button>
        <div>
        </div>
      </div>

      <div className="">
      <button onClick={handleEvent} className="text-2xl mb-3 font-bold">Input Values</button>
          <input
            onKeyPress={handleEvent}
            placeholder="Press any key"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
      </div>




       <br /><br /><br /><br />
          
        </div>
      </div>
    </>
  );
}

export default Eventhandling;
