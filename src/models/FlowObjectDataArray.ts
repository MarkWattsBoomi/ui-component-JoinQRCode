import { FlowObjectData , IFlowObjectData} from './FlowObjectData';
import { FlowObjectDataProperty } from './FlowObjectDataProperty';

export enum eSortOrder {
    ascending,
    descending,
}

export class FlowObjectDataArray {

    private Items: FlowObjectData[];

    get items(): FlowObjectData[] {
        return this.Items;
    }

    sort(ascending: eSortOrder = eSortOrder.ascending, fieldName?: string): FlowObjectData[] {

        if (ascending === eSortOrder.ascending) {
            if (fieldName) {
                return this.Items.sort((a, b) => {
                    switch (true) {
                        case a.properties[fieldName].value < b.properties[fieldName].value:
                            return -1;

                        case a.properties[fieldName].value > b.properties[fieldName].value:
                            return 1;

                        default:
                            return 0;

                    }

                });
            } else {
                return this.Items.sort((a, b) => a.order - b.order);
            }
        } else {
            if (fieldName) {
                return this.Items.sort((a, b) => {
                    switch (true) {
                        case a.properties[fieldName].value < b.properties[fieldName].value:
                            return 1;

                        case a.properties[fieldName].value > b.properties[fieldName].value:
                            return -1;

                        default:
                            return 0;

                    }

                });
            } else {
                return this.Items.sort((a, b) => a.order - b.order);
            }
        }
    }

    constructor(array: IFlowObjectData[]) {
        this.Items = [];
        for (const item of array || []) {
            this.Items.push(new FlowObjectData([item]));
        }

    }

    addItem(item: FlowObjectData) {
        this.Items.push(item);
    }

    clearItems() {
        this.Items = [];
    }

    iFlowObjectDataArray(): IFlowObjectData[] {
        const output: IFlowObjectData[] = [];
        for (const od of this.Items) {
            output.push(od.iObjectData());
        }
        return output;
    }

    getItemWithPropertyName(findProperty: string, withValue: string, returnProperty: string): FlowObjectDataProperty {
        for (const item of this.Items) {
            if ((item.properties[findProperty].value as string).toLowerCase() === withValue.toLowerCase()) {
                return item.properties[returnProperty];
            }
        }

        return null;
    }

	   getItemWithPropertyValue(findProperty: string, withValue: string): FlowObjectData {
        for (const item of this.Items) {
            if ((item.properties[findProperty].value as string).toLowerCase() === withValue.toLowerCase()) {
                return item;
            }
        }
    }
}
