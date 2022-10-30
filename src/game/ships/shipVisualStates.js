
const ShipVisualState = Object.freeze({
    FULL: Symbol("full"),
    WEAKLY_DAMAGED: Symbol("weaklyDamaged"),
    STRONGLY_DAMAGED: Symbol("stronglyDamaged"),
    DESTROYED: Symbol("destroyed")
});

export default ShipVisualState;
