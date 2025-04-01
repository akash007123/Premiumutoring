function Random() {
  const items = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
      heading: "Heading 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum, iusto nulla blanditiis maxime ipsum veritatis reprehenderit expedita voluptatibus omnis quae velit harum alias, repellendus debitis laboriosam consectetur deserunt magni.",
    },
    {
      image:
        "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
      heading: "Heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum, iusto nulla blanditiis maxime ipsum veritatis reprehenderit expedita voluptatibus omnis quae velit harum alias, repellendus debitis laboriosam consectetur deserunt magni.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
      heading: "Heading 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum, iusto nulla blanditiis maxime ipsum veritatis reprehenderit expedita voluptatibus omnis quae velit harum alias, repellendus debitis laboriosam consectetur deserunt magni.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
      heading: "Heading 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum, iusto nulla blanditiis maxime ipsum veritatis reprehenderit expedita voluptatibus omnis quae velit harum alias, repellendus debitis laboriosam consectetur deserunt magni.",
    },
  ];

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index}>
              <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="flex justify-center items-center">
                  <img
                    className="size-20 shrink-0"
                    src={item.image}
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black dark:text-white mb-4">
                    {item.heading}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="button mt-5 flex justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Button
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Random;


