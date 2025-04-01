type FaqItemProps = {
    question: string;
    answer: string;
  };
  
  const FaqItem = ({ question, answer }: FaqItemProps) => {
    return (
      <div style={faqItemStyle}>
        <h3 style={{ color: "#333" }}>{question}</h3>
        <p style={{ color: "#555" }}>{answer}</p>
      </div>
    );
  };
  
  const faqItemStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px 0",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  
  export default FaqItem;
  