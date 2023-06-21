type Instruction = 'A' | 'D' | 'G';
type Orientation = 'N' | 'E' | 'S' | 'W';

type Position = {
    x: number;
    y: number;
};

export class Aspirator {
    private orientation: Orientation;
    private position: Position;

    constructor(_orientation: Orientation, _position: Position) {
        this.orientation = _orientation;
        this.position = _position;
    }

    public getPositionAndOrientation() {
        return `X${this.position.x} Y${this.position.y} ${this.orientation}`;
    }

    public turnLeft() {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'W';
                break;
            case 'E':
                this.orientation = 'N';
                break;
            case 'S':
                this.orientation = 'E';
                break;
            case 'W':
                this.orientation = 'S';
                break;
        }
    }

    public turnRight() {
        switch (this.orientation) {
            case 'N':
                this.orientation = 'E';
                break;
            case 'E':
                this.orientation = 'S';
                break;
            case 'S':
                this.orientation = 'W';
                break;
            case 'W':
                this.orientation = 'N';
                break;
        }
    }

    public moveForward() {
        switch (this.orientation) {
            case 'N':
                this.position.y += 1;
                break;
            case 'E':
                this.position.x += 1;
                break;
            case 'S':
                this.position.y -= 1;
                break;
            case 'W':
                this.position.x -= 1;
                break;
        }
    }

    public runInstructions(instructions: Instruction[]) {
        instructions.forEach((instruction) => {
            switch (instruction) {
                case 'A':
                    this.moveForward();
                    break;
                case 'D':
                    this.turnRight();
                    break;
                case 'G':
                    this.turnLeft();
                    break;
            }
        });

        return this.getPositionAndOrientation();
    }
}
