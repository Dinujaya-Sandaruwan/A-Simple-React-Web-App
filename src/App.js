import "./Style/index.css";

import DataBlock from "./Components/Diaplay-data";
import { useState } from "react";

// let Data = {
// 	image: "https://avatars.githubusercontent.com/u/88492493?v=4",
// 	name: "Dinujaya Sandaruwan",
// 	post: "Software Developer",
// };

function App() {
	const [Image, setImage] = useState("");
	const [Name, setName] = useState("");
	const [Post, setPost] = useState("");
	const [MyData, setMyData] = useState([]);
	return (
		<div className="App">
			{/* input Box */}
			<aside className="form-input">
				<h1 className="title">Input Info</h1>
				<hr className="line" />

				<main>
					<div className="feild">
						<label htmlFor="image">Image URL :- </label>
						<input
							type="text"
							value={Image}
							onChange={(e) => {
								e.preventDefault();
								setImage(e.target.value);
							}}
						/>
					</div>
					<div className="feild">
						<label htmlFor="image">User Name :- </label>
						<input
							type="text"
							value={Name}
							onChange={(e) => {
								e.preventDefault();
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="feild">
						<label htmlFor="image">User Position :- </label>
						<input
							type="text"
							value={Post}
							onChange={(e) => {
								e.preventDefault();
								setPost(e.target.value);
							}}
						/>
					</div>

					<div>
						<button
							className="submit"
							onClick={() => {
								setMyData((pre) => {
									return [...pre, { Image: Image, Name: Name, Post: Post }];
								});
								setImage((pre) => {
									if (pre.length > 0) {
										return "";
									} else {
										return pre;
									}
								});

								setName((pre) => {
									return pre.length > 0 ? "" : pre;
								});

								setPost((pre) => {
									return pre.length > 0 ? "" : pre;
								});
							}}
						>
							ADD Data
						</button>
					</div>
				</main>
			</aside>

			<>
				{MyData?.map(({ Image, Name, Post }, index) => {
					return <DataBlock key={index} url={Image} uname={Name} post={Post} />;
				})}
			</>
		</div>
	);
}

export default App;
