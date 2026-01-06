import type { Dispatch } from "react";
import type { Action } from "../../context/reducer";

interface FinishComponentProps {
	dispatch: Dispatch<Action>;
}

export function Finish({ dispatch }: FinishComponentProps) {
	const handleRestart = () => {
		dispatch({ type: "SET_FINISH", payload: false });
		dispatch({ type: "SET_START", payload: true });
	};

	return (
		<div className="bg-[#9334ea] text-white font-bold w-full h-screen flex flex-col items-center justify-around">
			<img
				src="../../../src/assets/images/logo.png"
				alt="logo"
				className="w-3/12"
			/>
			<div className="flex flex-col items-center gap-2">
				<img src="src/assets/svg/crying-svgrepo-com.svg" className="w-35" />
				<span>TRY MORE</span>
			</div>
			<span>YOUR SCOER=20%</span>
			<button onClick={handleRestart}>Again</button>
		</div>
	);
}
