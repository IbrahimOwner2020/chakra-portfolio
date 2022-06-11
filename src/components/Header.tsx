import {
	Box,
	Button,
	Circle,
	Flex,
	Image,
	Spacer,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";

const Header = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Stack position="relative">
			<Circle
				top={["300px", "300px", "0px"]}
				position="absolute"
				bg="blue.100"
				opacity="0.1"
				size="300px"
				alignSelf="flex-end"
			/>
			<Flex
				direction={["column", "column", "row"]}
				pr={["0", "0", "32"]}
				maxWidth={{ md: "700px", lg: "900px", xl: "1200px" }}
				alignSelf="flex-start"
			>
				<Box mt={["0", "16"]} alignSelf="flex-start">
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
				</Box>
				<Spacer />
				<Circle size="300px" alignSelf="center" mt="12">
					<Image
						fit="cover"
						align="top"
						boxSize="300px"
						boxShadow="lg"
						backgroundColor="transparent"
						borderRadius="full"
						alignSelf="center"
						src="/kidibra.jpg"
					/>
				</Circle>
			</Flex>
		</Stack>
	);
};

export default Header;
