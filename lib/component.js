// class Component {
//     constructor(children = [1, "Cool", true, 4.2]) {

//     }
//     rendor() {
//         throw new Error('error')
//     }
// rendorInnerHtml() {
//     return this.children
//     .map((child) => {
//       if (typeof child === 'string') {
//         return child; ["Cool"]
//       }
//       return child.render();
//     })
//     .join('');
// }
// }

// module.exports = Component;

// let array = [
//     {
//         id: 1,
//         name: "Ben",
//         email: "b@b.com"
//     },
//     {
//         id: 2,
//         name: "Robby",
//         email: "R@r.com"
//     },
// ]

// array.filter(person => person.email === "R@r.com") ["R@r.com"]

// class Circle{
//     constructor(){
//         this.color = ""
//     }

//     setColor(chosenColor){
//         this.color = chosenColor
//     }

//     render(){
//         return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
//     }
// }

// new Circle().setColor("blue").render()


 // component.test.js file: // const Component = require('../lib/component.js');

// describe('Component', () => {
//   test('should throw error if render() is called', () => {
//     const component = new Component();
//     expect(() => component.render()).toThrowError('error');
//   });

//   test('should render inner HTML correctly', () => {
//     const children = [1, "Cool", true, 4.2];
//     const component = new Component(children);

//     const expectedInnerHTML = "1Cooltrue4.2";
//     expect(component.renderInnerHTML()).toEqual(expectedInnerHTML);
//   });
// });