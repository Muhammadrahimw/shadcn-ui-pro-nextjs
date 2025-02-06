import type {baseColorType} from "@/@types";
import {Calendar} from "../ui/calendar";

export const TailwindComponent = ({baseColor}: baseColorType) => {
	return (
		<section className="px-8 text-center mt-[6em] max-[450px]:px-2">
			<div className="max-md:text-xs tr max-[550px]:text-[0.6em] max-[400px]:text-[0.5em]">
				<h2 className="text-[4.5em] font-semibold">700+</h2>
				<p className="text-[2.5em] font-semibold">
					Tailwind CSS <span style={{color: baseColor}}>Components</span>
				</p>
				<p className="text-gray-400 w-[40em] max-md:w-full mx-auto">
					Based on the Tailwind CSS utility classes, Preline UI's prebuilt
					components and UI elements help you quickly design and customize
					responsive mobile-first websites.
				</p>
			</div>
			<div className="grid grid-cols-4 gap-4 mt-8 max-lg:grid-cols-3 max-[550px]:grid-cols-1 max-md:grid-cols-2 place-items-center">
				{Array.from({length: 8}).map((_, idx) => (
					<Calendar key={idx} />
				))}
			</div>
		</section>
	);
};
