describe('tests', () => {
    
    it('should sum two numbers', () => {
        const sum = (a, b) => {
            return a + b
        }

        expect(sum(1,2)).toEqual(3)
    });

});