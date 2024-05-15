import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const PDFUploader = () => {
  const toast = useToast();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Handle accepted files
      console.log(acceptedFiles);
      toast({
        title: "File uploaded",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onDropRejected: () => {
      toast({
        title: "File upload failed",
        description: "Please upload a PDF file",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <Box
      {...getRootProps()}
      p={4}
      border="2px dashed gray.500"
      borderRadius="md"
    >
      <input {...getInputProps()} />
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Text mb={2}>
          {isDragActive
            ? "Drop the PDF file here..."
            : "Drag and drop a PDF file here, or click to select a file"}
        </Text>
        <Button colorScheme="blue">Upload PDF</Button>
      </Flex>
    </Box>
  );
};

export default PDFUploader;
