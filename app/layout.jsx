import Nav from "@components/Nav";
import "@styles/global.css";
import Provider from "@components/Provider";

export const metadata = {
	title: "Promptopia",
	description: "A place to find prompts for your next project",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<div className="app">
						<Nav />
						{children}
					</div>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
