import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<ChakraProvider>
            <ColorModeScript initialColorMode="dark"></ColorModeScript>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
