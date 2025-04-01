function Practiceone() {

    const items = [
        {
            images:"https://randomuser.me/api/portraits/women/71.jpg",
            headings:"One",
            description:"One One One One One One One One One One One One One One One One One One One One",
            link:"https://github.com/akash007123/Premiumutoring/blob/main/src/practice/practice.tsx",
        },
        {
            images:"https://randomuser.me/api/portraits/women/72.jpg",
            headings:"Two",
            description:"One One One One One One One One One One One One One One One One One One One One",
            link:"https://www.codecademy.com/learn/paths/advanced-react-redux-sp",
        },
        {
            images:"https://randomuser.me/api/portraits/women/73.jpg",
            headings:"three",
            description:"One One One One One One One One One One One One One One One One One One One One",
            link:"https://nextleap.app/online-compiler/reactjs-programming",
        },
        {
            images:"https://randomuser.me/api/portraits/women/74.jpg",
            headings:"four",
            description:"One One One One One One One One One One One One One One One One One One One One",
            link:"https://www.uxpin.com/studio/blog/functional-vs-class-components/",
        },
    ]
    
  return(
    <><br /><br /><br /><br /><br />
    <div className="container mx-auto py-12 px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) =>(
            <div key={index}>
                    <img src={item.images} alt="side images" />
                    <h1 className="text-2xl mb-4 mt-4">{item.headings}</h1>
                    <p>{item.description}</p>
                    <a href={item.link}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">check</button></a>
            </div>
        ))}
    </div>
    </div>
    <br /><br /><br /><br /><br />
    </>
  )
   
  }
  
  export default Practiceone;
  