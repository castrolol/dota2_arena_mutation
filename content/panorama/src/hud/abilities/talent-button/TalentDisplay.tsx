import { render } from 'react-panorama-x';
import { TalentButton } from './TalentButton';

export class TalentDisplay {
    static data: Panel;

    public static Init() {
        const statBranch = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('StatBranch');
        const statBranch2 = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('level_stats_frame');
        const statBranch3 = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('level_stat_frame');
        const customAbilityTreeButton = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('CustomAbilityTreeButton');


        
        if (customAbilityTreeButton) {
            customAbilityTreeButton.DeleteAsync(0);
        }
        if (this.data) {
            this.data.RemoveAndDeleteChildren();
        }

        const baseContainer = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('AbilitiesAndStatBranch')?.GetChild(0)!;

        this.data = $.CreatePanel('Panel', baseContainer, 'CustomAbilityTreeButton');
        console.log(baseContainer.MoveChildBefore(this.data, baseContainer.GetChild(0)!));
        this.data.SetHasClass('TestingPanel', true);
        console.log(statBranch);
        if (statBranch) statBranch!.visible = false;
        if (statBranch2) statBranch2!.visible = false;
        if (statBranch3) statBranch3!.visible = false;

        this.data.style.width = `${62 + 2 * 8}px`;
        this.data.style.height = `${62}px`;
        this.data.style.verticalAlign = 'bottom';
        this.data.style.marginBottom = '24px';

        render(
            <Panel style={{ width: '100%', height: '100%' }}>
                <TalentButton />
            </Panel>,
            this.data
        );
    }
}
