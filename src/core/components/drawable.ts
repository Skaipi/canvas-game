import Component from './component';
import Collider from './collider';
import Camera from './camera';

interface DrawableProps {
    image: string;
}

class Drawable extends Component{
    image: HTMLImageElement;
    xPos: number;
    yPos: number;
    width: number;
    height: number;
    xScale: number;
    yScale: number;

    constructor(props: DrawableProps) {
        const {image} = props;
        super();

        this.image = new Image();

        if (image) {
            this.image.src = image;
        }
        this.xPos = 0;
        this.yPos = 0;
        this.width = 0;
        this.height = 0;
    }

    draw(context: CanvasRenderingContext2D, camera: Camera) {
        if (!this.gameObject) { throw new Error("Uninstantiated component call"); }

        this.xPos = this.gameObject.transform.position.x;
        this.yPos = this.gameObject.transform.position.y;
        this.width = this.gameObject.transform.size.x;
        this.height = this.gameObject.transform.size.y;
        this.xScale = this.gameObject.transform.scale.x;
        this.yScale = this.gameObject.transform.scale.y;

        if (this.enabled) {
            context.save();
            // Camera offset
            context.translate(this.xPos - camera.xView, this.yPos - camera.yView);
            // Rotation offset
            context.translate(this.width / 2, this.height / 2);
            context.rotate(-this.gameObject.transform.rotation * Math.PI/180);
            context.drawImage(
                this.image,
                -(this.width * this.xScale) / 2,
                -(this.height * this.yScale) / 2,
            );

            this.displayDebugHitbox(context);
            context.restore();
        }
    }

    displayDebugHitbox(context: CanvasRenderingContext2D) {
        const col = this.gameObject.getComponent(Collider);
        if (col?.visualize) {
            if (col.isColliding) { context.strokeStyle = 'red'; } 

            context.strokeRect(
                -(this.width * this.xScale) / 2,
                -(this.height * this.yScale) / 2,
                this.width * this.xScale,
                this.height * this.yScale
            );
        }
    }
}

export default Drawable;
