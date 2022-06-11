import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { DiFirebase, DiReact } from "react-icons/di";
import { FaShopify } from 'react-icons/fa'

const Profile = () => {
	return (
		<Flex
			direction={["column", "column", "row"]}
			w="100%"
			maxWidth={{ xl: "1200px" }}
            gap={10}
            justifyContent='center'
            alignItems='center'
		>
			<Box alignSelf="center" py="8">
				<Heading fontWeight="extrabold" color="cyan.500" size="4xl">
					1.5+
				</Heading>
				<Text fontSize="2xl" color="gray.400">
					Years of Experience
				</Text>
			</Box>
			<Box alignSelf="center" py="8">
				<Text fontWeight="bold" fontSize="2xl">
					Front-End Developer, Based on React and its frameworks
				</Text>
				<Flex direction={["column", "row"]} mt={8} gap={4} justifyContent='space-between' alignItems='center'>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						bg="blue.400"
						h="30vh"
						w="30vh"
						justify="flex-end"
					>
						<Icon
							color="white"
							p="4"
							as={DiReact}
							w="24"
							h="24"
						/>
						<Text
							color="white"
							p="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							React Web applications
						</Text>
					</Flex>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						bg="gray.100"
						h="30vh"
						w="30vh"
						justify="flex-end"
						_hover={{ bg: "teal.400" }}
					>
						<Icon
							color="white"
							p="4"
							as={DiFirebase}
							w="24"
							h="24"
						/>
						<Text
							color="white"
							p="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Firebase
						</Text>
					</Flex>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						bg="gray.100"
						h="30vh"
						w="30vh"
						justify="flex-end"
						_hover={{ bg: "green.400" }}
					>
						<Icon
							color="white"
							p="4"
							as={FaShopify}
							w="24"
							h="24"
						/>
						<Text
							color="white"
							p="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Shopify Themes
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Profile;
