import {aboutComponentItemsType} from "@/@types";
import {aboutComponentItems} from "@/utils";

export const AboutComponent = () => {
	return (
		<section className="mt-[6em] px-8 max-[1100px]:text-xs tr max-md:text-[0.6em] max-sm:text-sm max-[530px]:text-xs max-[400px]:text-[0.65em]">
			<h2 className="text-[3em] text-center">
				Ship faster with endless integrations
			</h2>
			<div className="grid grid-cols-3 gap-6 mt-8 max-sm:grid-cols-1 max-sm:text-xl tr">
				{aboutComponentItems.map((value: aboutComponentItemsType) => (
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
