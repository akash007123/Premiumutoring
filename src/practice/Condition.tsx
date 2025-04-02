import React from "react";

function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  return isLoggedIn ? <h1>Welcome! 🎉</h1> : <h1>Please log in. 🔑</h1>;
}

const App: React.FC = () => {
  return (
    <><br /><br /><br /><br /><br />
    
   <div className="container py-16 px-6">
    <div className="grid grid-cols-1 ">
    <div>
      <Greeting isLoggedIn={true} />  {/* Output: "Welcome! 🎉" */}
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} /> {/* Output: "Please log in. 🔑" */}
    </div>
    </div>
   </div>
    
    <br /><br /><br /><br /><br /></>
  );
};

export default App;
