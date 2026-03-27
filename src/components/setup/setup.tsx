import type { Dispatch } from "react";
import { useState } from "react";
import type { Action } from "../../context/reducer";

interface SetupComponentProps {
	dispatch: Dispatch<Action>;
}
export default function Setup({ dispatch }: SetupComponentProps) {
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("21");
	const [difficulty, setDifficulty] = useState("easy");
	const handleNext = () => {
		dispatch({ type: "SET_SETUP", payload: false });
		dispatch({ type: "SET_QUESTION", payload: true });
	};
	async function HandleFetch() {
		// console.log({ amount, category, difficulty });
		const response = await fetch(
			`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
		);
		const data = await response.json();
		console.log(data);
		handleNext();
	}

	return (
		<div className="bg-[#9334ea] text-white w-full h-screen flex flex-col items-center justify-around">
			<img
				src="../../../src/assets/images/logo.png"
				alt="logo"
				className="w-3/12"
			/>
			<h1 className="text-3xl font-bold ">Setup Quiz</h1>
			<div className="flex flex-col w-full  gap-2">
				<label
					htmlFor="amount"
					className="w-1/2 mx-auto text-left text-sm font-bold text-white"
				>
					Number Of Question
				</label>
				<input
					type="text"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className=" w-1/2
      mx-auto
      rounded-lg
      bg-[#fde047]
      px-3
      py-2
      text-black
      focus:outline-none
      focus:ring-2
      focus:ring-gray-300"
				/>
				<label
					htmlFor="category"
					className="w-1/2 mx-auto text-left text-sm font-bold text-white"
				>
					Category
				</label>
				<select
					className=" w-1/2
      mx-auto
      rounded-lg
      bg-[#fde047]
      px-3
      py-2
      text-black
      focus:outline-none
      focus:ring-2
      focus:ring-gray-300"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="21">SPORT</option>
					<option value="22">GEOGRAPHY</option>
					<option value="27">ANIMAL</option>
					<option value="25">ART</option>
				</select>
				<label
					htmlFor="difficulty"
					className="w-1/2 mx-auto text-left text-sm font-bold text-white"
				>
					Difficulty
				</label>
				<select
					className=" w-1/2
      mx-auto
      rounded-lg
      
     bg-[#fde047]
      px-3
      py-2
      text-black
      focus:outline-none
      focus:ring-2
      focus:ring-gray-300"
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}
				>
					<option value="easy">EASY</option>
					<option value="medium">MEDIUM</option>
					<option value="hard">HARD</option>
				</select>
			</div>
			<div className="flex flex-col items-center">
				<button
					onClick={HandleFetch}
					className="font-bold cursor-pointer text-white "
				>
					START
				</button>
				<img
					src="../../../src/assets/svg/off-button-power-button-svgrepo-com.svg"
					className="w-10"
					onClick={HandleFetch}
				/>
			</div>
		</div>
	);
}
