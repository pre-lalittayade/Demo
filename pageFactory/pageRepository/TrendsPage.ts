import { TrendObject } from "@objects/TrendsObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class TrendPage extends TrendObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }

    async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    }

    async SelectAlarmButton(buttonName: string): Promise<void> {
        await webactions.clickElement(this.alarms_btn(buttonName));
    }

    async SelectDateRange(fromDate: string, toDate: string): Promise<void> {
        await dateObj.SelectDateRange(fromDate, toDate);
    }

    async SelectGranularity(timeSpanButton: string): Promise<void> {
        await webactions.clickElement(this.time_span_btn(timeSpanButton));
    }

    async NavigateToMenuTree(parentNode: string, nodes: string): Promise<void> {
        await menuObj.navigateMenuTree(parentNode, nodes);
    }

    async DragAndDropElements(source: string): Promise<void> {
        await webactions.dragAndDrop(this.source_location(source), this.drop_textBox);
    }

    async DisplayChart(item: string){
        await webactions.clickElement(this.chart_menu_btn);
        await webactions.clickElement(this.chart_menu_item(item));

    }

    async GridView(){
        await webactions.clickElement(this.grid_view_btn);
    }

    async SettingButton(){
        await webactions.clickElement(this.setting_btn);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_1);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_2);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_3);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_4);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_5);
        await webactions.delay(4000);
        await webactions.clickElement(this.setting_btn);

    }
    
}