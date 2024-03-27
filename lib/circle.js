class Circle{
    constructor(color){
        this.color = color
    }

    // setColor(chosenColor){
    //     this.color = chosenColor
    // }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
module.exports = Circle;

new Circle("blue")