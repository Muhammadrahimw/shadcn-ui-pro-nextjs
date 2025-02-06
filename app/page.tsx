"use client";

import {AboutComponent} from "@/components/about";
import {ExamplesComponent} from "@/components/examples";
import {FaqComponent} from "@/components/faq";
import {FooterComponent} from "@/components/footer";
import {HeaderComponent} from "@/components/header";
import {TailwindComponent} from "@/components/tailwind";
import {RootState} from "@/redux/store";
import {themeColors} from "@/utils";
import {useSelector} from "react-redux";

const Home = () => {
	const colorName = useSelector((state: RootState) => state.color.color);
	const baseColor =
		themeColors.find((value) => value.name === colorName)?.color || "gray";
	return (
		<>
			<HeaderComponent baseColor={baseColor} />
			<AboutComponent />
			<TailwindComponent baseColor={baseColor} />
			<ExamplesComponent baseColor={baseColor} />
			<FaqComponent />
			<FooterComponent />
		</>
	);
};

export default Home;
