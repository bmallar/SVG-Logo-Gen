const Circle = require('./circle')
const Triangle = require('./triangle')
const Square = require('./square')
const inquirer =  require("inquirer")
const fs = require("fs")

function init(){
    inquirer.prompt([
        {
            type: "list",
            name: "newShape",
            message:"What shape would you like for your logo?",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "input",
            name: "shapeColor",
            message:"What color would you like your shape to be?",
          
        },
        // et al questions here
    ]).then(answers => {
        let shape;

        if(answers.newShape === "circle"){
            shape = new Circle(answers.shapeColor)
        }
        // else ifs



        const logoTag = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       ${shape.render()}

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">SVG</text>

     </svg>`

     fs.writeFileSync("./output/logo.svg", logoTag)
    })
}