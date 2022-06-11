import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

const Social = () => {
	return (
		<HStack spacing={['6', '12', '24']} pt='40px'>
			<Icon as={FaFacebookF} boxSize="50px" />
			<Icon as={FaGoogle} boxSize="50px" />
			<Icon as={FaSpotify} boxSize="50px" />
			<Icon as={FaShopify} boxSize="50px" />
		</HStack>
	);
};

export default Social;
