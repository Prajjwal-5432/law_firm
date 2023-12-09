import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const questions = [
    "Do I need a personal injury report?",
    "How much is my case worth?",
    "What should I do right after car accident?",
  ];
  const [active, setActive] = useState("");
  return (
    <div className="faq-footer">
      <div className="faq">
        <p>FAQ</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="faq-accordion">
        {questions.map((question, i) => {
          return (
            <div
              className={`list ${active === question ? "active" : ""}`}
              key={question}
            >
              <div className="question">
                <p>{question}</p>
                <button
                  onClick={() => setActive(active === question ? "" : question)}
                >{`${active === question ? "-" : "+"}`}</button>
              </div>
              <div className="answer">
                <p>
                  Amet minim mollit non deserunt ullamco est sit <br /> aliqua
                  dolor do amet sint. Velit officia consequatduis <br /> enim
                  velit mollit Exer. Amet minim mollit non deserunt <br />{" "}
                  ullamco est sit aliqua dolor do amet sint. Velit officia{" "}
                  <br /> consequatduis enim velit mollit Exer.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
