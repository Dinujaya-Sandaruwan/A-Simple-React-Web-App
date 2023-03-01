// import me from "./../Img/me.jpg";

const DataBlock = ({ url, uname, post }) => {
	return (
		<aside className="display-data">
			<div className="one-data">
				<img src={url} alt="" />
				<h2>{uname}</h2>
				<p>{post}</p>
			</div>
		</aside>
	);
};

export default DataBlock;
