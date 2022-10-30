import Behaviour from "../../core/components/behaviour";
import GameObject from "../../core/gameObject";
import Input from "../../core/input";
import Vector from "../../core/models/vector";
import Enemy from "../enemy/enemy";
import rounds_config from "../../../assets/rounds/rounds.json";

const STATES = {
    STARTED: 0,
    WAIT_FOR_ACTION: 1,
    IN_PROGRES: 2,
    ENDED: 3,
};

class MapManager extends Behaviour {
    constructor(...props) {
        super(...props);

        this.roundCounter = 0;
        this.state = STATES.WAIT_FOR_ACTION;
        this.rounds = rounds_config.rounds;
    }

    update() {
        const {STARTED, WAIT_FOR_ACTION, IN_PROGRES, ENDED} = STATES;
        
        const gameObjects = GameObject.findByName('')
            .filter(g => g instanceof Enemy);
            
        switch(this.state) {
            case STARTED:
                this.state = WAIT_FOR_ACTION;
                break;
            case WAIT_FOR_ACTION:
                if (this.checkInput()) {
                    this.spawnEnemies();
                    this.state = IN_PROGRES;
                }
                break;
            case IN_PROGRES:
                if (gameObjects.length === 0) this.state = ENDED;
                break;
            case ENDED:
                this.roundCounter++;
                this.state = STARTED;
                break;
            default:
                break;
        }
    }

    checkInput() {
        if (Input.getKey(' ')) {
            return true;
        }
        return false;
    }

    spawnEnemies() {
        let enemies = [];
        if (this.roundCounter >= this.rounds.length) {
            enemies = this.rounds[this.rounds.length-1].enemies;
        } else {
            enemies = this.rounds[this.roundCounter].enemies;
        }

        enemies.forEach((e, i) => GameObject.instantiate(
            new Enemy({
                name: `Enemy ${i}`,
                tag: "Enemy",
                position: new Vector(e.x,e.y),
                size: new Vector(66,113)
            })
        ));
    }
}

export default MapManager;