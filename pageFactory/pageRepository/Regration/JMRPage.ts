import { JMRObject } from "@objects/Regration/JMRObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { testConfig } from "../../../testConfig";
// import { test,expect } from "@playwright/test";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;

export class JMRPage extends JMRObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }

    async AddButton(locator: string) {
        await webactions.clickElement(this.add_btn(locator));
        await webactions.delay(2000);
    }
    async AddProject(Name: string): Promise<void> {
        await webactions.clickElement(this.projectclick);
        await webactions.clickElement(this.addproject(Name));
    }
    async BildUnbildUnitCheckbox() {
        await webactions.clickElement(this.billedunbilledunitbtn);
    }
    async DateButton(button: string): Promise<void> {
        await webactions.clickElement(this.datebutton(button));
    }
    async SelectDate(fromDate: string): Promise<void> {
        await dateObj.SelectDate(fromDate);
        // await webactions.clickElement(this.search_btn);
    }
    async ScheduleStartDateButton() {
        await webactions.clickElement(this.schedulestartdate);
    }
    async ScheduleEndDateButton() {
        await webactions.clickElement(this.scheduleenddate);
    }
    async JMRStartDateButton() {
        await webactions.clickElement(this.jmrstartdate);
    }
    async JMREndDateButton() {
        await webactions.clickElement(this.jmrenddate);
    }
    async SearchButton(button: string): Promise<void> {
        await webactions.clickElement(this.searchbutton(button));
    }

    async AddUser(name: string) {
        const User = this.page.locator(this.user(name));
        await this.ScrollTOElement(User)
        await webactions.clickElement(this.user(name));
        await webactions.clickElement(this.apply_btn)
    }
     async ScrollTOElement(user){
        const userEle = '//div[@col-id="UserName" and text()="Abhilasha"]'
        // const userEle = '//div[@role="rowgroup"]//div[@row-index="2"]'
        await webactions.clickElement(userEle);
        for(let i = 0; i < 100; i++){
            if(!(await user.isVisible())){
                await this.page.keyboard.press("PageDown")
            }
        }
        await user.scrollIntoViewIfNeeded({timeout: 20000})
    }

        // facing issue in scroll down the page for selecting user from Assigned to And Approver
        

    
    async AddAssetButton() {
        await webactions.clickElement(this.addasset);
    }
    async AssetsName(value: string, Name: string) {
        await webactions.waitForElementAttached(this.assetname(value));
        await webactions.enterElementText(this.assetname(value), Name);
    }
    async AssetsCode(value: string, Code: string) {
        await webactions.waitForElementAttached(this.assetname(value));
        await webactions.enterElementText(this.assetname(value), Code);
    }
    async AssetSearchAndReset(value: string) {
        await webactions.clickElement(this.assetsearchandreset(value));
    }
    async SelectingAssets(value: string) {
        await webactions.waitForElementAttached(this.checkbox(value))
        await webactions.clickElement(this.checkbox(value));
    }
    async AssetApplyButton() {
        await webactions.clickElement(this.assetapplybtn);
        await webactions.delay(2500);
    }
    async AddBilldUnitAndDeemedGeneration(value: string, count1: string, count2: string) {
        await webactions.waitForElementAttached(this.billedUnit(value));
        await webactions.enterElementText(this.billedUnit(value), count1);
        await webactions.enterElementText(this.deemedgeneration(value), count2);
    }
    async AssetDeletBtn(value: string) {
        await webactions.delay(2000);
        await webactions.clickElement(this.assetdelete(value));
    }
    async FileButton() {
        await webactions.waitForElementAttached(this.filebtn)
        await webactions.clickElement(this.filebtn);
        await webactions.delay(2000);
    }
    // async UplodeButton() {
    //     await webactions.clickElement(this.uplodebtn);
    //     await webactions.delay(2500);
    // }
    async Uploadfile(){
        let [upload]=await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.page.click(this.uplodebtn)
        ]);
        upload.setFiles("test.jpg");
        await webactions.delay(2000);
    }
    async MenuButtons(value: string) {
        await webactions.delay(2000);
        await webactions.clickElement(this.menubuttons(value));
    }
    async SavePopUp(value: string) {
        await webactions.delay(2000);
        await webactions.clickElement(this.savepopupokyes(value));
    }
    async FilterBtn() {
        await webactions.delay(2000);
        await webactions.clickElement(this.filterbtn);
    }
    async FilterDropdownLables(value: string, Name: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.clickElement(this.spvname(Name));
        await webactions.doubleClickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async FilterDropdownProject(value: string, Name: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.doubleClickElement(this.spvname(Name));
        await webactions.doubleClickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async FilterDropdownApprover(value: string, Name: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.clickElement(this.approvername(Name));
        await webactions.doubleClickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async FilterDropdownBilingMonth(button: string, value: string, fromDate: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        // await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.clickElement(this.billingmonthdatebtn(button));
        await dateObj.SelectDate(fromDate);
        // await webactions.clickElement(this.spvname(Name));
        // await webactions.doubleClickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async FilterDropdownStatus(value: string, Name: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.clickElement(this.spvname(Name));
        await webactions.clickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async SelectJMRForBulkUpdate(value: string) {
        await webactions.clickElement(this.selectjmrforbulkupdate(value));
    }
    async BulkUpdateBtn(value: string) {
        await webactions.clickElement(this.bulkupdatebtn(value));
    }
    async SearchBtn() {
        await webactions.delay(2000);
        await webactions.clickElement(this.searchbtn);
    }
    async UpdateDropdownLables(value: string, Name: string) {
        // await webactions.waitForElementAttached(this.filterdropdownlables(value));
        await webactions.clickElement(this.updatedropdownlables(value));
        await webactions.clickElement(this.statusvalue(Name));
        // await webactions.doubleClickElement(this.filterdropdownlables(value));
        await webactions.delay(2000);
    }
    async BulkUpdateScheduleStartEndDate(value: string) {
        await webactions.clickElement(this.bulkupdateschedulestartenddate(value));
    }
    async BulkUpateRemark(Remark: string) {
        await webactions.waitForElementAttached(this.updateremarkbtn);
        await webactions.enterElementText(this.updateremarkbtn, Remark);
    }
    
}
