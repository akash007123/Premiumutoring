import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML.",
  },
  {
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application.",
  },
  {
    question: "What is state in React?",
    answer: "State is a JavaScript object that holds dynamic data for components.",
  },
];

const FaqSection = () => {
  return (
    <div style={faqSectionStyle}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const faqSectionStyle: React.CSSProperties = {
  padding: "20px",
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

export default FaqSection;
