import Component from './component';
import Vector from '../models/vector';

interface TransformProps {
    position: Vector | null;
    size: Vector | null;
    scale: Vector | null;
    rotation: number | null;
}

class Transform extends Component {
    position: Vector;
    size: Vector;
    scale: Vector;
    rotation: number;

    constructor(props: TransformProps) {
        const {position, size, scale, rotation} = props;
        super();

        this.position = position || new Vector(0,0);
        this.size = size || new Vector(0,0);
        this.scale = scale || new Vector(1,1);
        this.rotation = rotation || 0;
    }

    get radRotation() {
        return this.rotation * Math.PI / 180;
    }

    get origin() {
        return new Vector(
            this.position.x + this.size.x / 2,
            this.position.y + this.size.y / 2    
        );
    }

    get upperLeft() {
        const UL = new Vector(this.position.x, this.position.y);
        UL.rotateAboutOrigin(this.origin, this.rotation);
        return UL;
    }

    get upperRight() {
        const UR = new Vector(this.position.x + this.size.x, this.position.y);
        UR.rotateAboutOrigin(this.origin, this.rotation);
        return UR;
    }
    
    get lowerLeft() {
        const LL = new Vector(this.position.x, this.position.y + this.size.y);
        LL.rotateAboutOrigin(this.origin, this.rotation);
        return LL;
    }

    get lowerRight() {
        const LR = new Vector(this.position.x + this.size.x, this.position.y + this.size.y);
        LR.rotateAboutOrigin(this.origin, this.rotation);
        return LR;
    }

    lookAt(target: Vector){
        this.rotation = -90-Math.atan2(this.position.y - target.y, this.position.x - target.x) * 180 / Math.PI;
    }

    move(vector: Vector) {
        vector.rotate(this.rotation);
        this.position.x += vector.x;
        this.position.y += vector.y;
    }
}

export {Transform, TransformProps};
