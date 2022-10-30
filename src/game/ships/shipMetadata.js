import ShipVisualState from './shipVisualStates';

import black_ship_full from '../../../assets/gfx/PNG/default_size/Ships/pirate_ship.png';
import black_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/pirate_ship_damaged_1.png';
import black_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/pirate_ship_damaged_2.png';
import black_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (20).png';

import red_ship_full from '../../../assets/gfx/PNG/default_size/Ships/ship (3).png';
import red_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (9).png';
import red_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (15).png';
import red_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (21).png';

import blue_ship_full from '../../../assets/gfx/PNG/default_size/Ships/ship (5).png';
import blue_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (11).png';
import blue_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (17).png';
import blue_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (23).png';

import yellow_ship_full from '../../../assets/gfx/PNG/default_size/Ships/ship (6).png';
import yellow_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (12).png';
import yellow_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (18).png';
import yellow_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (24).png';

import green_ship_full from '../../../assets/gfx/PNG/default_size/Ships/ship (4).png';
import green_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (10).png';
import green_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (16).png';
import green_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (22).png';

import white_ship_full from '../../../assets/gfx/PNG/default_size/Ships/ship (1).png';
import white_ship_weakly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (7).png';
import white_ship_strongly_damaged from '../../../assets/gfx/PNG/default_size/Ships/ship (13).png';
import white_ship_destroyed from '../../../assets/gfx/PNG/default_size/Ships/ship (19).png';

const shipMetadata = {
    meta: {
        thresholds: {
            [ShipVisualState.FULL]: { max: 200, min: 85 },
            [ShipVisualState.WEAKLY_DAMAGED]: { max: 85, min: 50 },
            [ShipVisualState.STRONGLY_DAMAGED]: { max: 50, min: 10 },
            [ShipVisualState.DESTROYED]: { max: 10, min: -1 },
        },
        visuals: {
            black_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: black_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: black_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: black_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: black_ship_destroyed
                },
            },
            red_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: red_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: red_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: red_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: red_ship_destroyed
                }
            },
            blue_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: blue_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: blue_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: blue_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: blue_ship_destroyed
                }
            },
            yellow_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: yellow_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: yellow_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: yellow_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: yellow_ship_destroyed
                }
            },
            green_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: green_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: green_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: green_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: green_ship_destroyed
                }
            },
            white_ship: {
                stateImages: {
                    [ShipVisualState.FULL]: white_ship_full,
                    [ShipVisualState.WEAKLY_DAMAGED]: white_ship_weakly_damaged,
                    [ShipVisualState.STRONGLY_DAMAGED]: white_ship_strongly_damaged,
                    [ShipVisualState.DESTROYED]: white_ship_destroyed
                }
            }
        }
    }
};

export default shipMetadata;