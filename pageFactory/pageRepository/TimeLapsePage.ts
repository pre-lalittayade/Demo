import { TimeLapseObject } from "@objects/TimeLapseObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class TimeLapsePage extends TimeLapseObject {

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

    // async SelectDay(buttonName: string): Promise<void> {
    //     await webactions.clickElement(this.alarms_btn(buttonName));
    // }

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

    async GridView(){
        await webactions.clickElement(this.grid_view_btn);
    }

    async SettingButton(){
        await webactions.clickElement(this.setting_btn);
        await webactions.delay(5000);
        // await this.GraphAssertion();
        // await webactions.delay(5000);
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

    async DisplayChart(item: string){
        await webactions.clickElement(this.chart_menu_btn);
        await webactions.clickElement(this.chart_menu_item(item));

    }

    async Assertion(){
        let day60min = this.page.locator("//tbody/tr[4]/td[14]");
        // let valueOfday60min =! null;

        // let graph = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-timelapse[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/app-tab-node-control[1]/div[1]/mat-card[1]/div[1]/div[3]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[1]/div[2]/div[1]/highcharts-chart[1]/div[3]/svg[1]/g[6]/g[19]/path[2]");
        
        await webactions.delay(7000);
        console.log(day60min);
        await expect.soft(day60min).toHaveText("50.1");
        // await expect(graph).toBeVisible();
    }

    async GraphAssertion(){
         let graph = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-timelapse[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/app-tab-node-control[1]/div[1]/mat-card[1]/div[1]/div[3]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[1]/div[2]/div[1]/highcharts-chart[1]/div[3]/svg[1]/g[6]/g[19]/path[2]");
         await expect(graph).toBeVisible();
    }
    
}