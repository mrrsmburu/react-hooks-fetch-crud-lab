import React, { useState, useEffect } from "react";

function QuestionList() {


  const App = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
        
          setLoading(true);
  
          
          const response = await fetch('https://example.com/api/questions');
          const data = await response.json();
  
      
          setQuestions(data.questions);
        } catch (error) {
          console.error('Error fetching questions:', error);
        } finally {
      
          setLoading(false);
        }
      };
  
      
      fetchQuestions();
    }, []); 
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{}</ul>
    </section>
  );
}

export default QuestionList;
