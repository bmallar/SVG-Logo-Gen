class Square {
    constructor(color) {
        this.color = color
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}
module.exports = Square;

new Square("yellow")