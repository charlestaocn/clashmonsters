import { approx, Component, Label, NodeEventType, Sprite, _decorator, Animation, AnimationComponent, AnimationClip } from "cc";
import { AppRoot } from "../../../AppRoot/AppRoot";
import { ISignal } from "../../../Services/EventSystem/ISignal";
import { Signal } from "../../../Services/EventSystem/Signal";
import { TranslationData } from "../../Data/TranslationData";
import { UpgradeType,UpgradeDesc } from "../../Upgrades/UpgradeType";

const { ccclass, property } = _decorator;

@ccclass("LevelUpSkill")
export class LevelUpSkill extends Component {
    @property(Label) private skillTitle: Label;
    @property(Label) private skillDescription: Label;
    @property(Sprite) private skillIcon: Sprite;
    private chooseSkillEvent: Signal<UpgradeType> = new Signal<UpgradeType>();
    private skillType: UpgradeType;



    public init(skillType: UpgradeType, translationData: TranslationData): void {
        this.skillType = skillType;
        this.skillTitle.string = `${translationData[`${skillType}_TITLE`]}`;
        this.skillIcon.spriteFrame = AppRoot.Instance.GameAssets.UpgradeIcons.getIcon(skillType);
        this.skillDescription.string= UpgradeDesc.getDescByType(skillType);
        this.node.on(NodeEventType.TOUCH_START, this.chooseSkill, this);
    }

    public get ChooseSkillEvent(): ISignal<UpgradeType> {
        return this.chooseSkillEvent;
    }

    private chooseSkill(): void {
        const anni: AnimationComponent = this.getComponent(Animation);
        if (anni) {
            anni.play("choosen")
        }
        this.chooseSkillEvent.trigger(this.skillType);
    }
}
