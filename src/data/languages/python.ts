import { QuestionSet } from "../types";

export const pythonQuestions: QuestionSet = {
  easy: [
    {
      question: "What keyword is used to declare a variable in Python?",
      options: ["var", "let", "const", "No keyword"],
      correctAnswer: 3,
      points: 100,
    },
    {
      question: "Which symbol is used for single-line comments in Python?",
      options: ["//", "#", "/*", "--"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct way to write a 'for' loop in Python?",
      options: [
        "for i in range(5):",
        "for i = 0; i < 5; i++",
        "for i = 0 to 5:",
        "foreach i in range(5):",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which method is used to print something to the console?",
      options: ["print()", "echo()", "write()", "display()"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "How do you create a function in Python?",
      options: [
        "function myFunction()",
        "def myFunction():",
        "create myFunction()",
        "new function myFunction()",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct way to declare a list in Python?",
      options: [
        "let arr = [1, 2, 3]",
        "arr = (1, 2, 3)",
        "arr = [1, 2, 3]",
        "arr = {1, 2, 3}",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "Which operator is used for equality in Python?",
      options: ["==", "=", "eq", "==="],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "How do you add a comment in Python?",
      options: [
        "# This is a comment",
        "// This is a comment",
        "<!-- This is a comment -->",
        "' This is a comment",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question:
        "What is the default type for a number without a decimal point?",
      options: ["int", "float", "double", "decimal"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question:
        "Which method is used to convert a string to an integer in Python?",
      options: ["toInt()", "parseInt()", "int()", "convert()"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What is the correct way to write a list of strings?",
      options: [
        "fruits = ('apple', 'banana', 'cherry')",
        "fruits = ['apple', 'banana', 'cherry']",
        "fruits = {apple, banana, cherry}",
        "fruits = 'apple', 'banana', 'cherry'",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which keyword is used to exit a loop?",
      options: ["stop", "break", "exit", "return"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct syntax for an 'else if' statement?",
      options: [
        "else if (condition):",
        "elseif (condition):",
        "elif condition:",
        "otherwise (condition):",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "How do you declare a constant in Python?",
      options: ["constant x = 5", "const x = 5", "x = 5", "let x = 5"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question:
        "Which method is used to add an element to the end of a list in Python?",
      options: ["push()", "add()", "append()", "insert()"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What is the result of 5 + '5' in Python?",
      options: ["10", "55", "Error", "5 + 5"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "How do you create a dictionary in Python?",
      options: ["dict = {}", "dict = []", "dict = ()", "dict = <>"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which method removes the last element from a list in Python?",
      options: ["delete()", "pop()", "remove()", "cut()"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct way to write a while loop?",
      options: [
        "while i < 5:",
        "while (i < 5)",
        "loop i = 0 to 5",
        "while i < 5 do",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which method converts a JSON string to a Python object?",
      options: [
        "convertToObject()",
        "json.loads()",
        "fromJSON()",
        "JSON.convert()",
      ],
      correctAnswer: 1,
      points: 100,
    },
  ],
  medium: [
    {
      question: "What is a closure in Python?",
      options: [
        "A way to close a function",
        "A function that has access to its outer function's scope",
        "A method to end a loop",
        "A type of variable declaration",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a lambda function in Python?",
      options: [
        "A function with a name",
        "A function that is defined using 'lambda' keyword",
        "A function that accepts multiple parameters",
        "A function that returns multiple values",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a generator in Python?",
      options: [
        "A function that returns an iterable object",
        "A method to generate random numbers",
        "A way to create new classes",
        "A function that calls other functions",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question:
        "What is the purpose of the 'self' parameter in Python methods?",
      options: [
        "It refers to the current instance of the class",
        "It refers to the parent class",
        "It is used to define a global variable",
        "It represents the module that contains the class",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What does the 'with' statement do in Python?",
      options: [
        "It opens a file in read mode",
        "It handles exceptions in Python",
        "It ensures that resources are cleaned up after use",
        "It executes code in a new thread",
      ],
      correctAnswer: 2,
      points: 200,
    },
    {
      question: "What does 'yield' do in Python?",
      options: [
        "Returns a value from a function",
        "Pauses the execution of a function and allows resumption",
        "Stops the function execution",
        "Creates an exception",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the 'map()' function in Python?",
      options: [
        "Applies a function to every item of an iterable",
        "Combines multiple iterables",
        "Sorts an iterable",
        "Filters an iterable based on a condition",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What is the difference between 'deepcopy()' and 'copy()'?",
      options: [
        "There is no difference",
        "deepcopy() creates a new object and copies all objects inside, while copy() copies only the top-level object",
        "copy() creates a new object and copies all objects inside, while deepcopy() copies only the top-level object",
        "deepcopy() is used for lists, copy() is used for dictionaries",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the 'super()' function in Python?",
      options: [
        "It calls a method from the superclass",
        "It initializes a class",
        "It stops the function execution",
        "It handles errors",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What is a decorator in Python?",
      options: [
        "A way to modify a function or class behavior",
        "A class that adds functionality to other classes",
        "A method for handling exceptions",
        "A function that generates random values",
      ],
      correctAnswer: 0,
      points: 200,
    },
  ],
  hard: [
    {
      question:
        "What is the purpose of the 'multiprocessing' module in Python?",
      options: [
        "It provides a way to create multiple threads in Python",
        "It provides a way to handle multiple processes simultaneously",
        "It allows creating multiple virtual environments",
        "It handles database connections",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question:
        "What is the output of the following Python code?\n`x = {1, 2, 3}\n x.add([4, 5])`",
      options: [
        "The set is {1, 2, 3, [4, 5]}",
        "Error: cannot add list to set",
        "The set is {1, 2, 3}",
        "The set is {1, 2, 3, 4, 5}",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question:
        "Which of the following is not true about Python's garbage collection?",
      options: [
        "It automatically deletes unused objects",
        "It uses reference counting to track object usage",
        "It uses a garbage collector to free memory",
        "It can manually delete objects using the 'del' keyword",
      ],
      correctAnswer: 3,
      points: 300,
    },
    {
      question: "What is the '__init__' method in Python?",
      options: [
        "It is a constructor method to initialize an object",
        "It is used to finalize the object before it is destroyed",
        "It is used to execute class methods",
        "It is a method to check the type of the object",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is a Python coroutine?",
      options: [
        "A generator function that yields values sequentially",
        "A function that runs asynchronously and can be paused and resumed",
        "A class that handles asynchronous operations",
        "A function that blocks the thread until completion",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the 'threading' module in Python?",
      options: [
        "It provides a way to handle asynchronous I/O operations",
        "It allows managing multiple threads of execution in Python",
        "It provides utilities for database operations",
        "It is used to perform mathematical computations in parallel",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the 'property' decorator in Python?",
      options: [
        "It allows defining a function as a class method",
        "It defines a method to get or set an attribute value",
        "It defines a method to delete an attribute",
        "It converts a function into a static method",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is a Python descriptor?",
      options: [
        "A way to manage attributes in classes using methods like __get__, __set__, and __delete__",
        "A method to validate inputs to a class",
        "A built-in function for string manipulations",
        "A way to manage multithreading in Python",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the 'async' keyword used for in Python?",
      options: [
        "It is used to define an asynchronous function",
        "It is used to define a thread",
        "It is used to define a method that raises exceptions",
        "It is used to define a static method",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which of the following is a method to improve Python's performance for large datasets?",
      options: [
        "Using 'set' for large collections instead of 'list'",
        "Using 'tuple' for large datasets instead of 'list'",
        "Using the 'array' module instead of 'list'",
        "Using the 'numpy' library for efficient numerical operations",
      ],
      correctAnswer: 3,
      points: 300,
    },
    {
      question: "What is the purpose of the 'abc' module in Python?",
      options: [
        "It is used to define abstract base classes",
        "It provides functions for cryptographic operations",
        "It handles string encoding and decoding",
        "It defines a way to manage memory allocation",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "How does Python's 'memoryview' object work?",
      options: [
        "It provides a view of an array's buffer without copying the data",
        "It allows working with large data directly from disk",
        "It allows sharing memory across multiple processes",
        "It is used to convert a string into a list of bytes",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "What does the 'with' statement do in Python when working with files?",
      options: [
        "It automatically opens a file in write mode",
        "It opens a file, ensures it is properly closed after use, and handles exceptions",
        "It opens a file and keeps it open indefinitely",
        "It allows multiple files to be opened simultaneously",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question:
        "What is the result of the following code?\n`a = [1, 2, 3]\nb = a\nb[0] = 99\nprint(a)`",
      options: ["[99, 2, 3]", "[1, 2, 3]", "[99, 99, 3]", "Error"],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of the 'functools' module in Python?",
      options: [
        "It provides higher-order functions for functional programming",
        "It is used to optimize Python's memory usage",
        "It provides tools for multithreading and multiprocessing",
        "It is used for string manipulations and regular expressions",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What does the 'itertools' module provide in Python?",
      options: [
        "Tools for working with loops and generators",
        "Functional programming utilities",
        "Efficient ways to manipulate strings",
        "Utilities for working with iterators and combinatorics",
      ],
      correctAnswer: 3,
      points: 300,
    },
    {
      question:
        "What is the difference between 'deepcopy()' and 'copy()' in Python?",
      options: [
        "'copy()' creates a shallow copy of the object, while 'deepcopy()' creates a recursive copy of all nested objects",
        "'copy()' creates a recursive copy, while 'deepcopy()' only copies the top-level object",
        "'deepcopy()' is used for mutable objects, while 'copy()' is for immutable objects",
        "Both methods create shallow copies of the object",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of the 'os' module in Python?",
      options: [
        "It provides a way to interact with the operating system, like file manipulation and environment variables",
        "It provides a way to manage memory usage",
        "It provides utilities for data analysis",
        "It is used for network operations",
      ],
      correctAnswer: 0,
      points: 300,
    },
  ],
};
