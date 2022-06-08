import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

const Social = () => {
	return (
		<HStack spacing="24">
			<Icon as={FaFacebookF} boxSize="50px" />
			<Icon as={FaGoogle} boxSize="50px" />
			<Icon as={FaSpotify} boxSize="50px" />
			<Icon as={FaShopify} boxSize="50px" />
		</HStack>
	);
};

export default Social;
