import type {
	aboutComponentItemsType,
	faqType,
	footerItemsType,
	themeColorsType,
} from "@/@types";
import {BoxIcon, PaintBucketIcon} from "lucide-react";

export const themeColors: themeColorsType[] = [
	{
		id: 1,
		color: "#52525b",
		name: "gray",
	},
	{
		id: 2,
		color: "#e11d48",
		name: "red",
	},
	{
		id: 3,
		color: "#3b82f6",
		name: "blue",
	},
	{
		id: 4,
		color: "#22c55e",
		name: "green",
	},
	{
		id: 5,
		color: "#ea580c",
		name: "orange",
	},
];

export const aboutComponentItems: aboutComponentItemsType[] = [
	{
		id: 1,
		tag: <BoxIcon />,
		title: "Tailwind",
		text: "Tailwind des",
	},
	{
		id: 2,
		tag: <BoxIcon />,
		title: "Supabase",
		text: "Supabase des",
	},
	{
		id: 3,
		tag: <BoxIcon />,
		title: "Stripe",
		text: "Stripe des",
	},
	{
		id: 4,
		tag: <BoxIcon />,
		title: "Mailngun",
		text: "Mailngun des",
	},
	{
		id: 5,
		tag: <BoxIcon />,
		title: "NextAuth",
		text: "NextAuth des",
	},
	{
		id: 6,
		tag: <BoxIcon />,
		title: "NextJS",
		text: "NextJS des",
	},
];

export const examplesComponentItems: aboutComponentItemsType[] = [
	{
		id: 1,
		tag: <PaintBucketIcon />,
		title: "Responsive Design",
		text: "Create stunning websites that adapt seamlessly to different screen sizes and devices.",
	},
	{
		id: 2,
		tag: <PaintBucketIcon />,
		title: "Extensive Component Library",
		text: "Choose from a vast collection of pre-built components to accelerate your application development.",
	},
	{
		id: 3,
		tag: <PaintBucketIcon />,
		title: "Cross-Browser Compatibility",
		text: "Rest assured that your application will work flawlessly across all major browsers",
	},
	{
		id: 4,
		tag: <PaintBucketIcon />,
		title: "Accessibility Ready",
		text: "Ensure your application is accessible to all users, regardless of their abilities or devices.",
	},
	{
		id: 5,
		tag: <PaintBucketIcon />,
		title: "Optimized Performance",
		text: "Deliver fast-loading and smooth user experiences with our performance-optimized codebase.",
	},
	{
		id: 6,
		tag: <PaintBucketIcon />,
		title: "Customizable Styles",
		text: "Easily customize the look and feel of your application with our flexible styling options.",
	},
];

export const secondExamplesComponentItems: aboutComponentItemsType[] = [
	{
		id: 1,
		tag: <PaintBucketIcon />,
		title: "Simplicity",
		text: "Our framework is designed to be user-friendly, allowing developers of all levels to create professional-looking applications with ease.",
	},
	{
		id: 2,
		tag: <PaintBucketIcon />,
		title: "Versatility",
		text: "Shadcn UI Pro is well-suited for a wide range of applications, from corporate websites to e-commerce platforms and personal blogs.",
	},
	{
		id: 3,
		tag: <PaintBucketIcon />,
		title: "Excellent Support",
		text: "Our dedicated support team is always available to assist you with any issues or questions you may have.",
	},
	{
		id: 4,
		tag: <PaintBucketIcon />,
		title: "Regular Updates",
		text: "We continually improve and enhance Shadcn UI Pro based on user feedback and emerging industry trends.",
	},
	{
		id: 5,
		tag: <PaintBucketIcon />,
		title: "Thriving Community",
		text: "Join our active community of developers to collaborate, learn, and access valuable resources.",
	},
];

export const faqItems: faqType[] = [
	{
		id: 1,
		question: "Does Shadcn UI Pro Affliated with Shadcn or Shadcn/ui?",
		answer:
			"No. Shadcn UI Pro is a professional template that integrates many sass services and can quickly build entrepreneurial projects.",
	},
	{
		id: 2,
		question: "What is Shadcn UI Pro?",
		answer:
			"Shadcn UI Pro is a premium UI framework designed for modern web development projects.",
	},
	{
		id: 3,
		question: "What are the key features of Shadcn UI Pro?",
		answer:
			"Shadcn UI Pro offers a responsive design, an extensive component library, customizable styles, accessibility support, cross-browser compatibility, optimized performance, and developer-friendly code.",
	},
	{
		id: 4,
		question:
			"Can Shadcn UI Pro be used for different screen sizes and devices?",
		answer:
			"Yes, Shadcn UI Pro is designed to create websites that adapt seamlessly to various screen sizes and devices.",
	},
	{
		id: 5,
		question: "Is it easy to customize the styles of Shadcn UI Pro?",
		answer:
			"Absolutely! Shadcn UI Pro provides flexible styling options, allowing you to easily customize the appearance of your application.",
	},
	{
		id: 6,
		question: "Does Shadcn UI Pro support accessibility?",
		answer:
			"Yes, Shadcn UI Pro is built with accessibility in mind, ensuring that your application is accessible to all users.",
	},
	{
		id: 7,
		question: "Does Shadcn UI Pro prioritize performance?",
		answer:
			"Yes, Shadcn UI Pro is optimized for performance, delivering fast-loading and smooth user experiences",
	},
	{
		id: 8,
		question:
			"Will my application built with Shadcn UI Pro work on different browsers?",
		answer:
			"Definitely! Shadcn UI Pro is tested and compatible with all major browsers, ensuring a consistent experience for your users.",
	},
	{
		id: 9,
		question: "Is Shadcn UI Pro suitable for beginners?",
		answer:
			"Absolutely! Shadcn UI Pro is designed to be user-friendly, making it accessible to developers of all levels.",
	},
	{
		id: 10,
		question: "What kind of support is available for Shadcn UI Pro?",
		answer:
			"We provide excellent support for Shadcn UI Pro. Our dedicated support team is available to assist you with any questions or issues you may encounter.",
	},
	{
		id: 11,
		question: "Can I join a community of developers using Shadcn UI Pro?",
		answer:
			"Yes, we have an active community of developers using Shadcn UI Pro. Join us to collaborate, learn, and access valuable resources.",
	},
];

export const footerItems: footerItemsType[] = [
	{
		id: 1,
		title: "Products",
		links: [
			"Project Management",
			"Multi-tenancy",
			"Scalability",
			"Customization",
			"Integration",
			"Mobile accessibility",
			"Analytics and reporting",
		],
	},
	{
		id: 2,
		title: "Features",
		links: [
			"User management",
			"Workflow automation",
			"API access",
			"Data visualization",
			"Version control",
			"Upgrades",
			"Billing and invoicing",
		],
	},
	{
		id: 3,
		title: "Explore",
		links: ["Docs", "Pricing", "Integrations", "Blog", "About"],
	},
];
