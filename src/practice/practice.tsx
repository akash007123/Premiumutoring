function Practice(){

const items = [
    {
        images:"https://randomuser.me/api/portraits/men/71.jpg",
        headings:"Heading",
        para:"asdfg",
        button:"https://github.com/akash007123/Premiumutoring/blob/main/src/practice/practice.tsx"
    },
    {
        images:"https://randomuser.me/api/portraits/men/72.jpg",
        headings:"Heading1",
        para:"efefffF",
        button:"https://www.codecademy.com/learn/paths/advanced-react-redux-sp"
    },
    {
        images:"https://randomuser.me/api/portraits/men/73.jpg",
        headings:"Heading2",
        para:"efDdscwdewdAD",
        button:"https://nextleap.app/online-compiler/reactjs-programming"
    },
    {
        images:"https://randomuser.me/api/portraits/men/74.jpg",
        headings:"Heading3",
        para:"EFFFFFFFFFFFFFFFFF",
        button:"https://www.uxpin.com/studio/blog/functional-vs-class-components/"
    },
]



    return(
        <><br /><br /><br /><br /><br />
        
            <div className="container mx-auto py-12 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, index)=> (
                    <div key={index}>
                        <img src={item.images} className="w-auto" alt="" />
                        <h1>{item.headings}</h1>
                        <p>{item.para}</p>
                        <a href={item.button}><button>Read</button></a>
                    </div>

                ))}
                    
                </div>
            </div>


        <br /><br /><br /><br />
        </>
    )
}

export default Practice;