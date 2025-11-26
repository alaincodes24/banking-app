import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="blog" element={<Blog />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
