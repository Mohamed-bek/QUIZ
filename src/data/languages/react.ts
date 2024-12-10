import { QuestionSet } from "../types";

export const reactQuestions: QuestionSet = {
  easy: [
    {
      question: "What is React primarily used for?",
      options: [
        "Backend development",
        "Building user interfaces",
        "Database management",
        "Network programming",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is JSX in React?",
      options: [
        "A type of JavaScript extension",
        "A syntax extension for JavaScript",
        "A styling language",
        "A database query language",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you create a functional component in React?",
      options: [
        "function MyComponent() {}",
        "class MyComponent {}",
        "const MyComponent = () => {}",
        "function Component()",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What hook is used to add state to functional components?",
      options: ["useEffect()", "useState()", "useContext()", "useReducer()"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does the 'props' keyword represent in React?",
      options: [
        "Private component methods",
        "Property values passed to a component",
        "Component styling",
        "Component lifecycle methods",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you render a list in React?",
      options: [
        "Using a for loop",
        "Using map() method",
        "Using forEach()",
        "Using while loop",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the purpose of the key prop when rendering lists?",
      options: [
        "To style list items",
        "To help React identify which items have changed",
        "To sort list items",
        "To count list items",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you import React in a component?",
      options: [
        "import React from 'react'",
        "require('React')",
        "include React",
        "import * from React",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What is the default export in a React component file?",
      options: [
        "function Component()",
        "export default Component",
        "module.exports = Component",
        "return Component",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does the 'render' method return in a class component?",
      options: [
        "Component logic",
        "JSX to be rendered",
        "Component state",
        "Component props",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you pass a prop to a child component?",
      options: [
        "<ChildComponent prop={value}>",
        "<ChildComponent prop='value'>",
        "ChildComponent.prop = value",
        "this.prop = value",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What is an event in React?",
      options: [
        "A function that triggers rendering",
        "A user interaction like click or submit",
        "A component lifecycle method",
        "A state change",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What syntax is used for conditional rendering?",
      options: [
        "if-else statements",
        "Ternary operator",
        "switch statements",
        "while loops",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you handle form submissions in React?",
      options: [
        "Using HTML form submit",
        "Using React's onSubmit event handler",
        "Using JavaScript submit method",
        "Using onClick event",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the purpose of React.Fragment?",
      options: [
        "To create animations",
        "To group multiple elements without adding extra DOM nodes",
        "To create conditional rendering",
        "To style components",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you create a comment in JSX?",
      options: [
        "// Comment",
        "{/* Comment */}",
        "<!-- Comment -->",
        "/* Comment */",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does the spread operator (...) do in React?",
      options: [
        "Creates multiple components",
        "Spreads object properties",
        "Copies entire arrays",
        "Creates deep copies",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct way to update state?",
      options: [
        "this.state = newValue",
        "this.setState({key: newValue})",
        "state = newValue",
        "setState(newValue)",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does 'create-react-app' do?",
      options: [
        "Creates a new React project with default configuration",
        "Installs React libraries",
        "Generates React components",
        "Builds React application",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "How do you bind methods in a class component?",
      options: [
        "Using bind() in constructor",
        "Using arrow functions",
        "Using call() method",
        "Using apply() method",
      ],
      correctAnswer: 0,
      points: 100,
    },
  ],
  medium: [
    {
      question: "What is the purpose of useEffect() hook?",
      options: [
        "To create components",
        "To perform side effects in functional components",
        "To manage state",
        "To create custom hooks",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What are React Hooks?",
      options: [
        "Methods to connect to databases",
        "Functions that let you use state and other React features in functional components",
        "Ways to create animations",
        "Methods for error handling",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is prop drilling?",
      options: [
        "A performance optimization technique",
        "Passing props through multiple levels of components",
        "A method to validate props",
        "A way to create nested components",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of useContext() hook?",
      options: [
        "To create new contexts",
        "To consume context without nesting",
        "To modify global state",
        "To create middleware",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is React Router used for?",
      options: [
        "To create API routes",
        "To handle navigation in a React application",
        "To manage state routing",
        "To create backend routes",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of useReducer() hook?",
      options: [
        "To reduce array size",
        "To manage complex state logic in components",
        "To optimize rendering",
        "To create middleware",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a Higher-Order Component (HOC)?",
      options: [
        "A component that renders other components",
        "A function that takes a component and returns a new component",
        "A method to create class components",
        "A way to manage global state",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of React.memo()?",
      options: [
        "To create memoized functions",
        "To prevent unnecessary re-renders of functional components",
        "To cache component states",
        "To optimize state management",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the use of useCallback() hook?",
      options: [
        "To create callback functions",
        "To memoize callback functions to prevent unnecessary re-renders",
        "To handle asynchronous callbacks",
        "To create event listeners",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of useMemo() hook?",
      options: [
        "To create memos",
        "To memoize expensive computations",
        "To manage component memory",
        "To create cache mechanisms",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is Redux primarily used for?",
      options: [
        "Backend development",
        "State management in large applications",
        "Creating UI components",
        "Handling network requests",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question:
        "What is the difference between controlled and uncontrolled components?",
      options: [
        "Controlled components manage their own state, uncontrolled do not",
        "Controlled components have their state managed by React, uncontrolled manage their own state",
        "Controlled components are faster",
        "Uncontrolled components are more flexible",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of React.lazy()?",
      options: [
        "To create lazy loading animations",
        "To implement code splitting and lazy load components",
        "To delay component rendering",
        "To optimize component performance",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the Suspense component used for?",
      options: [
        "To create loading states",
        "To handle component loading and code splitting",
        "To manage error boundaries",
        "To create transition effects",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of ErrorBoundary in React?",
      options: [
        "To prevent all errors",
        "To catch JavaScript errors in child components and display fallback UI",
        "To validate component props",
        "To optimize error handling",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of useRef() hook?",
      options: [
        "To create references to DOM elements",
        "To store mutable values without causing re-renders",
        "To manage component lifecycle",
        "To create global variables",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of React.Children utilities?",
      options: [
        "To manage child component lifecycle",
        "To manipulate and transform children props",
        "To create nested components",
        "To validate child components",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of forwardRef()?",
      options: [
        "To create forward declarations",
        "To forward refs through components",
        "To manage component inheritance",
        "To create higher-order components",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the useImperativeHandle() hook?",
      options: [
        "To create imperative code",
        "To customize the instance value exposed to parent components",
        "To manage component rendering",
        "To create side effects",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the useDeferredValue() hook?",
      options: [
        "To defer component rendering",
        "To defer updating a value during high-priority updates",
        "To manage asynchronous values",
        "To create lazy loading",
      ],
      correctAnswer: 1,
      points: 200,
    },
  ],
  hard: [
    {
      question: "What is the purpose of React.PureComponent?",
      options: [
        "To create a functional component",
        "To optimize components by shallowly comparing props and state",
        "To manage lifecycle methods",
        "To create higher-order components",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is React.memo used for?",
      options: [
        "To store memoized values in state",
        "To optimize functional components by preventing unnecessary renders",
        "To handle asynchronous operations",
        "To manage local storage",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the significance of the key prop in React?",
      options: [
        "To uniquely identify list items for performance optimization",
        "To manage component state",
        "To control props passed to components",
        "To access child components",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of the React.Fragment component?",
      options: [
        "To create reusable components",
        "To wrap multiple children without adding extra nodes to the DOM",
        "To handle fragment lifecycle",
        "To cache component data",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the React.Children utility?",
      options: [
        "To create child components",
        "To iterate over and manipulate children components",
        "To enforce type checking for children",
        "To share data between components",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the difference between useLayoutEffect and useEffect?",
      options: [
        "useLayoutEffect runs after rendering, while useEffect runs during rendering",
        "useLayoutEffect runs synchronously after DOM mutations, while useEffect runs asynchronously after rendering",
        "useLayoutEffect is for server-side rendering, and useEffect is for client-side rendering",
        "useLayoutEffect optimizes performance, while useEffect does not",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of React.forwardRef?",
      options: [
        "To manage component focus",
        "To pass refs through a component to its children",
        "To optimize rendering performance",
        "To create higher-order components",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the useImperativeHandle hook?",
      options: [
        "To create new refs",
        "To customize the instance value exposed by refs",
        "To handle imperative DOM operations",
        "To improve ref performance",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of prop drilling in React?",
      options: [
        "To share props across unrelated components",
        "To pass props through multiple levels of a component tree",
        "To validate props in child components",
        "To optimize prop performance",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the Context API in React?",
      options: [
        "To create global state for the application",
        "To simplify routing",
        "To handle server-side rendering",
        "To validate props",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of the useDeferredValue hook?",
      options: [
        "To defer rendering until a condition is met",
        "To defer value updates until they are less urgent",
        "To handle asynchronous data fetching",
        "To manage time-based updates",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is React.lazy used for?",
      options: [
        "To create lazy-loading components",
        "To optimize component state management",
        "To load static assets",
        "To handle errors during rendering",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of Error Boundaries in React?",
      options: [
        "To prevent JavaScript errors in a component tree",
        "To create fallbacks for network errors",
        "To handle async rendering issues",
        "To manage state transitions",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is React.Suspense used for?",
      options: [
        "To manage suspense in animations",
        "To handle loading states for lazy-loaded components",
        "To defer rendering for performance optimization",
        "To manage fallback content",
      ],
      correctAnswer: 1,
      points: 300,
    },
  ],
};