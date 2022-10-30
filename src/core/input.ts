import Camera from "./components/camera";

class Input {
    static keyStates: { [name: string]: number } = {};
    static mousePositionX = 0;
    static mousePositionY = 0;
    static leftMouseButtonState = false;
    static middleMouseButtonState = false;
    static rightMouseButtonState = false;

    static init() {
        window.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                this.leftMouseButtonState = true;
            } else if (e.button === 1) {
                this.middleMouseButtonState = true;
            } else if (e.button === 2) {
                this.rightMouseButtonState = true;
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 0) {
                this.leftMouseButtonState = false;
            } else if (e.button === 1) {
                this.middleMouseButtonState = false;
            } else if (e.button === 2) {
                this.rightMouseButtonState = false;
            }
        });

        window.addEventListener('mousemove', (e: MouseEvent) => {
            this.mousePositionX = e.offsetX + Camera.MAIN.xView;
            this.mousePositionY = e.offsetY + Camera.MAIN.yView;
        });

        window.addEventListener('keydown', (e: KeyboardEvent) => 
        {
            if (!e.repeat) {
                this.keyStates[e.key] = 2;
            } else {
                this.keyStates[e.key] = 3;
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keyStates[e.key] = 1;
        });
    }

    static reset() {
        Object.entries(this.keyStates).forEach(([key, value]) => {
            if(value <= 1)
                this.keyStates[key] = 0;
            else
                this.keyStates[key] = 3;
        });
    }

    static getKeyUp(key: string) {
        return this.keyStates[key] == 1;
    }

    static getKeyDown(key: string) {
        return this.keyStates[key] == 2;
    }

    static getKey(key: string) {
        return this.keyStates[key] >= 2;
    }
}

export default Input;
