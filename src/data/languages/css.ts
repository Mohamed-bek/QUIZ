import { QuestionSet } from "../types";

export const cssQuestions: QuestionSet = {
  easy: [
    {
      question: "How do you select an element with the class 'example' in CSS?",
      options: [".example", "#example", "example", "*example"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "font-style"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "How do you add a comment in CSS?",
      options: ["// comment", "/* comment */", "<!-- comment -->", "' comment"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question:
        "Which property is used to create space outside an element's border?",
      options: ["padding", "margin", "spacing", "border-space"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you select all paragraph elements?",
      options: ["p{}", ".p{}", "#p{}", "*p{}"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question:
        "Which value makes a flexbox container distribute items evenly?",
      options: ["flex-start", "space-between", "center", "space-around"],
      correctAnswer: 3,
      points: 100,
    },
    {
      question: "How do you make text bold in CSS?",
      options: [
        "font-weight: bold",
        "text-style: bold",
        "font-bold: true",
        "bold: true",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which property controls the background color of an element?",
      options: [
        "bg-color",
        "background",
        "background-color",
        "color-background",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "How do you select an element with the ID 'header'?",
      options: [".header", "#header", "header", "*header"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which CSS unit is relative to the parent element's font size?",
      options: ["px", "cm", "em", "rem"],
      correctAnswer: 2,
      points: 100,
    },
  ],
  medium: [
    {
      question: "What does the CSS 'box-sizing: border-box' do?",
      options: [
        "Adds a border to all boxes",
        "Includes padding and border in the element's total width and height",
        "Creates a box shadow",
        "Rounds the corners of a box",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the CSS 'position: absolute' property?",
      options: [
        "Makes the element fixed on the screen",
        "Positions the element relative to its nearest positioned ancestor",
        "Centers the element",
        "Removes the element from the document flow",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What does the CSS 'flexbox' layout model primarily do?",
      options: [
        "Create grid-based layouts",
        "Provide a more efficient way to lay out, align, and distribute space among items",
        "Handle 3D transformations",
        "Create responsive tables",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a CSS preprocessor?",
      options: [
        "A tool that processes CSS before it's compiled",
        "A browser extension for CSS",
        "A method to validate CSS code",
        "A way to compress CSS files",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What does the ':nth-child()' pseudo-class do?",
      options: [
        "Selects the first child element",
        "Selects elements based on their position among siblings",
        "Counts the number of child elements",
        "Validates child elements",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the CSS 'cascade' in Cascading Style Sheets?",
      options: [
        "A method to create waterfall effects",
        "The way styles are applied based on specificity and order",
        "A technique for animating elements",
        "A way to organize CSS files",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What does the 'transform' property allow you to do?",
      options: [
        "Change an element's appearance",
        "Modify an element's size, position, and shape",
        "Create animations",
        "Rotate elements only",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is CSS Grid primarily used for?",
      options: [
        "Creating flexible layouts",
        "Two-dimensional layout system for complex web designs",
        "Styling text",
        "Creating animations",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What does the 'will-change' property do?",
      options: [
        "Predict future CSS changes",
        "Hint to browsers about expected element transformations",
        "Create placeholder elements",
        "Define future CSS rules",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of CSS custom properties (variables)?",
      options: [
        "Create dynamic JavaScript variables",
        "Store and reuse values throughout a stylesheet",
        "Generate random color values",
        "Create temporary CSS rules",
      ],
      correctAnswer: 1,
      points: 200,
    },
  ],
  hard: [
    {
      question: "What is CSS-in-JS?",
      options: [
        "A method to write CSS directly in JavaScript files",
        "A technique for styling JavaScript components",
        "A way to generate CSS dynamically",
        "A JavaScript framework for styling",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What does the CSS @supports rule do?",
      options: [
        "Check browser compatibility",
        "Test if a browser supports a specific CSS feature",
        "Validate CSS syntax",
        "Create fallback styles",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the CSS contain property used for?",
      options: [
        "Limiting the scope of style and layout",
        "Preventing element overflow",
        "Creating containment zones",
        "Isolating CSS rules",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What does the CSS clip-path property enable?",
      options: [
        "Cropping images",
        "Creating complex shapes by clipping an element's content",
        "Adding image filters",
        "Masking element backgrounds",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of CSS logical properties?",
      options: [
        "Creating logical programming-like styles",
        "Supporting different writing modes and text directions",
        "Implementing conditional styling",
        "Creating responsive layouts",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the CSS content-visibility property?",
      options: [
        "Controlling element visibility",
        "Improving rendering performance for off-screen elements",
        "Creating animated visibility transitions",
        "Managing overflow content",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What does the CSS backdrop-filter property do?",
      options: [
        "Creating background effects",
        "Applying graphical effects to the area behind an element",
        "Filtering background images",
        "Modifying element transparency",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the CSS scroll-snap-type property?",
      options: [
        "Creating scroll animations",
        "Controlling scroll behavior and snapping",
        "Managing scrollbar appearance",
        "Limiting scroll distance",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What does the CSS mask-image property allow?",
      options: [
        "Creating image masks",
        "Applying image-based transparency effects",
        "Hiding specific parts of an image",
        "Generating gradient masks",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the CSS object-view-box property used for?",
      options: [
        "Creating 3D transformations",
        "Defining a visible area for replaced elements",
        "Managing object visibility",
        "Creating viewport effects",
      ],
      correctAnswer: 1,
      points: 300,
    },
  ],
};
