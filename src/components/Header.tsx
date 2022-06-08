import {
	Box,
	Button,
	Circle,
	Flex,
	Image,
	Stack,
	Text,
	useColorMode,
	useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	const [isNotSmaller] = useMediaQuery("min-width:600px");

	return (
		<Stack>
			<Circle
				position="absolute"
				bg="blue.100"
				opacity="0.1"
				size="300px"
				alignSelf="flex-end"
			/>
			<Flex
				direction={isNotSmaller ? "row" : "column"}
				gap="200px"
				p={isNotSmaller ? "32" : "0"}
				alignSelf="flex-start"
			>
				<Box mt={isNotSmaller ? "0" : 16} alignSelf="flex-start">
					<Text fontSize="5xl" fontWeight="semibold">
						Hi, I am
					</Text>
					<Text
						fontSize="7xl"
						fontWeight="bold"
						bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
						bgClip="text"
					>
						KidIbra
					</Text>
					<Text color={isDark ? "gray.200" : "gray.500"}>
						A passionate front-end developer. Experienced most in
						React, Tailwind and now have started Chakra-ui
					</Text>
					<Button
						mt={8}
						colorScheme="blue"
						onClick={() => console.log("Applied to hire kidibra")}
					>
						Hire Me
					</Button>
					<Image
						boxSize="300px"
						boxShadow="lg"
						backgroundColor="transparent"
						borderRadius="full"
						alignSelf="center"
						mt={isNotSmaller ? "0" : "12"}
						mb={isNotSmaller ? "0" : "12"}
						src="/kidibra.jpg"
					/>
				</Box>
			</Flex>
		</Stack>
	);
};

export default Header;
