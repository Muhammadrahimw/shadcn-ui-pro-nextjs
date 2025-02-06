import {footerItemsType} from "@/@types";
import {footerItems} from "@/utils";

export const FooterComponent = () => {
	return (
		<footer className="px-8 mt-[6em] grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-8 max-lg:text-xs tr max-md:text-[0.6em] max-sm:grid-cols-2 max-sm:text-sm max-sm:gap-12 max-[450px]:grid-cols-1">
			<div className="max-sm:col-span-2 max-[450px]:col-span-1">
				<h2 className="text-[2.5em] font-semibold">Shadcn UI Pro</h2>
				<p className="mt-4 font-medium">
					Shadcn UI Pro is Powerful NextJS boilerplate build with shadcn/ui.
				</p>
				<p className="mt-4">
					Introducing the ultimate NextJS boilerplate, your gateway to building
					a game-changing SaaS, an AI-powered marvel, or any web app you can
					dream of. Get ready to turbocharge your online success and start
					making those dollars flow in.
				</p>
			</div>
			{footerItems.map((value: footerItemsType) => (
				<div key={value.id}>
					<p className="text-2xl font-bold mb-5">{value.title}</p>
					{value.links.map((links, idx) => (
						<p key={idx} className="font-semibold mt-4 cursor-pointer">
							{links}
						</p>
					))}
				</div>
			))}
		</footer>
	);
};
