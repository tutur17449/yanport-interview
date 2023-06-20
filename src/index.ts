import { Aspirator } from './aspirator';

const aspirator = new Aspirator();

aspirator.runInstructions(['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A']);

console.log(aspirator.getPosition());
