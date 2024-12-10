import { QuestionSet } from "../types";

export const javaQuestions: QuestionSet = {
  easy: [
    {
      question: "What is the main method signature in Java?",
      options: [
        "public void main(String args)",
        "public static void main(String[] args)",
        "public int main(String[] args)",
        "static void main(String args[])",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which keyword is used to declare a constant in Java?",
      options: ["final", "static", "const", "constant"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "How do you create a single-line comment in Java?",
      options: ["//", "/* */", "#", "--"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What is the correct way to declare an integer variable?",
      options: ["integer x = 5", "int x = 5", "x = 5", "num x = 5"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which data type is used for whole numbers?",
      options: ["float", "double", "int", "long"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "How do you print to the console in Java?",
      options: ["console.log()", "System.out.println()", "print()", "echo()"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What keyword is used to create a new object?",
      options: ["object", "create", "new", "make"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "Which of these is a valid way to declare an array?",
      options: [
        "int[] arr = {1,2,3}",
        "int arr[] = new int(3)",
        "arr[] int = {1,2,3}",
        "int arr = [1,2,3]",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What is the correct way to compare two strings?",
      options: [
        "str1 == str2",
        "str1.equals(str2)",
        "str1 === str2",
        "compare(str1, str2)",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which keyword is used to inherit from a class?",
      options: ["extend", "inherits", "extends", "super"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What does the 'break' keyword do in a loop?",
      options: [
        "Stops the program",
        "Exits the loop",
        "Continues to next iteration",
        "Resets the loop",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you write an 'if' statement in Java?",
      options: [
        "if x = 5 {}",
        "if [x == 5] {}",
        "if (x == 5) {}",
        "if x == 5 then {}",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question:
        "Which access modifier makes a member visible only within its own class?",
      options: ["public", "protected", "private", "default"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What is the default value for an int variable?",
      options: ["null", "0", "undefined", "1"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "How do you convert a string to an integer?",
      options: [
        "Integer.toInt(str)",
        "Integer.parse(str)",
        "Integer.valueOf(str)",
        "int.convert(str)",
      ],
      correctAnswer: 2,
      points: 100,
    },
  ],
  medium: [
    {
      question: "What is method overloading in Java?",
      options: [
        "Creating multiple methods with different names",
        "Creating multiple methods with the same name but different parameters",
        "Inheriting methods from a parent class",
        "Calling a method multiple times",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is an abstract class in Java?",
      options: [
        "A class that cannot be instantiated",
        "A class with only abstract methods",
        "A class that can only be inherited",
        "A class with no methods",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What does the 'synchronized' keyword do?",
      options: [
        "Ensures methods run in a specific order",
        "Prevents multiple threads from accessing the same method simultaneously",
        "Synchronizes data between classes",
        "Speeds up method execution",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a lambda expression in Java?",
      options: [
        "A way to create anonymous classes",
        "A short way to represent an anonymous function",
        "A method to create loops",
        "A type of variable declaration",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the difference between '==' and '.equals()'?",
      options: [
        "They are exactly the same",
        "'==' compares references, '.equals()' compares content",
        "'.equals()' only works with strings",
        "'==' is for primitives, '.equals()' is for objects",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is a try-with-resources statement?",
      options: [
        "A way to handle multiple exceptions",
        "An automatic resource management feature",
        "A method to create try blocks",
        "A way to optimize resource usage",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the 'volatile' keyword?",
      options: [
        "To make a variable change frequently",
        "To ensure a variable's visibility across threads",
        "To create temporary variables",
        "To prevent variable modification",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What are generics in Java?",
      options: [
        "A way to create generic classes",
        "A type-safe way to write reusable code with different types",
        "A method to create universal methods",
        "A way to handle multiple data types",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the 'static' keyword?",
      options: [
        "To create constant variables",
        "To belong to the class rather than an instance",
        "To prevent method overriding",
        "To create immutable classes",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is method chaining?",
      options: [
        "Calling multiple methods in a single line",
        "Creating methods that return the object itself",
        "Inheriting methods from multiple classes",
        "Creating complex method implementations",
      ],
      correctAnswer: 1,
      points: 200,
    },
  ],
  hard: [
    {
      question: "What is reflection in Java?",
      options: [
        "A way to examine or modify runtime behavior",
        "A method to create mirrors in code",
        "A technique for code optimization",
        "A way to create runtime configurations",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the purpose of the 'java.util.concurrent' package?",
      options: [
        "To create concurrent designs",
        "To provide high-performance concurrency utilities",
        "To manage thread pools",
        "To create distributed systems",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is a memory leak in Java?",
      options: [
        "When memory is not properly released",
        "A bug that causes memory consumption",
        "A method to manage memory usage",
        "A way to optimize memory allocation",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the Java Memory Model?",
      options: [
        "A way to visualize memory usage",
        "Specification of how threads interact with memory",
        "A method to optimize memory allocation",
        "A technique for memory management",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the 'java.nio' package?",
      options: [
        "To create network interfaces",
        "To provide non-blocking I/O operations",
        "To manage input/output streams",
        "To create network protocols",
      ],
      correctAnswer: 1,
      points: 300,
    },
  ],
};
