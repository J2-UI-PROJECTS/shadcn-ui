import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const itemsAccordion = [
  {
    id: "item-1",
    question: "question 1",
    answer: "answer 1",
  },
  {
    id: "item-2",
    question: "question 2",
    answer: "answer 2",
  },
  {
    id: "item-3",
    question: "question 3",
    answer: "answer 3",
  },
];
const page = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {itemsAccordion.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.question}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default page;
