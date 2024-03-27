const Triangle = require('../lib/triangle.js')

describe('Triangle',() => {
    test('If correct triangle tag is returned', () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        const shape = new Triangle("red").render()
        expect(shape).toEqual(expectedSvg)
}
)
    
})