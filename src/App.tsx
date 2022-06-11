import {
	Flex,
	Heading,
	IconButton,
	Spacer,
	useColorMode,
	VStack,
    useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import {
	FaSun,
	FaMoon,
	FaInstagram,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

const App = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
    const [isSmallerScreen] = useMediaQuery('(min-width:600px)')

	return (
		<VStack p={isSmallerScreen ? 5 : 2}>
			<Flex w="100%" alignItems='center'>
				<Heading
					size="md"
					fontWeight="semibold"
					color="cyan.400"
				>
					KidIbra
				</Heading>
				<Spacer />
				<IconButton
					icon={<FaLinkedin />}
					isRound={true}
					aria-label="button"
				></IconButton>
				<IconButton
					ml={2}
					icon={<FaInstagram />}
					isRound={true}
					aria-label="button"
				></IconButton>
				<IconButton
					ml={2}
					icon={<FaGithub />}
					isRound={true}
					aria-label="button"
				></IconButton>
				<IconButton
					ml={8}
					isRound={true}
					icon={isDark ? <FaSun /> : <FaMoon />}
					onClick={toggleColorMode}
					aria-label="button"
				></IconButton>
			</Flex>
			<Header />
			<Social />
			<Profile />
		</VStack>
	);
};

export default App;
