import { Box, Flex, Heading } from "@chakra-ui/react";
import PDFUploader from "./components/PDFUploader";
import QuestionInput from "./components/QuestionInput";

function App() {
  return (
    <Box m={8}>
      <Flex justifyContent="center" mb={8}>
        <Heading>PDF Q&A App</Heading>
      </Flex>
      <PDFUploader />
      <QuestionInput />
    </Box>
  );
}

export default App;
