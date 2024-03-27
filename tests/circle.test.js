const Circle = require('../lib/circle.js')

describe('Circle',() => {
    test('If correct circle tag is returned', () => {
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const shape = new Circle("blue").render()
        expect(shape).toEqual(expectedSvg)
}
)
    
})