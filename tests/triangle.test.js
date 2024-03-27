const Triangle = require('../lib/triangle.js')

describe('Triangle',() => {
    test('If correct triangle tag is returned', () => {
        const expectedSvg = `<triangle cx="150" cy="100" r="80" fill="red" />`
        const shape = new Triangle("red").render()
        expect(shape).toEqual(expectedSvg)
}
)
    
})