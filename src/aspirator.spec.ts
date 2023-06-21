import { Aspirator } from './aspirator';

describe('Aspirator Class', () => {
    it('return correct position after running instructions', () => {
        const aspirator = new Aspirator('N', { x: 5, y: 5 });
        expect(
            aspirator.runInstructions(['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A']),
        ).toEqual('X5 Y6 N');
    });
});
