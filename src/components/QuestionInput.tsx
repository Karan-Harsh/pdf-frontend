import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const QuestionInput = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {
    // Call the backend API to get the answer
    // Replace with your API call logic
    const response = await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <Box mt={8}>
      <Flex mb={4}>
        <Input
          placeholder="Ask a question about the PDF"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Ask
        </Button>
      </Flex>
      {answer && <Text>{answer}</Text>}
    </Box>
  );
};

export default QuestionInput;
