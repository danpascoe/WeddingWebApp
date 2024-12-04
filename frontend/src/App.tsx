import { SideMenu } from "./components/SideMenu";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { Dashboard } from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="app">
				<SideMenu />
				<main className="content">
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
