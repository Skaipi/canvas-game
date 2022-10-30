import GameObject from "../gameObject";

class Component {
    gameObject: GameObject
    enabled: boolean;

    constructor() {
        this.gameObject = null;
        this.enabled = true;
    }
}

export default Component;
