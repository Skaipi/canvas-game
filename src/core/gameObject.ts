import Core from './core';
import Component from './components/component';
import {TransformProps, Transform} from './components/transform';
import Behaviour from './components/behaviour';

interface GameObjectProps extends TransformProps {
    name: string;
    tag: string;
}

class GameObject {
    name: string
    tag: string;
    transform: Transform;
    components: Component[];

    constructor(props: GameObjectProps) {
        const {name, tag} = props;

        this.name = name || 'default';
        this.tag = tag || 'default';
        this.transform = new Transform(props);
        this.components = [this.transform];
    }

    static instantiate(gameObject: GameObject) {
        Core.GAME_OBJECTS.push(gameObject);
        let scripts: Behaviour[] = gameObject.getComponents(Behaviour);

        for(let script of scripts) {
            if (script.enabled) {
                script.start();
            }
        }
    }

    static findByName(name: string) {
        return Core.GAME_OBJECTS.filter(go => go.name.includes(name));
    }

    static findByTag(tag: string) {
        return Core.GAME_OBJECTS.filter(go => go.tag.includes(tag));
    }

    getComponent(type: any): any {
        return this.components.find(component => component instanceof type);
    }

    getComponents(type: any): any {
        return this.components.filter(component => component instanceof type);
    }

    addComponent(component: Component) {
        if (component instanceof Component) {
            component.gameObject = this;
            this.components.push(component);
            return component;
        } else {
            throw "Invalid component type";
        }
    }

    removeComponent(type: any) {
        const component = this.components.find(component => component instanceof type);
        const index = this.components.indexOf(component);

        if (index > -1) {
            delete this.components[index];
            this.components.splice(index, 1);
        }
    }

    destroy() {
        for (var i = 0; i < this.components.length; i++) {
            delete this.components[i];
        }
        const index = Core.GAME_OBJECTS.indexOf(this);

        if (index > -1) {
            delete Core.GAME_OBJECTS[index];
            Core.GAME_OBJECTS.splice(index, 1);
        }
    }
}

export default GameObject;
