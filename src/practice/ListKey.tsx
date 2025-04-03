import { motion } from "framer-motion";

function ListKey() {
  const data = [
    {
      Images:
        "https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg",
      Name: "Akash Raikwar",
      Email: "akashraikwar763@gmail.com",
      Mobile: "9685533878",
      Address: "Vasant Vihar, Ujjain, MP",
      College: "Ujjain Engineering College",
      Course: "Information Technology",
      City: "Ujjain",
      State: "Madhya Pradesh",
      Country: "India",
      ZipCode: "456010",
    },
    {
      Images:
        "https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819911.jpg",
      Name: "Akash Raikwar",
      Email: "akashraikwar763@gmail.com",
      Mobile: "9685533878",
      Address: "Vasant Vihar, Ujjain, MP",
      College: "Ujjain Engineering College",
      Course: "Information Technology",
      City: "Ujjain",
      State: "Madhya Pradesh",
      Country: "India",
      ZipCode: "456010",
    },
    {
      Images:
        "https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819911.jpg",
      Name: "Akash Raikwar",
      Email: "akashraikwar763@gmail.com",
      Mobile: "9685533878",
      Address: "Vasant Vihar, Ujjain, MP",
      College: "Ujjain Engineering College",
      Course: "Information Technology",
      City: "Ujjain",
      State: "Madhya Pradesh",
      Country: "India",
      ZipCode: "456010",
    },
    {
      Images:
        "https://media.istockphoto.com/id/654049208/vector/businessman-avatar-man-in-suit-with-blue-tie.jpg?s=612x612&w=0&k=20&c=jNq4M14lFoLMbRdIH4yqlgwRjg-nwCVKIu06t5JIlkU=",
      Name: "Akash Raikwar",
      Email: "akashraikwar763@gmail.com",
      Mobile: "9685533878",
      Address: "Vasant Vihar, Ujjain, MP",
      College: "Ujjain Engineering College",
      Course: "Information Technology",
      City: "Ujjain",
      State: "Madhya Pradesh",
      Country: "India",
      ZipCode: "456010",
    },
    {
        Images:
          "https://media.istockphoto.com/id/654049208/vector/businessman-avatar-man-in-suit-with-blue-tie.jpg?s=612x612&w=0&k=20&c=jNq4M14lFoLMbRdIH4yqlgwRjg-nwCVKIu06t5JIlkU=",
        Name: "Akash Raikwar",
        Email: "akashraikwar763@gmail.com",
        Mobile: "9685533878",
        Address: "Vasant Vihar, Ujjain, MP",
        College: "Ujjain Engineering College",
        Course: "Information Technology",
        City: "Ujjain",
        State: "Madhya Pradesh",
        Country: "India",
        ZipCode: "456010",
      },
      {
        Images:
          "https://media.istockphoto.com/id/654049208/vector/businessman-avatar-man-in-suit-with-blue-tie.jpg?s=612x612&w=0&k=20&c=jNq4M14lFoLMbRdIH4yqlgwRjg-nwCVKIu06t5JIlkU=",
        Name: "Akash Raikwar",
        Email: "akashraikwar763@gmail.com",
        Mobile: "9685533878",
        Address: "Vasant Vihar, Ujjain, MP",
        College: "Ujjain Engineering College",
        Course: "Information Technology",
        City: "Ujjain",
        State: "Madhya Pradesh",
        Country: "India",
        ZipCode: "456010",
      },
  ];

  return (
    <>
      <div className="container py-16 px-6 mx-auto mt-[100px]">
        {data.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-2 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <div className="bg-gradient-to-r from-yellow-100 to-pink-100">
                    <img
                      className="w-20 h-20 mx-auto rounded-full"
                      src={item.Images}
                      alt="Profile"
                    />
                    <ul className="space-y-2 text-gray-700 rounded-lg p-4 ">
                      <li className="font-semibold text-lg text-gray-900">
                        {item.Name}
                      </li>
                      <li>Email: {item.Email}</li>
                      <li>Mobile: {item.Mobile}</li>
                      <li>Address: {item.Address}</li>
                      <li>College: {item.College}</li>
                      <li>Course: {item.Course}</li>
                      <li>City: {item.City}</li>
                      <li>State: {item.State}</li>
                      <li>Country: {item.Country}</li>
                      <li>Zip Code: {item.ZipCode}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold text-gray-700">
              No Data Available
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default ListKey;
