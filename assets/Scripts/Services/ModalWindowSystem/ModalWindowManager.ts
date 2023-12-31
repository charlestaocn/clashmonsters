import {Component, instantiate, Node, Prefab, _decorator} from "cc";
import {ModalWindow} from "./ModalWindow";

const {ccclass, property} = _decorator;

@ccclass("ModalWindowManager")
export class ModalWindowManager extends Component {
    @property(Prefab) private availableWindows: Prefab[] = [];


    public async showModal<TParams, TResult>(name: string, params: TParams): Promise<TResult> {
        console.log("SHOW MODAL", name, params);
        const windowPrefab: Prefab = this.availableWindows.find((w) => w.name === name);
        const windowNode: Node = instantiate(windowPrefab);
        windowNode.setParent(this.node);

        const modalWindow: ModalWindow<TParams, TResult> = <ModalWindow<TParams, TResult>>windowNode.getComponent(name);
        const result: TResult = await modalWindow.runAsync(params);
        windowNode.destroy();

        return result;
    }


    public closeModel(modalWindowName: string): boolean {
        const windowNode: Node = this.node.getChildByName(modalWindowName);
        if (windowNode) {
            windowNode.destroy();
            return true;
        }
    }

}
