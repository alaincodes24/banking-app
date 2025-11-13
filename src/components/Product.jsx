import { useState } from "react";

function Product({ name, price, availability }) {
	const [isLiked, setIsLiked] = useState(false);
	const [isAdded, setIsAdded] = useState(false);
	const [count, setCount] = useState(0);

	const [counter, setCounter] = useState(0);

	console.log(count);

  const increment = () => setCounter(prevCounter => prevCounter + 1);
  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  const addToCart = () => setCount(prevCount => prevCount + 1);

	return (
		<div>
			<h3>{name}</h3>
			<p>{price} RWF</p>
			<p>{availability ? "Available" : "Unavailable"}</p>
			<button
				onClick={() => setIsLiked((prevIsLiked) => !prevIsLiked)}
				className="bg-sky-900 px-2 py-1 rounded-md text-white"
			>
				{isLiked ? "Unlike" : "Like"}
			</button>
			<button
				onClick={() => {
					setIsAdded((prevIsAdded) => !prevIsAdded);
					addToCart();
				}}
				className="bg-green-700 px-2 py-1 rounded-md text-white"
			>
				{isAdded ? "Remove from 🛒" : "Add to 🛒"}
			</button>
			<div className="w-1/4 flex justify-around gap-x-3">
				<button onClick={decrement}>-</button>
				<p>{counter}</p>
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
}

export default Product;
