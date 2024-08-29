Make-Your-Own-README
Table of Contents:

Project Description Instructions Usage Information Contributing Testing License License Explanation Questions
Project Description:

This is a command line application. We are using node.JS to run our JavaScript file in the terminal as opposed to in the browser. We are asking a series of questions in the terminal and then storing the answers. We are doing this by using the inquirer that we downloaded, and using its prompt function. We use a .then function to take the answers from the prompts, and then put them into a generateHTML function. We take this generated HTML code and set it equal to a const. We then use the writeFile method that we installed with “fs” to create a new page called “index.html”, and we print the html code on this new page, also using the writeFile method. There is also a css file that has been created, that will style what is printed on the HTML page, and help it look more professional.

User Instructions:

In order to use this application, you need package.json, and package-lock.json. You need to be able to use inquirer, as well as fs, in order to use the prompts, the .then function, and the writeFile function.

Usage Information:

In order to use this application, you need to open the code from GitHub in VS code and then open up the index.js file in the integrated terminal. You will then run node index to run the javascript file. You will then be prompted with a series of questions that will ask you for the information that you need to build a read me file. When you answer these questions, your responses will be formatted and printed out on a newly generated HTML page.

How to Contribute:

In order to contribute to this page, you need to have permission from the repository owner. It is publicly viewable, but changes have to be from users that have been granted permission to make edits on the page.

Testing the application:

In order to test this application, download node.js if you have not already. Use NMP (node package manager), to install everything that you will need to complete the project.(inquirer, fs, etc.) Use the integrated terminal to run the index.js file, using the node index command. Answer all of the questions that you are prompted. Upon answering and submitting your answer to the final question, an HTML page named “index.html” will be automatically generated. Open this file in the live server, and your README page will be ready!

Sources: Throughout making this project, I did not receive help from any tutors, or professors during office hours. However, I did borrow some starter code for generating the new html page. This code can be found on the index.js file. The nav element was all original code, as well as the prompts. There is little code other than the boilerplate code, that was directly copied, but I used the mini project of our module 9 as inspiration for the format. For example, the writeFile function does contain the same error check that we used in the project. Additionally, the format for the prompts is the same as some examples from class, although the questions are different. Additionally, bootstrap is used to format and indent the paragraphs. 

Here is a link to a video where I am explaining how the project works: https://app.screencastify.com/v2/manage/videos/ThN0IgUjfEbKX5yLuANh

License:

MIT License

License Explanation:

Copyright (c) 2024 iancorbettPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THESOFTWARE.

Questions:

My GitHub username is iancorbett. Here is a link to my Github: github.com/iancorbett
E-mail: iancorbett1324@gmail.com
