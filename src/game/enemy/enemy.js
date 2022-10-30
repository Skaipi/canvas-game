import AI from './ai';
import Collider from '../../core/components/collider';
import EnemyMovement from './enemyMovement';
import GameObject from '../../core/gameObject';
import ObjectLifeManager from '../utils/ObjectLifeManager';
import ShipDrawable from '../ships/shipDrawable';

class Enemy extends GameObject {
    constructor(props) {
        super(props);
        this.life = 100;

        this.addComponent(new EnemyMovement());
        this.addComponent(new ObjectLifeManager());
        this.addComponent(new AI());
        this.addComponent(new ShipDrawable({tag: "black_ship"}));

        let e_collider = new Collider();
        e_collider.isStatic = false;
        this.addComponent(e_collider);
    }
}

export default Enemy;
