const Square = require('../lib/square.js')

describe('Square',() => {
    test('If correct square tag is returned', () => {
        const expectedSvg = `<square cx="150" cy="100" r="80" fill="yellow" />`
        const shape = new Square("yellow").render()
        expect(shape).toEqual(expectedSvg)
}
)
    
})