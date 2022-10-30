import Behaviour from "../../core/components/behaviour";
import ShipDrawable from '../ships/shipDrawable';

class CannonballMovement extends Behaviour {
    constructor(props) {
        const {direction} = props;
        super();

        this.direction = direction;
        this.velocity = 7;
    }

    start() {

    }

    update() {
        this.gameObject.transform.move(this.direction.mul(this.velocity));
        this.handleLifetime();
    }

    handleLifetime() {
        this.gameObject.lifetime--;
        if (this.gameObject.lifetime <= 0) {
            this.gameObject.destroy();
        }
    }

    onCollision(other) {
        if (other.gameObject.life) {
            other.gameObject.life -= this.gameObject.damage;
            other.gameObject.getComponent(ShipDrawable).onVisualChange();
        }

        this.gameObject.destroy();
    }
}

export default CannonballMovement;