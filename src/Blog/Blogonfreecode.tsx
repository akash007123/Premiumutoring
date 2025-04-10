import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 mt-[100px]">
      <div className="mb-12">
        <p className="text-sm text-gray-500">
          May 4, 2023 <span className="text-blue-600">#React</span>
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5">
          How to Use Redux and Redux Toolkit – Tutorial for Beginners
        </h1>
        <p className="text-lg text-gray-700 mt-5">
          Learn the fundamentals of Redux and how to use Redux Toolkit to manage
          your application state in React.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <img
          src="https://i1.rgstatic.net/ii/profile.image/11431281210785826-1702138216140_Q512/Akash-Raikwar-3.jpg"
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Akash Raikwar</p>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>
      </div>

      <div className="image ">
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          className="w-full"
          alt=""
        />
      </div>

      <div className="content mt-[70px]">
        <h1 className="text-3xl font-bold mb-[60px]">
          When I started learning Redux, I found it challenging to wrap my head
          around the concepts. Despite reading many online resources, I
          struggled to grasp the core ideas.
        </h1>
      </div>
      <p className="text-2xl">
        While the online tutorials and guides provided helpful information, I
        needed more clarity to really understand Redux.
      </p>
      <p className="text-2xl mt-5">
        But with persistence and practice, I eventually gained a better
        understanding of Redux's key concepts and successfully implemented them
        in my projects.
      </p>
      <p className="text-2xl mt-5">
        In this article, I will explain Redux in the simplest possible way. As
        someone who initially struggled with understanding Redux, I know how
        frustrating it can be to learn a new concept. But I hope this article
        will help make the concepts of Redux more accessible to beginner
        learners.
      </p>
      <p className="text-2xl mt-5">We will also delve into Redux Toolkit, a collection of tools that simplify using Redux. These tools help make Redux less daunting and easier to use.</p>
      
      
      
      <h1 className="font-bold text-4xl mt-[80px]">What is Redux?</h1>
      <p className="text-2xl mt-5">
      Redux is a state management library that allows you to manage the state of your JavaScript applications more efficiently and predictably.
      </p>
      <p className="text-2xl mt-5">
      Imagine you are building a house and need to keep track of all the materials you use and how much money you spend. Instead of keeping track of everything in your head or on a piece of paper, you could use a ledger to keep track of every transaction. Redux works similarly by keeping track of your application's state in a single place called the "store."</p>
      <p className="text-2xl mt-5">
      Let's say you're building an e-commerce site. You may need to keep track of the items in a user's cart, their payment information, and their shipping details.</p>
      <p className="text-2xl mt-5">
      Instead of passing this information from component to component using props, Redux allows you to store them in one central location where they can be easily accessed and updated. This makes it easier to manage complex states and keep your application organized.</p>

<p className="text-2xl mt-5">It's important to note that Redux is not limited to React and you can use it with other frameworks or even vanilla JavaScript.</p>      
    </div>
  );
};

export default BlogPage;
