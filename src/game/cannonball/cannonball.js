import canonball_image from "../../../assets/gfx/PNG/default_size/Ship_parts/cannonBall.png";
import Collider from "../../core/components/collider";
import Drawable from "../../core/components/drawable";
import GameObject from "../../core/gameObject";
import Vector from "../../core/models/vector";
import CannonballMovement from "./cannonballMovement";

class Cannonball extends GameObject {
    constructor(props) {
        const { direction, owner } = props;

        let size = new Vector(10,10);
        
        super({...props, size});

        this.lifetime = 80;
        this.damage = 10;

        this.addComponent(new CannonballMovement({direction}));
        this.addComponent(new Drawable({image: canonball_image}));

        let cb_collider = new Collider();
        cb_collider.isStatic = false;
        cb_collider.owner = owner;
        this.addComponent(cb_collider);
    }
}

export default Cannonball;