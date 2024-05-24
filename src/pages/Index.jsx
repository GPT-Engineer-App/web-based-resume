import { Container, Box, VStack, HStack, Text, Heading, Image, IconButton, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Box textAlign="center" mb={8}>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} size="lg" mb={4} />
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331947-9460dd2f264b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTY0NTI3OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Full Stack Developer
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate full stack developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks to improve my skills and deliver high-quality software.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Project One
              </Heading>
              <Text fontSize="md">A brief description of the project and the technologies used.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Project Two
              </Heading>
              <Text fontSize="md">A brief description of the project and the technologies used.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" mb={4}>
            Feel free to reach out to me on any of the platforms below:
          </Text>
          <HStack spacing={4} justify="center">
            <Link href="https://linkedin.com/in/yourprofile" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://github.com/yourprofile" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://twitter.com/yourprofile" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
