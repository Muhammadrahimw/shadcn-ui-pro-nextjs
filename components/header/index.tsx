import {ModeToggle} from "../modeToggle";
import {CloudLightningIcon, Paintbrush} from "lucide-react";
import Image from "next/image";
import {ChangeColor} from "./changeColor";
import type {baseColorType} from "@/@types";

export const HeaderComponent = ({baseColor}: baseColorType) => {
	return (
		<header className="max-[1100px]:text-xs tr max-[880px]:text-[0.65em] max-md:text-[0.5em] max-sm:text-[0.65em] max-[530px]:text-[0.5em] max-[400px]:text-[0.4em]">
			<nav className="flex items-center justify-between gap-4 py-2 border-b px-8">
				<div className="flex items-center gap-5">
					<p className="font-semibold text-xl pr-2 cursor-pointer">
						Shadcn Ul Pro
					</p>
					<p className="text-gray-400 cursor-pointer">Docs</p>
					<p className="text-gray-400 cursor-pointer">Components</p>
					<p className="text-gray-400 cursor-pointer">Themes</p>
					<p className="text-gray-400 cursor-pointer">Examples</p>
					<p className="text-gray-400 cursor-pointer">Blocks</p>
					<p className="text-gray-400 cursor-pointer">GitHub</p>
				</div>
				<div className="flex items-center gap-5">
					<ModeToggle />
				</div>
			</nav>
			<div className="px-8 flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-5 max-sm:text-xl max-sm:items-start tr">
				<div>
					<h1 className="text-[3em] font-semibold leading-tight">
						Shadcn UI Pro <br />
						Ship your startup rapidly
					</h1>
					<p className="leading-relaxed text-xl mt-2">
						Elegant, Simple, and Powerful NextJS boilerplate <br />
						with all you need to build your SaaS.
					</p>
					<div className="flex items-center gap-4 mt-3">
						<ChangeColor />
						<div className="border rounded-md cursor-pointer ml-3 flex items-center gap-2 py-2 px-4">
							<Paintbrush className="text-4xl" />
							Customize
						</div>
					</div>
					<div className="flex items-center gap-4 mt-4">
						<div
							className={`flex items-center justify-center gap-2 border py-2 px-4 rounded-md cursor-pointer`}
							style={{backgroundColor: baseColor}}>
							<CloudLightningIcon className="text-base" />
							Get Started
						</div>
						<div
							className={`flex items-center justify-center gap-2 border py-2 px-4 rounded-md cursor-pointer`}>
							$ git clone shadcn-ui-pro
						</div>
					</div>
				</div>
				<div>
					<Image
						width={670}
						height={670}
						alt="showcase-image"
						src={`/showcase-image.png`}
						priority
						className="max-[1100px]:w-[32em] max-sm:w-screen max-sm:mt-4"
					/>
				</div>
			</div>
		</header>
	);
};
