import  { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    console.log("Props received:", props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="container py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Count: {this.state.count}</h1>
            <div className="flex space-x-8">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                onClick={this.increment}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                onClick={this.decrement}
              >
                Decrement
              </button>
            </div>
          </div>

          
        </div>
      </div>
      
      </>
    );
  }
}

export default Counter;
