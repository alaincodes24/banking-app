import { useState } from "react";

import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";

function ReadMore() {
	const [isVisible, setIsVisible] = useState(false);

	console.log(isVisible);

	return (
		<>
			<div className="bg-gray-100 text-blue-900 flex justify-between items-center">
				<p onClick={() => setIsVisible(prevIsVisible => !prevIsVisible)}>
					{isVisible ? "Hide" : "Read More"}
				</p>
				<div>
					{isVisible ? (
						<img src={ArrowUp} alt="Arrow down" className="h-10 w-3" />
					) : (
						<img src={ArrowDown} alt="Arrow up" className="h-10 w-3" />
					)}
				</div>
			</div>
			{isVisible && (
				<div className="text-green-700 border border-gray-200">
					I am a very cool person. Please, hang out with me more and I will show
					you what it means to live a cool life.
				</div>
			)}
		</>
	);
}

export default ReadMore;
