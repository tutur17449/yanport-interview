import { Aspirator } from './aspirator';

const aspirator = new Aspirator('N', { x: 5, y: 5 });
console.log(
    'Aspirator ending informations:',
    aspirator.runInstructions(['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A']),
);
