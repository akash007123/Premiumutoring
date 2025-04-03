import { motion } from "framer-motion";
import Marksheet from "./Marksheet"

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

  const information = [
    {
      Images:
        "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/AIThisMonth.jpg",
      Title:
        "Cross-skilling: How to maintain government efficiency amidst change",
      Description:
        "While federal policies strive for government efficiency, keeping up can be a challenge. The solution to staying agile? Cross-skilling your..",
      Link: "https://www.pluralsight.com/resources/blog/upskilling/cross-skilling-government-efficiency",
      Badge: "Government",
    },
    {
      Images:
        "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/TextToSpeech.webp",
      Title: "Why continuous feedback is vital for DevOps workflow success.",
      Description:
        "Software development success relies on continuous feedback being integrated into your DevOps process to boost quality, speed deployment, and drive improvement.",
      Link: "https://www.pluralsight.com/resources/blog/tech-operations/continuous-feedback-devops-process",
      Badge: "DevOps",
    },
    {
      Images:
        "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/Platform.jpg",
      Title: "DevOps Flow of Work: How to Streamline Software Development",
      Description:
        "Improve software delivery with an optimized DevOps Flow of Work. Learn how CI/CD, version control, and automation streamline development ...",
      Link: "https://www.pluralsight.com/resources/blog/tech-operations/develops-workflow-overview",
      Badge: "Software Development",
    },
    {
      Images:
        "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/Automation.webp",
      Title: "What Devops workflow is and how engineers benefit",
      Description:
        "What is a DevOps Flow of Work? Learn how automation of CI/CD pipelines, containerization, and version control benefit team collaboration and software delivery. ...",
      Link: "https://www.pluralsight.com/resources/blog/tech-operations/understanding-devops-workflow",
      Badge: "Devops workflow",
    },
    {
      Images:
        "https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/engineering-efficiency-hero.webp",
      Title:
        "What is engineering efficiency? + How to improve your team's outcomes",
      Description:
        "Engineering efficiency focuses on your team's desired outcomes and overall resource efficiency. Learn to improve ...",
      Link: "https://www.pluralsight.com/resources/blog/software-development/engineering-efficiency",
      Badge: "Engineering Efficiency",
    },
    {
      Images:
        "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/Linux.webp",
      Title: "Managing Linux processes: A step-by-step guide",
      Description:
        "Managing processes is a fundamental task for any Linux system administrator. Here are the basics of managing and monitoring them. ...",
      Link: "https://www.pluralsight.com/resources/blog/software-development/managing-linux-processes-guide",
      Badge: "Linux processes",
    },
  ];

  const movies = [
    {
      name: "Sikandar",
      time: "7:30 PM",
      date: "April 04, 2025",
      seat: "A12",
      price: "₹150",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29934_A13c7TMr.jpg",
      link: "https://www.pvrcinemas.com/moviesessions/Ujjain/SIKANDAR/29934",
    },
    {
      name: "A Minecraft Movie",
      time: "02:20 PM",
      date: "April 05, 2025",
      seat: "B7",
      price: "200",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28630_kXROOmHk.jpg",
      link: "https://www.pvrcinemas.com/moviesessions/Ujjain/A%20MINECRAFT%20MOVIE/28630",
    },
    {
      name: "Chaava",
      time: "11:00 AM",
      date: "April 06, 2025",
      seat: "C5",
      price: "250",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29986_fIc1UkKI.jpg",
      link: "https://www.pvrcinemas.com/moviesessions/Ujjain/A%20MINECRAFT%20MOVIE/28630",
    },
  ];



  return (
    <>
      {/* Contact Cards */}
      <div className="container py-16 px-6 mx-auto mt-[100px]">
        {information.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {information.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out relative">
                  <div className="relative">
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {item.Badge}
                    </span>
                    <img
                      src={item.Images}
                      alt={item.Title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.Title}
                    </h2>
                    <p className="text-gray-600 mt-2">{item.Description}</p>
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold mt-4 inline-block hover:underline"
                    >
                      Read More →
                    </a>
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

      {/* Blog Cards */}
      <div className="container py-16 px-6 mx-auto mt-[100px]">
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                  <div className="bg-gradient-to-r from-orange-100 to-gray-blue">
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

      {/* Tickets */}
      <div className="container py-16 px-6 mx-auto mt-[100px]">
        <h1 className="text-3xl font-bold text-center mb-8">
          🎬 3D Movie Cards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0px 50px 120px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.2 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform perspective-1000"
            >
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {movie.date}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {movie.name}
                </h2>
                <p className="text-gray-600 mt-1">⏳ Time: {movie.time}</p>
                <p className="text-gray-600 mt-1">🎟 Seat: {movie.seat}</p>
                <p className="text-gray-700 font-semibold mt-2">
                  💰 {movie.price}
                </p>

                <a
                  href="{movie.link}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Marksheet */}
          <Marksheet/>
    </>
  );
}

export default ListKey;