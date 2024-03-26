import { useState } from "react";

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div class="accordion">
      {faqs.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            number={index + 1}
            title={item.title}
            onOpen={setCurOpen}
            curOpen={curOpen}
          >
            {item.text}
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({ number, title, children, onOpen, curOpen }) {
  const isOpen = number === curOpen;
  return (
    <div
      onClick={() => onOpen(isOpen ? null : number)}
      className={`item ${isOpen ? "open" : ""}`}
    >
      <div className="number">{number < 10 ? `0${number}` : number}</div>
      <div className="title">{title}</div>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
