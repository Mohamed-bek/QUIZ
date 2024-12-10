import { QuestionSet } from "../types";

export const htmlQuestions: QuestionSet = {
  easy: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which tag is used for creating a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which HTML tag is used for creating a line break?",
      options: ["<break>", "<br>", "<lb>", "<newline>"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<lb>", "<break>", "<br>", "<newline>"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["styles", "style", "css", "class"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does the <title> tag define?",
      options: [
        "The page heading",
        "The document title shown on the browser tab",
        "The website logo",
        "The main section",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which HTML element is used to define the largest heading?",
      options: ["<h6>", "<header>", "<h1>", "<head>"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "Which tag is used to create a numbered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What does the <p> tag define?",
      options: ["Page content", "A paragraph", "A popup", "A picture"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which HTML attribute is used to define a tooltip?",
      options: ["title", "alt", "tooltip", "info"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        "<body style='background-color:yellow;'>",
        "<body bg='yellow'>",
        "<background>yellow</background>",
        "<bgcolor='yellow'>",
      ],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "What does the <hr> tag define?",
      options: [
        "A break between sections",
        "A highlighted text",
        "A horizontal ruler",
        "A header line",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "Which element is used to display preformatted text?",
      options: ["<code>", "<pre>", "<format>", "<text>"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which tag is used to create a checkbox?",
      options: [
        "<checkbox>",
        "<input type='check'>",
        "<input type='checkbox'>",
        "<check>",
      ],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What is the correct HTML for making a text italic?",
      options: ["<italic>", "<i>", "<it>", "<italics>"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which HTML tag is used to create a table row?",
      options: ["<row>", "<tr>", "<td>", "<table>"],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "What does the <b> tag define?",
      options: ["Bold text", "Button", "Block element", "Base element"],
      correctAnswer: 0,
      points: 100,
    },
    {
      question: "Which HTML element is used to display a checkbox?",
      options: ["<box>", "<checkbox>", "<input type='checkbox'>", "<tick>"],
      correctAnswer: 2,
      points: 100,
    },
    {
      question: "What does the <head> element contain?",
      options: [
        "Main content of the document",
        "Metadata and links to styles/scripts",
        "Footer information",
        "Hidden comments",
      ],
      correctAnswer: 1,
      points: 100,
    },
    {
      question: "Which tag is used for creating a dropdown list?",
      options: ["<dropdown>", "<select>", "<option>", "<list>"],
      correctAnswer: 1,
      points: 100,
    },
  ],
  medium: [
    {
      question: "Which HTML element is used for semantic navigation?",
      options: ["<nav>", "<navigation>", "<navbar>", "<menu>"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What is the purpose of the <canvas> element?",
      options: [
        "To display images",
        "To create dynamic graphics",
        "To style content",
        "To embed video",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the HTML doctype declaration?",
      options: [
        "To mark the document as HTML5",
        "To tell the browser which version of HTML to use",
        "To start the HTML document",
        "To link to external resources",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "Which HTML element defines the title of a work?",
      options: ["<caption>", "<cite>", "<title>", "<work>"],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the HTML meta viewport tag?",
      options: [
        "To set the page background",
        "To control layout on mobile browsers",
        "To define metadata",
        "To create responsive images",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question:
        "Which HTML attribute specifies that an input field must be filled out?",
      options: ["required", "validate", "mandatory", "pattern"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "Which element is used to group options in a dropdown list?",
      options: ["<optgroup>", "<option>", "<select>", "<group>"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "Which attribute can be used to open a hyperlink in a new tab?",
      options: [
        "target='_self'",
        "target='_blank'",
        "target='_new'",
        "target='_tab'",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "Which HTML element is used for marking up quotations?",
      options: ["<blockquote>", "<quote>", "<q>", "<citation>"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question:
        "Which attribute is used to specify an image description for screen readers?",
      options: ["title", "alt", "aria-label", "description"],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What does the <time> element represent?",
      options: [
        "Machine-readable time/date",
        "Elapsed time for an event",
        "Time zone information",
        "Duration of an animation",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question:
        "Which element is used to embed an external document in an HTML file?",
      options: ["<embed>", "<iframe>", "<object>", "<include>"],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "Which tag is used to create a definition list?",
      options: ["<dl>", "<ul>", "<ol>", "<list>"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What does the 'defer' attribute in a script tag do?",
      options: [
        "Defers script execution until the document is fully parsed",
        "Defers script execution until the page is loaded",
        "Runs the script with lower priority",
        "Executes the script immediately",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What is the purpose of the <details> element?",
      options: [
        "To create a dropdown list",
        "To create an expandable/collapsible section",
        "To add metadata",
        "To create a summary",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What does the <legend> element define?",
      options: [
        "A title for a table",
        "A caption for a form fieldset",
        "A label for a form input",
        "A header for a section",
      ],
      correctAnswer: 1,
      points: 200,
    },
    {
      question: "What is the purpose of the <mark> element?",
      options: [
        "To highlight text",
        "To underline text",
        "To add a bookmark",
        "To bold text",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question:
        "Which attribute specifies the maximum value for an input field?",
      options: ["max", "maxlength", "limit", "maxvalue"],
      correctAnswer: 0,
      points: 200,
    },
    {
      question: "What is the correct way to embed a video in HTML?",
      options: [
        "<video src='video.mp4'></video>",
        "<media src='video.mp4'></media>",
        "<embed src='video.mp4'></embed>",
        "<movie src='video.mp4'></movie>",
      ],
      correctAnswer: 0,
      points: 200,
    },
    {
      question:
        "Which attribute is used to specify the relationship between a linked document and the current document?",
      options: ["rel", "type", "href", "relationship"],
      correctAnswer: 0,
      points: 200,
    },
  ],
  hard: [
    {
      question: "What is the correct way to specify ARIA roles?",
      options: [
        'role="main"',
        'aria-role="main"',
        'data-role="main"',
        'a11y-role="main"',
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which HTML element is used to specify a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<end>"],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the srcset attribute in the <img> tag?",
      options: [
        "To provide multiple image sources",
        "To specify responsive images for different screen sizes",
        "To set image dimensions",
        "To define image alignment",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the <picture> element in HTML?",
      options: [
        "To display images",
        "To provide multiple sources for responsive images",
        "To create image galleries",
        "To add image captions",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question:
        "Which HTML attribute is used to provide fallback content for browsers that don't support the <picture> element?",
      options: ["<fallback>", "<source>", "<img>", "<default>"],
      correctAnswer: 2,
      points: 300,
    },
    {
      question:
        "Which attribute in the <iframe> tag prevents the embedded content from accessing the parent page's DOM?",
      options: ["sandbox", "secure", "crossorigin", "isolation"],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What does the <output> element represent in HTML?",
      options: [
        "Formatted output for calculations or user actions",
        "Output logs for debugging",
        "A container for script results",
        "A placeholder for server responses",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which attribute is used to enable the browser to display fallback text for audio files?",
      options: ["alt", "text", "fallback", "controls"],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the purpose of the <template> element in HTML?",
      options: [
        "To create reusable HTML snippets",
        "To define a fallback for unsupported features",
        "To store inactive HTML content for future use",
        "To declare CSS templates",
      ],
      correctAnswer: 2,
      points: 300,
    },
    {
      question: "What is the primary purpose of the <dialog> element in HTML5?",
      options: [
        "To create modal or pop-up boxes",
        "To manage chat systems",
        "To style form elements",
        "To display alerts",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which attribute in the <script> tag tells the browser to run the script only if it's necessary for the current viewport?",
      options: ["async", "defer", "type", "module"],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the role of the <wbr> element in HTML?",
      options: [
        "To create a line break",
        "To suggest a line break opportunity",
        "To format words",
        "To manage white space",
      ],
      correctAnswer: 1,
      points: 300,
    },
    {
      question: "What is the <fieldset> element used for?",
      options: [
        "To group related form elements",
        "To create a border around a form",
        "To define the layout of a form",
        "To create interactive forms",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which attribute in the <meta> tag specifies the character encoding for the document?",
      options: ["charset", "content", "http-equiv", "encoding"],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "Which element is used to provide a machine-readable address?",
      options: ["<address>", "<geo>", "<data>", "<location>"],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "What is the purpose of the crossorigin attribute in media elements?",
      options: [
        "To handle CORS requests",
        "To prevent cross-origin resource sharing",
        "To enable secure downloads",
        "To control access to files",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question:
        "Which attribute is used to indicate the minimum number of characters for an input field?",
      options: ["min", "minlength", "required", "limit"],
      correctAnswer: 1,
      points: 300,
    },
    {
      question:
        "Which element is used to describe an abbreviation or acronym in HTML?",
      options: ["<abbr>", "<acronym>", "<description>", "<title>"],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "What is the <noscript> element used for?",
      options: [
        "To display fallback content when JavaScript is disabled",
        "To hide content from users",
        "To disable JavaScript functionality",
        "To validate scripts",
      ],
      correctAnswer: 0,
      points: 300,
    },
    {
      question: "Which element represents a scalar measurement in HTML?",
      options: ["<data>", "<meter>", "<progress>", "<output>"],
      correctAnswer: 1,
      points: 300,
    },
  ],
};
