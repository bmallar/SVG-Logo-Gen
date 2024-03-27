class Triangle{
    constructor(color){
        this.color = color
    }

    render(){
        return `<triangle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
module.exports = Triangle;

new Triangle("red")