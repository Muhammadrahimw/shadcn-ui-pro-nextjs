"use client";

import {themeColors} from "@/utils";
import {RootState} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {updateColor} from "@/redux/colors-slice";
import {useEffect, useState} from "react";

export const ChangeColor = () => {
	const [themeState, setThemeState] = useState<"dark" | "light">("dark");
	const baseColor = useSelector((state: RootState) => state.color.color);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateColor(localStorage.getItem("baseColor") || "gray"));
		setThemeState(localStorage.getItem("theme") as "dark" | "light");
	}, [dispatch]);

	return (
		<>
			{themeColors.map((value) => (
				<div
					key={value.id}
					onClick={() => dispatch(updateColor(value.name))}
					className={`w-7 h-7 rounded-full cursor-pointer flex items-center justify-center ${
						baseColor === value.name ? "scale-125" : ""
					}`}
					style={{backgroundColor: value.color}}>
					{baseColor === value.name ? (
						<div
							className={`w-6 h-6 rounded-full flex items-center justify-center`}
							style={{
								backgroundColor: themeState === "dark" ? "black" : "white",
							}}>
							<div
								className={`w-5 h-5 rounded-full`}
								style={{backgroundColor: value.color}}></div>
						</div>
					) : (
						""
					)}
				</div>
			))}
		</>
	);
};
