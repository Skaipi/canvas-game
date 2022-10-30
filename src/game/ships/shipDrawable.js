import Drawable from '../../core/components/drawable';
import ShipVisualState from './shipVisualStates';
import shipMetadata from './shipMetadata';

class ShipDrawable extends Drawable {

    constructor(props) {
        const {tag} = props;
        super(props);
        
        this.tag = tag;
        this.currentVisualState = ShipVisualState.FULL;
        this.image.src = shipMetadata.meta.visuals[this.tag].stateImages[this.currentVisualState];
    }

    onVisualChange() {
        const visualState = this.isVisualStateChanged(this.currentVisualState);

        if (visualState) {
            this.nextVisualState();
            this.image.src = shipMetadata.meta.visuals[this.tag].stateImages[this.currentVisualState];
        }
    }

    nextVisualState() {
        const thresholds = Object.getOwnPropertySymbols(shipMetadata.meta.thresholds);
        const applicableState = thresholds.find(x => this.withinSet(x));
        this.currentVisualState = applicableState;
    }

    isVisualStateChanged(shipVisualState) {
        return !this.withinSet(shipVisualState);
    }

    withinSet(shipVisualState) {
        const thresholds = shipMetadata.meta.thresholds[shipVisualState];
        return thresholds.max >= this.gameObject.life && this.gameObject.life > thresholds.min;
    }
}

export default ShipDrawable;
