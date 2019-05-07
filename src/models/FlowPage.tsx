import { FlowBaseComponent } from './FlowBaseComponent';
import { IFlowObjectData } from './FlowObjectData';
import {  IManywho } from './interfaces';

declare const manywho: IManywho;
declare const $: JQueryStatic;

export class FlowPage extends FlowBaseComponent {

    constructor(props: any) {
        super(props);
    }

    // the FlowPage automatically gets values
    async componentDidMount() {
        await super.componentDidMount();
        await this.getValues();
    }
    //
    async triggerOutcome(outcomeName: string, data?: IFlowObjectData[]) {
        await super.triggerOutcome(outcomeName, data);
        await this.getValues();
    }
}
