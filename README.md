# SVG-Logo-Gen

In this project I created a SVG logo generator 

File explanation: First I have 5 js files, triangle.js,square.js, and circle.js all are the same except the code inputs for the SVG logo to become that shape. Then component is a practice file I made with my tutor that has notes. Lastly for the js files is generator.js that links everything together. Then i have my test files for each shape. After that is my npm init folder 'package-lock.json' and my inquirer and jest test 'package.json folder.

Running Explanation: To start you do a node generator.js, amswer the questions for how you want your logo then it gets created and sent to the output folder, where youll see your changes. In that folder press ALT b to see it in a new window.

Generator Explanation: First use require to grab all the files, then ask all the questions using inquirer. Next set up an if statement for the 3 shape options, to easily input into the new made SVG logo file. lastly call the function.

Tests Explanation: I set up tests to make sure every shape and input works as intended, these inputs in the test files need to be 100% precise or they wont work. But when you npm test you get a nice indicator of whats wrong.


1. [My repo Link](https://github.com/bmallar/SVG-Logo-Gen)
2. [My video Link](https://drive.google.com/file/d/1-UPC9yKsnIiLxzx-S__dyvfBCIKZxjKV/view)
