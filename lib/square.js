class Square {
    constructor(color) {
        this.color = color
    }

    render() {
        return `<square cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
module.exports = Square;

new Square("yellow")