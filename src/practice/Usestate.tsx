import { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

    <div className="container mx-auto py-12 px-6">
    <div className=" justify-center items-center">
        <p>{count}</p> 
        <button
          onClick={() => setCount(count + 1)}
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Increment
        </button>
      </div>
    </div>
    </>
  );
}

export default Usestate;
