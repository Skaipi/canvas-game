import Core from "./core/core";
import GameObject from "./core/gameObject";
import Map from "./game/map/map";

const canvas = <HTMLCanvasElement> document.getElementById('main');
const context = canvas.getContext('2d');
export default context;

const handleResize = () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
};

const hideUI = () => {
    const ui = (document.getElementsByClassName('overlay') as HTMLCollectionOf<HTMLElement>)[0];
    ui.style.display = 'none';
};

(window as any).getMousePosition = (evt: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top)  * scaleY,
    };
};

(window as any).startNewGame = () => {
    hideUI();
    handleResize();
    //document.documentElement.requestFullscreen();
    const map = new Map({
        mapFile: null, 
        name: 'Map',
        tag: 'Map'
    });
    GameObject.instantiate(map);
    Core.assignMap(map);
    Core.start();
};

document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('resize', () => handleResize());
