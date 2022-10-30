import context from '../App';
import Game from '../game/game';
import Behaviour from './components/behaviour';
import Collider from './components/collider';
import Drawable from './components/drawable';
import Input from './input';
import Camera from './components/camera';
import Map from '../game/map/map';
import GameObject from './gameObject';

class Core {
    static GAME_OBJECTS: GameObject[] = [];
    static GAME_MAP: Map = null;
    static FPS = 60;
    static INTERVAL = 1000 / Core.FPS;  // milliseconds between one frame
    static STEP = Core.INTERVAL / 1000; // seconds between one frame
    static started = false;

    static update() { // Proc every frame
        Core.GAME_OBJECTS.forEach((gameObject) => {
            const scripts: Behaviour[] = gameObject.getComponents(Behaviour);

            scripts?.forEach((script) => {
                if (script.enabled) {
                    script.update();
                }
            });
        });
        Camera.MAIN.update();
    }

    // Proc after update every frame
    static checkCollision() {
        const activeColliders = Core.getActiveColliders();
        const dynamicColliders = activeColliders.filter((collider) => !collider.isStatic);

        dynamicColliders.forEach((collider) => {
            let collisionFound = false;
            activeColliders.forEach((other) => {
                if (collider !== other && collider.isNear(other)) {
                    collisionFound ||= collider.checkCollision(other);
                }
            });
            collider.isColliding = collisionFound;
        });
    }

    static getActiveColliders(): Collider[] {
        const activeColliders: Collider[] = [];

        Core.GAME_OBJECTS.forEach((gameObject) => {
            activeColliders.push(
                ...gameObject.getComponents(Collider)
                .filter((collider: Collider) => collider.enabled)
            );
        });

        return activeColliders;
    }

    // Proc after checkCollision every frame
    static draw() { 
        context.clearRect(0,0,context.canvas.width,context.canvas.height);

        Core.GAME_OBJECTS.forEach((gameObject) => {
            gameObject.getComponents(Drawable)
            .forEach((drawable: Drawable) => drawable.draw(context, Camera.MAIN));
        });
    }

    static start(): void {
        if (!Core.started) {
            Input.init();
            let game = new Game();
            game.start();
            Core.started = true;
            requestAnimationFrame(Core.start);
        } else {
            Core.update();
            Core.checkCollision();
            Input.reset();
            Core.draw();
            requestAnimationFrame(Core.start);
        }
    }

    static assignMap(mapObject: Map) {
        this.GAME_MAP = mapObject;
    }
}

export default Core;
