import React, { useState } from "react";

interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <h1>Welcome! 🎉</h1> : <h1>Please log in. 🔑</h1>;
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
   <><br /><br /><br /><br /><br /><br />
   
   <div className="container py-16 mx-auto text-center">
    <p className="text-2xl font-bold">Conditions Apply</p>
    <p className="text-xl font-bold"> If user login then show "Welcome! 🎉"</p>
    <p className="text-xl font-bold">If user logout then show "Please log in. 🔑"</p><br /><br />
      <Greeting isLoggedIn={isLoggedIn} />
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={toggleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
   
   <br /><br /><br /><br /><br /></>
  );
};

export default App;
