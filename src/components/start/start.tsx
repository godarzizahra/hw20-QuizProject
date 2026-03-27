import { useState, type Dispatch } from "react";
import type { Action } from "../../context/reducer";
interface StartComponentProps {
	dispatch: Dispatch<Action>;
}
export default function Start({ dispatch }: StartComponentProps) {
	const [isLaunching, setIsLaunching] = useState(false);

	const handleNext = () => {
		setIsLaunching(true);
		setTimeout(() => {
			dispatch({ type: "SET_START", payload: false });
			dispatch({ type: "SET_SETUP", payload: true });
		}, 700);
	};

	return (
		<div className="w-full h-screen bg-[#9334ea] flex flex-col items-center justify-around text-white">
			<img
				src="../../../src/assets/images/logo.png"
				alt="logo"
				className="w-3/12"
			/>
			<h1 className="text-3xl font-bold">Welcome To Quiz App</h1>
			<div className="flex flex-col justify-center items-center gap-1">
				<button
					onClick={handleNext}
					className="text-white cursor-pointer font-bold "
				>
					GET START
				</button>
				<img
					src="../../../src/assets/svg/rocket-svgrepo-com.svg"
					alt=""
					className={`
		w-10
		transition-transform
		duration-700
		ease-in-out
		${isLaunching ? "-translate-y-140" : "translate-y-0"}
	`}
				/>
			</div>
		</div>
	);
}
