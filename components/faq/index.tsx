import {faqType} from "@/@types";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {faqItems} from "@/utils";

export const FaqComponent = () => {
	return (
		<section className="px-8 mt-[6em] max-sm:text-xs tr max-[450px]:text-[0.6em] max-[370px]:text-[0.5em]">
			<h2 className="text-[2.5em] font-semibold text-center">FAQ</h2>
			{faqItems.map((value: faqType) => (
				<Accordion key={value.id} type="single" collapsible className="w-full">
					<AccordionItem value={`item-${value.id}`}>
						<AccordionTrigger>{value.question}</AccordionTrigger>
						<AccordionContent>{value.answer}</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</section>
	);
};
