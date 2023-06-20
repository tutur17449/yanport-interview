type Instruction = 'A' | 'D' | 'G';

export class Aspirator {
    constructor() {
        console.log('Aspirator constructor');
    }

    public turnLeft() {}

    public turnRight() {}

    public moveForward() {}

    public runInstructions(instructions: Instruction[]) {}

    public getPosition() {}
}
