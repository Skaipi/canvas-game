import GameObject from '../../core/gameObject';
import Collider from '../../core/components/collider';
import Camera from '../../core/components/camera';
import Vector from '../../core/models/vector';
import PlayerCannon from './playerCannon';
import PlayerMovement from './playerMovement';
import ShipDrawable from '../ships/shipDrawable';

class Player extends GameObject {
    constructor(props) {
        let position = new Vector(500,800);
        let size = new Vector(66,113); 

        super({...props, position, size});
        
        this.life = 200;

        const camera = new Camera({
            xView: 0,
            yView: 0,
            wView: document.documentElement.clientWidth,
            hView: document.documentElement.clientHeight
        });

        this.addComponent(camera);
        this.addComponent(new PlayerMovement());
        this.addComponent(new PlayerCannon());
        this.addComponent(new ShipDrawable({tag: "green_ship"}));
        
        let p_collider = new Collider();
        p_collider.isStatic = false;
        this.addComponent(p_collider);

        camera.follow(this);
    }

    getPos() { return this.transform.position; }
}

export default Player;
