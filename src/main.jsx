import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserProvider>
			<BrowserRouter>
				<App />
				<Toaster position="top-right"/>
			</BrowserRouter>
		</UserProvider>
	</StrictMode>
);
