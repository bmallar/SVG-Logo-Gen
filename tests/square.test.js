const Square = require('../lib/square.js')

describe('Square',() => {
    test('If correct square tag is returned', () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="yellow" />`
        const shape = new Square("yellow").render()
        expect(shape).toEqual(expectedSvg)
}
)
    
})