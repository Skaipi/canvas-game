import GameObject from '../core/gameObject';
import Player from './player/player';

class Game {
    start() {
        GameObject.instantiate(new Player({
            name: "Player", 
            tag: "Player"
        }));
    }
}

export default Game;
