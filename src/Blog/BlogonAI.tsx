import React from "react";
import { ChevronRight } from "lucide-react";

const BlogonAI: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "AI career success in 2025: key learning paths and skills",
      description:
        "AI is evolving fast—are your skills keeping up? Stay competitive with the most impactful AI learning paths, must-have skills, and real-world applications.",
    },
  ];

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://www.pluralsight.com/etc.clientlibs/ps/clientlibs/clientlib-site/resources/images/resource-detail-default-background.png')`,
        }}
      >
        <div className="container mx-auto py-16 px-4 md:px-10 lg:px-40 mt-24">
          {data.map((item) => (
            <div key={item.id} className="grid grid-cols-1">
              <p className="text-white flex items-center">
                Blog{" "}
                <span className="mx-2">
                  <ChevronRight />
                </span>{" "}
                AI & Data
              </p>
              <div className="mt-6">
                <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
                  {item.title}
                </h1>
                <p className="text-white mt-6 text-lg md:text-xl">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="flex items-center gap-4">
                  <img
                    src="https://media-hosting.imagekit.io/f382cd1dda844baa/axel-sirota.jpg?Expires=1838359133&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xGcImhj1f8VbNqzClsPqa-ub88-9lucTiIA0zNkKNHFky-Wf-F3QjnzcddTzRPTvYwsoRTDvpJGYFDSAHTsM5-yNuGe70xx2U6lEj33NwzNWdysmHuoCu7q-yzbjTaeMBZF1JCn-CACKmaqxH5dIeq0HHpGF3mL-NXdQBI2Cayk4YIDw2KOqd95pYN~QbP61A7LjlGKmTmVOP4A4DUHBnbTv26Q7mfZyU2SCIQ6tNG9Eu9eMihibBbWZKAMYVxAKjqmr2YBT6R6umoHe-zVyUsXJgQEYWkNyEqGhOotWherqC63E2WXJ6-XMPbZ~zUXz8R87Ev6uelr7vIIYYDSrFA__"
                    className="w-12 md:w-16 rounded-full object-cover"
                    alt="author"
                  />
                  <p className="text-white font-bold">
                    By <span className="text-pink-500">Axel Sirota</span>
                  </p>
                </div>

                <p className="text-white mt-4 md:mt-0">
                  Mar 27, 2025 • 6 Minute Read
                </p>
              </div>

              <div className="mt-6">
                <img
                  src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/AIThisMonth.jpg"
                  alt="Blog Image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-40 flex flex-col md:flex-row gap-10 py-10">
        <div className="md:w-1/4">
          <div className="flex flex-wrap  gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-blue-700 bg-gray-200 rounded-lg">
              Upskilling
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-blue-700 bg-gray-200 rounded-lg">
              AI & Data
            </button>
          </div>

          <hr className="my-4 border-gray-300" />

          <p className="text-pink-600 font-semibold cursor-pointer">
            Subscribe to the <br />
            newsletter <span className="text-lg">›</span>
          </p>
        </div>

        <div className="md:w-3/4">
          <p className="text-gray-800 text-lg leading-relaxed">
            AI is reshaping industries faster than ever, and professionals need
            to stay ahead of the latest developments. In{" "}
            <a href="#" className="text-pink-600 underline">
              AI tools and trends in 2025: what tech professionals should know
            </a>{" "}
            (part one of this blog series!), we explored the most important AI
            tools and trends to focus on this year—whether you're just getting
            started or already deep in the field.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            But understanding trends is just the first step. How do you actually
            build the skills to apply them? This blog breaks down essential AI
            learning paths, why they matter, and how you can put them into
            practice. Whether you're looking to enhance your expertise in
            multimodal AI, vector databases, or responsible AI, these structured
            learning areas will help you develop the right capabilities for the
            evolving job market.
          </p>

          <div className="links">
            <p className=" text-pink-600  leading-relaxed mt-4 font-bold">
              <a href="#">Key AI learning paths for 2025</a>
            </p>
            <ul className="text-pink-600  leading-relaxed mt-4 list-disc pl-10 font-bold space-y-2 ">
              <li>Spatial Intelligence and 3D understanding</li>
              <li>Multimodal AI systems</li>
              <li>AI agents and hybrid workforces</li>
              <li>Foundation models and domain-specific fine-tuning</li>
              <li>Open-Source Vector Databases</li>
              <li>Ethics and Responsible AI</li>
              <li>AI for Energy Efficiency</li>
              <li>Synthetic Data and Data-Centric AI</li>
              <li>Quantum AI</li>
            </ul>

            <p className=" text-pink-600  leading-relaxed mt-[60px] font-bold">
              <a href="#">
                In practice: What could an AI career path look like?
              </a>
            </p>
            <ul className="text-pink-600  leading-relaxed mt-4 list-disc pl-10 font-bold space-y-2 ">
              <li>Stage 1: Build core AI knowledge</li>
              <li>Stage 2: Explore Core AI Concepts</li>
              <li>Step 3: Specialize in Key AI Domains</li>
              <li>Step 4: Master Advanced AI Techniques</li>
              <li>Step 5: Transition from Research to Production</li>
              <li>Step 6: Stay Updated and Keep Learning</li>
            </ul>

            <p className="text-pink-600  leading-relaxed mt-[60px] font-bold">
              Get started on your AI career goals
            </p>
            <p className="text-pink-600  leading-relaxed font-bold">
              Advance your tech skills today
            </p>
          </div>

          <h2 className="text-4xl font-bold mt-[100px]">
            What is Continuous Feedback?
          </h2>
          <h2 className="text-2xl font-bold mt-5">
            Spatial Intelligence and 3D understanding
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            AI systems are increasingly capable of interpreting spatial data,
            unlocking applications in robotics, augmented reality (AR), and
            autonomous systems. Understanding how AI processes 3D environments
            is essential for professionals in these fields.
          </p>

          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Learn the mathematical
              principles behind spatial computing with{" "}
              <a href="#" className="text-pink-600 underline">
                courses on Linear Algebra and Geometry
              </a>{" "}
              and explore the{" "}
              <a href="#" className="text-pink-600 underline">
                fundamentals of Computer Vision.
              </a>
            </li>
            <br />
            <li>
              <strong>Advance your expertise:</strong> Deepen your knowledge of
              feature extraction, model building, and transfer learning with{" "}
              <a href="#" className="text-pink-600 underline">
                Neural Networks for Image Classification,
              </a>{" "}
              using TensorFlow to create more accurate image recognition models.
            </li>
            <br />
            <li>
              <strong>Apply your skills:</strong> Put your learning into
              practice with the hands-on lab{" "}
              <a href="#" className="text-pink-600 underline">
                Introduction to Computer Vision with TensorFlow,
              </a>{" "}
              where you’ll build and train computer vision models in a
              real-world environment.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            Multimodal AI systems
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            Multimodal AI combines text, images, video, and audio to create more
            human-like understanding. This is at the core of applications like
            ChatGPT with image recognition, AI-powered content generation, and
            enhanced search engines.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Start with the course
              such as{" "}
              <a href="#" className="text-pink-600 underline">
                Build Solutions with Pre-trained LLMs
              </a>{" "}
              to learn how to leverage existing language models for powerful
              multimodal applications.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Deepen your understanding
              of deep learning and transformers with the{" "}
              <a href="#" className="text-pink-600 underline">
                Introduction to Deep Learning path,
              </a>{" "}
              or by focusing on courses like{" "}
              <a href="#" className="text-pink-600 underline">
                NLP’s and Transformer Models
              </a>{" "}
              to master the principles behind multimodal models such as CLIP and
              Flamingo.
            </li>
            <li>
              <strong>Apply your skills:</strong> Build real-world applications
              with the{" "}
              <a href="#" className="text-pink-600 underline">
                OpenAI Assistant API,
              </a>{" "}
              which teaches you how to create an AI assistant capable of
              processing and responding to natural language requests.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[20px]">
            AI agents and hybrid workforces
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            AI agents are reshaping how work gets done, from automating routine
            tasks to assisting knowledge workers. Understanding the mechanics
            behind AI-driven automation is key for professionals who want to
            stay relevant in an AI-augmented workplace.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation: </strong>Start with the{" "}
              <a href="#" className="text-pink-600 underline">
                Introduction to NLP (Natural Language Processing) path
              </a>{" "}
              and the course{" "}
              <a href="#" className="text-pink-600 underline">
                Generative AI Foundations: Generative AI in Action,
              </a>{" "}
              which introduces use cases like Generative AI Agents and
              Retrieval-Augmented Generation (RAG). This will equip you with the
              tools to implement sophisticated AI solutions.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Expand your skills with
              courses like{" "}
              <a href="#" className="text-pink-600 underline">
                Introduction to Developing AI Agents, Creating Personal AI
                Agents,
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 underline">
                Using AI Agents for Productivity,
              </a>{" "}
              which cover the core concepts behind creating intelligent agents
              for various tasks.
            </li>
            <li>
              <strong>Apply your skills:</strong> Experiment with practical
              applications by building a{" "}
              <a href="#" className="text-pink-600 underline">
                RAG Chat Assistant with MongoDB Atlas Vector Search, Google
                Cloud, and Langchain,
              </a>{" "}
              combining NLP, AI agents, and RAG techniques to enhance
              productivity.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            Foundation models and domain-specific fine-tuning
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            The rise of large language models (LLMs) means that companies are
            increasingly fine-tuning these models for specific industry
            applications. Understanding how to adapt pre-trained models is a
            valuable skill for AI practitioners.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Start with{" "}
              <a href="#" className="text-pink-600 underline">
                the Large Language Models (LLM) path
              </a>{" "}
              or take the course{" "}
              <a href="#" className="text-pink-600 underline">
                Transfer Learning: Tailoring Neural Networks for Your
              </a>{" "}
              Data to understand how to adapt pre-trained models to new tasks
              with minimal data.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Stay up-to-date with
              current model architectures by exploring{" "}
              <a href="#" className="text-pink-600 underline">
                First Look: OpenAI GPT-4o,
              </a>{" "}
              and then dive deeper into fine-tuning techniques with courses like{" "}
              <a href="#" className="text-pink-600 underline">
                Implement Named Entity Recognition with BERT
              </a>{" "}
              to gain expertise in specialized tasks like named entity
              recognition.
            </li>
            <li>
              <strong>Apply your skills:</strong> Put your knowledge to work
              with{" "}
              <a href="#" className="text-pink-600 underline">
                the Deep Learning Literacy path,
              </a>{" "}
              which covers industry-specific training and niche expertise focus
              such as sentiment analysis. The BERT course mentioned above is
              just one of many fine-tuning techniques offered in this path.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            Open-Source Vector Databases
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            As AI increasingly relies on retrieval-augmented generation (RAG)
            techniques, open-source vector databases like FAISS and Pinecone are
            essential for search, recommendation systems, and knowledge
            retrieval.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Start with{" "}
              <a href="#" className="text-pink-600 underline">
                Algorithms and Data Structures Part 1
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 underline">
                Part 2
              </a>{" "}
              to understand similarity search algorithms like HNSW.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Learn to implement vector
              search with courses like{" "}
              <a href="#" className="text-pink-600 underline">
                Vector Search and Embeddings
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 underline">
                Create Embeddings, Vector Search, and RAG with BigQuery.
              </a>
            </li>
            <li>
              <strong>Apply your skills:</strong> Put your knowledge into
              practice with{" "}
              <a href="#" className="text-pink-600 underline">
                Vector Space Models and Embeddings in RAGs,
              </a>{" "}
              where you’ll develop an LLM that dynamically adapts its responses
              based on retrieved data.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            Ethics and Responsible AI
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            With AI increasingly used in critical applications, understanding
            ethical AI is no longer optional. Professionals must ensure AI
            systems are transparent, fair, and aligned with regulatory
            standards.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Explore{" "}
              <a href="#" className="text-pink-600 underline">
                Generative AI Foundations: Ethics, Issues, and Limitations of
                Generative AI
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 underline">
                AI Ethics: Understanding Bias and Fairness in Your Models
              </a>{" "}
              to grasp key principles.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Get certification-ready
              with{" "}
              <a href="#" className="text-pink-600 underline">
                AWS Certified AI Practitioner (AIF-C01): Guidelines for
                Responsible AI
              </a>{" "}
              and learn how to conduct AI bias audits and create explainable AI
              documentation.
            </li>
            <li>
              <strong>Apply your skills:</strong> Conduct fairness audits and
              build transparent AI decision-making pipelines in your projects
              and labs.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            AI for Energy Efficiency
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            AI’s energy consumption is a growing concern, making efficiency a
            critical focus. Optimizing AI models can reduce environmental impact
            and improve performance on resource-constrained devices.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Gain insight with{" "}
              <a className="text-pink-600 underline" href="#">
                Sustainability & Technology: Executive Briefing
              </a>{" "}
              to understand how AI contributes to or mitigates sustainability
              challenges.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Learn techniques like
              model compression and quantization with{" "}
              <a className="text-pink-600 underline" href="#">
                Optimizing Neural Networks for Efficient Data Processing
              </a>{" "}
              to develop lightweight AI solutions.
            </li>
            <li>
              <strong>Apply your skills:</strong> Utilize open-source carbon
              footprint calculators and optimization tools to assess AI energy
              consumption and implement green AI best practices.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            Synthetic Data and Data-Centric AI
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            In AI development, high-quality data is often more important than
            complex models. Synthetic data is increasingly used to overcome data
            scarcity and improve model training.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Understand more about
              why this field is vital in our blog{" "}
              <a className="text-pink-600 underline" href="#">
                Synthetic Data: The Future of Machine Learning?
              </a>{" "}
              to grasp the impact on AI development.
            </li>
            <li>
              <strong>Advance your expertise:</strong> Learn to generate
              synthetic datasets with{" "}
              <a href="#" className="text-pink-600 underline">
                Creating Synthetic Datasets with Generative AI.
              </a>
            </li>
            <li>
              <strong>Apply your skills:</strong> Practice prompt engineering
              for a RAG setup with{" "}
              <a href="#" className="text-pink-600 underline">
                Fundamentals of Retrieval Augmented Generation (RAG),
              </a>{" "}
              developing an LLM that dynamically adapts to incoming data.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">Quantum AI</h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            Quantum computing is still emerging, but professionals who gain
            early exposure will be well-positioned as the field matures. Quantum
            AI has the potential to revolutionize optimization and cryptography
            applications.
          </p>
          <ul className="mt-[60px] text-gray-800 text-lg leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              <strong>Build a strong foundation:</strong> Get an overview with{" "}
              <a href="#" className="text-pink-600 underline">
                Quantum Computing: The Big Picture
              </a>{" "}
              and then learn more with{" "}
              <a href="#" className="text-pink-600 underline">
                Quantum Computing Fundamentals.
              </a>
            </li>
            <li>
              <strong>Advance your expertise:</strong> If you are ready to be on
              the cutting edge, try out quantum programming with{" "}
              <a href="#" className="text-pink-600 underline">
                Quantum Computing: Getting Started with Q#,
              </a>{" "}
              which covers the actual practice of designing your own quantum
              algorithms.
            </li>
            <li>
              <strong>Apply your skills:</strong> Experiment with quantum
              algorithms for logistics or financial modeling through hands-on
              quantum computing labs.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-[60px]">
            In practice: What could an AI career path look like?
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            While the learning paths above outline essential areas of focus, how
            does this translate into a real-world AI career progression? Here’s
            an example of how someone might approach AI learning and development
            over time:
          </p>

          <h2 className="text-xl font-bold mt-[70px]">
            Stage 1: Build core AI knowledge
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>Learn the fundamentals of programming with Python.</li>
            <li>
              Develop core mathematical skills, including linear algebra,
              calculus, and probability.
            </li>
            <li>
              Take introductory AI and ML courses, focusing on deep learning
              fundamentals.
            </li>
            <li>
              Build foundational projects such as image classifiers or chatbot
              applications.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-[50px]">
            Stage 2: Explore Core AI Concepts
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              Develop a strong understanding of deep learning fundamentals.
            </li>
            <li>
              Learn essential AI frameworks and how to implement neural
              networks.
            </li>
            <li>
              Gain hands-on experience working with pre-trained models to
              accelerate learning.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-[50px]">
            Step 3: Specialize in Key AI Domains
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              Choose a specialization, such as NLP, computer vision, or
              reinforcement learning.
            </li>
            <li>
              Work on domain-specific projects like AI-driven chatbots,
              autonomous agents, or image recognition models.
            </li>
            <li>
              Participate in AI competitions and contribute to open-source
              projects to build real-world experience.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-[50px]">
            Step 4: Master Advanced AI Techniques
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              Learn how to fine-tune large models for specific applications.
            </li>
            <li>
              Explore retrieval-augmented AI techniques using vector databases.
            </li>
            <li>
              Dive into cutting-edge fields like multimodal AI, quantum AI, and
              ethical AI frameworks.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-[50px]">
            Step 5: Transition from Research to Production
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              Gain expertise in MLOps and deployment best practices for scalable
              AI systems.
            </li>
            <li>
              Optimize models for efficiency using pruning, quantization, and
              distillation techniques.
            </li>
            <li>
              Learn how to monitor and maintain AI models in production
              environments.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-[50px]">
            Step 6: Stay Updated and Keep Learning
          </h2>
          <ul className="mt-[20px] text-gray-800 leading-relaxed list-disc pl-5 space-y-2 list-inside">
            <li>
              Follow AI research conferences to stay informed on emerging
              trends.
            </li>
            <li>
              Regularly read research papers on preprint servers and academic
              platforms.
            </li>
            <li>
              Stay engaged with AI communities, forums, and industry
              discussions.
            </li>
          </ul>

          <p className="text-gray-800 text-lg leading-relaxed mt-[70px]">
            By following structured learning paths and applying knowledge in
            real-world projects, those pursuing this career path can build a
            strong AI skillset that aligns with industry needs.
          </p>
          <h2 className="text-3xl font-bold mt-[80px]">
            Get started on your AI career goals
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mt-[70px]">
            AI is evolving rapidly, and staying competitive requires continuous
            learning and adaptation. Whether you're just starting or looking to
            refine your expertise, focusing on high-impact areas like multimodal
            AI, vector databases, and energy-efficient AI can set you apart. The
            key is not just learning AI but applying it in practical, innovative
            ways.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-[50px]">
            Ready to take the next step? Explore the{" "}
            <a href="#" className="text-pink-600 underline">
              AI+ learning package on Pluralsight
            </a>{" "}
            to build the core technical and AI skills you need to advance your
            career.
          </p>

          <div className="shadow-lg rounded-lg mt-10 p-6 bg-white">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                src="https://media-hosting.imagekit.io/f382cd1dda844baa/axel-sirota.jpg?Expires=1838359133&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xGcImhj1f8VbNqzClsPqa-ub88-9lucTiIA0zNkKNHFky-Wf-F3QjnzcddTzRPTvYwsoRTDvpJGYFDSAHTsM5-yNuGe70xx2U6lEj33NwzNWdysmHuoCu7q-yzbjTaeMBZF1JCn-CACKmaqxH5dIeq0HHpGF3mL-NXdQBI2Cayk4YIDw2KOqd95pYN~QbP61A7LjlGKmTmVOP4A4DUHBnbTv26Q7mfZyU2SCIQ6tNG9Eu9eMihibBbWZKAMYVxAKjqmr2YBT6R6umoHe-zVyUsXJgQEYWkNyEqGhOotWherqC63E2WXJ6-XMPbZ~zUXz8R87Ev6uelr7vIIYYDSrFA__"
                alt="Alexander P."
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="text-lg font-semibold text-blue-900">Axel S.</p>
                <p className="text-gray-800 text-sm leading-relaxed mt-2">
                  Axel Sirota is a Microsoft Certified Trainer with a deep
                  interest in Deep Learning and Machine Learning Operations. He
                  has a Masters degree in Mathematics and after researching in
                  Probability, Statistics and Machine Learning optimization, he
                  works as an AI and Cloud Consultant as well as being an Author
                  and Instructor at Pluralsight, Develop Intelligence, and
                  O'Reilly Media.
                </p>

                <a
                  href="#"
                  className="flex items-center text-pink-600 font-medium mt-3 hover:underline"
                >
                  More about this author{" "}
                  <ChevronRight className="ml-1 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogonAI;
