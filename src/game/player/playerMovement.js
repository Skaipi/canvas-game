import Behaviour from '../../core/components/behaviour';
import Input from '../../core/input';
import Vector from '../../core/models/vector';
import { deepCopy } from '../../core/utils';

class PlayerMovement extends Behaviour {
    constructor(...props) {
        super(...props);
        this.maxVelocity = 4;
        this.maxRotationSpeed = 1.3;
        this.velocity = 0;
        this.rotation = 0;

        this.prevPosition;
        this.prevRotation;
    }

    start() {
    }

    update() {
        this.prevPosition = deepCopy(this.gameObject.transform.position);
        this.prevRotation = deepCopy(this.gameObject.transform.rotation);

        this.handleVelocityInputs();
        this.handleRotationInputs();
        
        this.gameObject.transform.move(new Vector(0,this.velocity));
        this.gameObject.transform.rotation += this.rotation;
    }

    rollbackMove() {
        this.gameObject.transform.position = this.prevPosition;
        this.gameObject.transform.rotation = this.prevRotation;
    }

    handleVelocityInputs() {
        let velocityStep = 0.1;

        if (Input.getKey("w")) {
            this.velocity -= velocityStep;
        } else if (Input.getKey("s")) {
            this.velocity += velocityStep;
        } else {
            this.velocity = 0;
        }

        if (this.velocity > this.maxVelocity) {
            this.velocity = this.maxVelocity;
        }
        if (this.velocity < -this.maxVelocity) {
            this.velocity = -this.maxVelocity;
        }
    }

    handleRotationInputs() {
        let rotationStep = 0.1;

        if (Input.getKey("a")) {
            this.rotation += rotationStep;
        } else if (Input.getKey("d")) {
            this.rotation -= rotationStep;
        } else {
            this.rotation = 0;
        }

        if (this.rotation > this.maxRotationSpeed) {
            this.rotation = this.maxRotationSpeed;
        }
        if (this.rotation < -this.maxRotationSpeed) {
            this.rotation = -this.maxRotationSpeed;
        }
    }

    onCollision() {
        this.rollbackMove();
    }
}

export default PlayerMovement;
