import {aboutComponentItemsType, baseColorType} from "@/@types";
import {examplesComponentItems, secondExamplesComponentItems} from "@/utils";

export const ExamplesComponent = ({baseColor}: baseColorType) => {
	return (
		<section className="mt-[6em] px-8 max-[1100px]:text-xs tr max-md:text-[0.6em] max-sm:text-sm max-[530px]:text-xs max-[400px]:text-[0.65em] max-md:text-center">
			<div className="max-md:text-xs tr max-[550px]:text-[0.6em] max-[400px]:text-[0.5em] flex flex-col items-center">
				<h2 className="text-[4.5em] font-semibold leading-none">12+</h2>
				<p className="text-[2.5em] font-semibold">
					Starter Pages & <span style={{color: baseColor}}>Examples</span>
				</p>
				<p className="text-gray-400 w-[40em] max-md:w-full mx-auto">
					Kick-start your projects with Preline Pros wide range of examples,
					using pre-built UI parts, custom components and layouts using Tailwind
					CSS
				</p>
			</div>
			<div className="grid grid-cols-3 gap-6 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:text-xl trr">
				{examplesComponentItems.map((value: aboutComponentItemsType) => (
					<div
						key={value.id}
						className="flex items-center gap-6 hover:bg-gray-900 cursor-pointer px-8 py-3 rounded-lg">
						<div className="scale-150">{value.tag}</div>
						<div>
							<p className="font-semibold text-xl">{value.title}</p>
							<p className="text-gray-400">{value.text}</p>
						</div>
					</div>
				))}
			</div>
			<p className="text-4xl text-start font-semibold mt-[5em]">
				Why Choose Shadcn UI Pro?
			</p>
			<div className="grid grid-cols-3 gap-6 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:text-xl trr">
				{secondExamplesComponentItems.map((value: aboutComponentItemsType) => (
					<div
						key={value.id}
						className="flex items-center gap-6 hover:bg-gray-900 cursor-pointer px-8 py-3 rounded-lg">
						<div className="scale-150">{value.tag}</div>
						<div>
							<p className="font-semibold text-xl">{value.title}</p>
							<p className="text-gray-400">{value.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
