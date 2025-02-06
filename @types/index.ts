export interface themeColorsType {
	id: number;
	color: string;
	name: string;
}

export interface baseColorType {
	baseColor: string;
}

export interface aboutComponentItemsType {
	id: number;
	tag: JSX.Element;
	title: string;
	text: string;
}

export interface faqType {
	id: number;
	question: string;
	answer: string;
}

export interface footerItemsType {
	id: number;
	title: string;
	links: string[];
}
