// import { LandPageObject } from '@objects/SmokeEose/LandingPageObjects';
// import { WebActions } from '@lib/WebActions'
// import { testConfig } from '../../../testConfig';
// import { ComboBoxActions } from '@lib_web/ComboBoxActions'

// import { DateActions } from "@lib/web/DateActions";
// import { expect, Page } from "@playwright/test";
// import { MenuActions } from "@lib_web/MenuActions"


// let webactions: WebActions;
// let comboBoxObj: ComboBoxActions;
// let dateObj: DateActions;
// let menuObj: MenuActions;

import { LandPageObject } from '@objects/SmokeSuit/SolarSmoke/LandingPage_Object';
import { WebActions } from '@lib/WebActions'
import { testConfig } from '../../../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;

let  downfile:string;

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class LandingPage extends LandPageObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page);
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);

    }

    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

    async ClickOnSolarButton() {
        await webactions.waitForElementAttached(this.SolarBtn);
        await webactions.clickElement(this.SolarBtn);

    }

    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }
    async ChecktheRowforAccount(name: string) {
        let acrow = this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
    }

    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt, name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(2000);
    }

    async FindthelocationButton(name: string) {
        let LOC = this.page.locator(this.Locationbtn);
        expect.soft(LOC).toBeVisible();
      //  await webactions.delay(2000);
        await webactions.clickElement(this.Locationbtn);
       // await webactions.delay(2000);
        await webactions.clickElement('//div//button[@aria-label="Toggle fullscreen view"]');
        await this.page.locator(this.firstclickonplant(name)).click();
    }

    async CheckEosefarmname(name: string) {
        await webactions.waitForElementAttached(this.farmname);
        let farmname = await this.page.innerText(this.farmname);
       // await webactions.delay(2000);
        console.log("name:", farmname);
        expect.soft(farmname).toContain(name);

    }
    async CheckMapviewValue() {
        let SocEose = await this.page.innerText(this.Socvalue);
        expect.soft(SocEose).not.toBe(" ");
        console.log("SOC",SocEose);

        let charge = await this.page.innerText(this.chargepowerlimit);
        expect.soft(charge).not.toBe(" ");
        console.log("Charge limit",charge);
        let discharge = await this.page.innerText(this.dischargepowerlimit);
        expect.soft(discharge).not.toBe(" ");
        console.log("dischargelimit",discharge);
        let totlpwr = await this.page.innerText(this.totalpower);
        expect.soft(totlpwr).not.toBe(" ");
        console.log("total power",totlpwr);
        let voltage = await this.page.innerText(this.voltage);
        expect.soft(voltage).not.toBe(" ");
        console.log("voltage",voltage);
        let current = await this.page.innerText(this.current);
        expect.soft(current).not.toBe(" ");
        console.log("current",current);

    }
    async findGRPlant(name: string) {
        await webactions.waitForElementAttached(this.Alllocation);
        await webactions.clickElement(this.Alllocation);
       // await webactions.delay(1000);
        await webactions.clickElement(this.GRlocation(name));

    }

    async GetColumns(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col);
            console.log("head", col);
        }
        return colmuns;
    }
    async GetColumnValues(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@class="ag-center-cols-container"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            }
        }
        return columnValues;
    }

    async ScrollToLeft() {
        let rowEle = this.page.locator(`//div[@class="ag-center-cols-clipper"]/div[@row-index="0"]/div[@aria-colindex="2"]`);
        await this.page.locator(`//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable headerClass-text-center ag-focus-managed" and @col-id="V_NodeId_18"]`);
        for (let j = 0; j < 10; j++) {
            if (!(await rowEle.isVisible())) {
                await this.page.keyboard.press("ArrowLeft");
            }
        }

    }
    async CheckPlantIsCommunicating(lastdatareceived: string) {


        let re:number;
        let lstdata = lastdatareceived.split(" ");
        console.log("Last Data Received On Landing Page :- ", lstdata);
        // console.log("lastdatareceived:", lstdata);
        let lstdatadate = lstdata[0].split("-");
        // console.log("lastdatareceived:", lstdatadate[0]);
        // console.log("lastdatareceived:", lstdatadate[1]);
        // console.log("lastdatareceived:", lstdatadate[2]);
        var date = (new Date().toDateString());
        console.log("Last Data Received On Should be :- ", date);
        let day = date.split(" ");
        if(lstdatadate[0]!=day[2]){
            re=1;
        }
        if(lstdatadate[1]!=day[1]){
            re=1;
        }
        if(lstdatadate[2]!=day[3]){
            re=1;
        }
        // console.log("lastdatareceived:", day[1]);
        // console.log("lastdatareceived:", day[2]);
        // console.log("lastdatareceived:", day[3]);
        expect.soft(lstdatadate[0]).toContain(day[2]);
        expect.soft(lstdatadate[1]).toContain(day[1]);
        expect.soft(lstdatadate[2]).toContain(day[3]);
        return re;

    /*    let lstdata = lastdatareceived.split(" ");
        console.log("Last Data Received On Landing Page :- ", lstdata);
        let lstdatadate = lstdata[0].split("-");
        // console.log("lastdatareceived:", lstdatadate[0]);

        // console.log("lastdatareceived:", lstdatadate[1]);
        // console.log("lastdatareceived:", lstdatadate[2]);

        var date = (new Date().toDateString());
        console.log("Last Data Received On History Page :- ", date);
        let day = date.split(" ");
        // console.log("lastdatareceived:", day[1]);
        // console.log("lastdatareceived:", day[2]);
        // console.log("lastdatareceived:", day[3]);
        expect.soft(lstdatadate[0]).toContain(day[2]);
        expect.soft(lstdatadate[1]).toContain(day[1]);
        expect.soft(lstdatadate[2]).toContain(day[3]);
*/

    }

    async CheckDeviceStatus() {
        if(await this.page.locator(this.tableDevicestatusfailure).isVisible()){
            let failurevalue=await this.page.innerText(this.tableDevicestatusfailure);
            expect.soft(parseInt(failurevalue)).toBeGreaterThanOrEqual(1);
            console.log("Failure Count :- ", failurevalue);
        }
        if(await this.page.locator(this.tabledevicestatusError).isVisible()){
            let Errorvalue=await this.page.innerText(this.tabledevicestatusError);
            expect.soft(parseInt(Errorvalue)).toBeGreaterThanOrEqual(1);
            console.log("Error Count :- ", Errorvalue);
        }
        if(await this.page.locator(this.tabledevicestatusOk).isVisible()){
            let okvalue=await this.page.innerText(this.tabledevicestatusOk);
            expect.soft(parseInt(okvalue)).toBeGreaterThanOrEqual(1);
            console.log("Ok Count :- ", okvalue);
        }
        if(await this.page.locator(this.tabledevicestatusPause).isVisible()){
            let Pausevalue=await this.page.innerText(this.tabledevicestatusPause);
            expect.soft(parseInt(Pausevalue)).toBeGreaterThanOrEqual(1);
            console.log("Pause Count :- ", Pausevalue);
        }
        
    
    }
    // async CheckDeviceStatusEOSE() {
    //     if(await this.page.locator(this.tabledevicestatusresting).isVisible()){
    //         let restingvalue=await this.page.innerText(this.tabledevicestatusresting);
    //         expect.soft(restingvalue).not.toBe(" ");
    //         console.log("restingcount", restingvalue);
    //     }
    //     if(await this.page.locator(this.tabledevicestatusdischarging).isVisible()){
    //         let dischargingvalue=await this.page.innerText(this.tabledevicestatusdischarging);
    //         expect.soft(dischargingvalue).not.toBe(" ");
    //         console.log("dischargingcount", dischargingvalue);
    //     }
    //     if(await this.page.locator(this.tabledevicestatuscharging).isVisible()){
    //         let chargingvalue=await this.page.innerText(this.tabledevicestatuscharging);
    //         expect.soft(chargingvalue).not.toBe(" ");
    //         console.log("chargingcount", chargingvalue);
    //     }
        
    // }
    async CheckDeviceStatusEOSE() {
        if(await this.page.locator(this.tabledevicestatusresting).isVisible()){
            let restingvalue=await this.page.innerText(this.tabledevicestatusresting);
            expect.soft(restingvalue).not.toBe(" ");
            console.log("Device Status :- ", restingvalue);
        }
        if(await this.page.locator(this.tabledevicestatusdischarging).isVisible()){
            let dischargingvalue=await this.page.innerText(this.tabledevicestatusdischarging);
            expect.soft(dischargingvalue).not.toBe(" ");
            console.log("Device Status :- ", dischargingvalue);
        }
        if(await this.page.locator(this.tabledevicestatuscharging).isVisible()){
            let chargingvalue=await this.page.innerText(this.tabledevicestatuscharging);
            expect.soft(chargingvalue).not.toBe(" ");
            console.log("Device Status :- ", chargingvalue);
        }
    } 

    async CheckTheDateonHistory() {
        var date = (new Date().toLocaleDateString()).split("/");
        console.log(date);


        await webactions.waitForElementAttached(this.strtDate);
        let strt = await this.page.inputValue(this.strtDate);
        let max1 = (strt).split(" ");
        console.log(strt);

        await webactions.delay(2000);

        let end = await this.page.inputValue(this.endDate);
        let max2 = (end).split(" ");
        console.log(end);

        if (max1[0] == max2[0]) {
            if (max1[1] == max2[1]) {
                if (max1[2] == max2[2]) {
                    await webactions.delay(5000);
                    expect.soft(max1[0]).toContain(date[2]);
                    expect.soft(max1[1]).toContain(date[1]);
                    expect.soft(max1[2]).toContain(date[0]);

                }
            }
        }
    }
    async projectTile() {
        await webactions.waitForElementAttached(this.projecttileheading);
        let th1 = this.page.locator(this.projecttileheading);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.projecttilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = (await this.page.innerText(this.projecttilevalue)).split(" ");
        let p = parseInt(tv2[0]);
        expect.soft(p).toBeGreaterThan(0);
        console.log("Project :- ",p);
    }
    async CapacityTile() {
        await webactions.waitForElementAttached(this.CapacityTileheading);
        let th1 = this.page.locator(this.CapacityTileheading);
      //  await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.CapacityTilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = (await this.page.innerText(this.CapacityTilevalue)).split(" ");
        let p = parseInt(tv2[0]);
        expect.soft(p).toBeGreaterThan(0);
        console.log("Capacity :- ",p);
    }
    async SocTile() {
        await webactions.waitForElementAttached(this.SocTileHeading);
        let th1 = this.page.locator(this.SocTileHeading);
        //await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.SocTilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.SocTilevalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("SOC :- ",tv2);

    }
    async PowerratingTile() {
        await webactions.waitForElementAttached(this.PowrTileHeading);
        let th1 = this.page.locator(this.PowrTileHeading);
       // await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.PowrTilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.PowrTilevalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Power Rating :- ",tv2);
    }
    async EnergyRatingTile() {
        await webactions.waitForElementAttached(this.EnergyTileHeading);
        let th1 = this.page.locator(this.EnergyTileHeading);
        //await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.EnergyTilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.EnergyTilevalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Energy Rating :- ",tv2);
    }
    async TotalPowerTile() {
        await webactions.waitForElementAttached(this.TtlPowerTileHeading);
        let th1 = this.page.locator(this.TtlPowerTileHeading);
       // await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.TtlPowerTilevalue);
        //await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.TtlPowerTilevalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Total Power :- ",tv2);
    }
    async solarPlantFarmView(name: string) {
       // await webactions.delay(2000);
        //solar
        await webactions.waitForElementAttached(this.farmname);
        let farmname = await this.page.innerText(this.farmname);
       // await webactions.delay(2000);
        console.log("Name:", farmname);
        expect.soft(farmname).toContain(name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.solarfarmview);
    }

    async Checkinspection() {
        await webactions.waitForElementAttached(this.solarinspectiontxt);
        let insp = await this.page.locator(this.solarinspectiontxt);
        await webactions.delay(2000);
        expect.soft(insp).toBeVisible();
        let insdate = await (await this.page.innerText(this.solarinspectiontxt)).split("_");
        let insdate1 = new Date(insdate[2]);
        let insdateArray = insdate1.toDateString();
        console.log("Inspection1 ", insdateArray);

        let inspdate = await this.page.innerText(this.inspectiondatelabel);
       // await webactions.delay(2000);
        console.log("Actualdate2 ", inspdate);
        expect.soft(insdateArray).toContain(inspdate);

        // let s1=this.page.locator(this.differentdefects("Vegetation"));
    }

    async clickonInspectiondropdown(date: string) {
        await webactions.waitForElementAttached(this.inspectdropdown);
        await webactions.delay(2000);
        await this.page.locator('//*[@id="selectInspection"]/parent::div').click({ force: true });

        await webactions.clickElement(this.inspectiontoSelect(date));

    }

    async FilterScope() {
       // await webactions.clickElement(this.inspectionfilter);
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.scope);
        await webactions.clickElement(this.scope);
        await webactions.clickElement(this.filterapplyButton);
        let scop = await this.page.locator(this.filterScopeblack);
       // await webactions.delay(2000);
        expect.soft(scop).toBeVisible();
       // await webactions.delay(2000);
        await webactions.clickElement(this.scope);

    }
    async FilterString() {
        // await webactions.clickElement('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');

        // await webactions.clickElement(`//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomOut"]`);
        // for (let q = 1; q <= 21; q++) {
        //     await this.page.keyboard.down('ArrowDown');

        // }
        await webactions.clickElement(this.String);
        await webactions.clickElement(this.filterapplyButton);
        let strng = this.page.locator(this.filterStringblue);
        // expect.soft(strng).toBeVisible();
       await webactions.delay(2000);
        let fill = await strng.getAttribute('fill');
        console.log("Fill", fill);
        expect.soft(fill).not.toBe(" ");
       await webactions.delay(2000);
        await webactions.clickElement(this.String);
        await webactions.clickElement(this.inspectionfilter);

    }
    async Checkdeffects(deffect:string) {
        let defct = this.page.locator(this.defectslabel);
        await webactions.delay(2000);
        expect.soft(defct).toBeVisible();
       // await webactions.delay(4000);
        await webactions.waitForElementAttached(this.differentdefects(deffect));
        // await this.page.locator(this.differentdefects("Hotspot")).scrollIntoViewIfNeeded();
        await this.page.locator(this.differentdefects(deffect)).click();
      //  await webactions.delay(2000);
        //let locator=`//div[@class="collapsible-content-defect"]//div[@id="category-div"]//div[@id="category-Hotspot"]//parent::div[@id="category-div"]//label[@class="defect-panel-label"][1]`;
        await webactions.waitForElementAttached(this.HotspotDeffect);
        let loc = await this.page.locator(this.HotspotDeffect);
        expect.soft(loc).toBeVisible();

        // for(let q=1;q<=21;q++){
        //     await this.page.keyboard.down('ArrowDown');

        // }
        // for(let k=1;k<=6;k++){
        //     await this.page.keyboard.down('ArrowLeft');
        // }

        // await webactions.waitForElementAttached('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');
        // for(let p=1;p<=4;p++){

        //     await webactions.clickElement('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');
        //     // for(let q=1;q<=8;q++){
        //     //     await this.page.keyboard.down('ArrowDown');
        //     // }
        // }
        // for(let k=1;k<=4;k++){
        //     if(!(await this.page.locator(`//*[@class="leaflet-interactive"][1]`).isVisible())){
        //     await this.page.keyboard.down('ArrowLeft');
        //}
        // }
        await this.page.locator('//*[@class="leaflet-interactive"][1]').focus();
        // this.page.evaluate("document.body.style.zoom=2.0");
        await this.page.locator('//*[@class="leaflet-interactive"][1]').click({ force: true });
        //console.log("Count",c);
        //await webactions.clickElement(this.filterStringblue);
        //await webactions.delay(5000);


        // await this.page.locator(locator).nth(1).waitFor();
        // const elements = await this.page.$$(locator);
        // console.log(elements)
        // let colmuns=[];
        // for(const element of elements){
        //     let col =  await element.innerText();
        //     colmuns.push(col);
        //     console.log("head",col);
        // }
    }

    async ValidateDefectleaflethead(name: string) {
        await webactions.waitForElementAttached(this.Leafletheadlabel);
        let hdlabel = await this.page.innerText(this.Leafletheadlabel);
        console.log("Headlabel:", hdlabel);
        await webactions.delay(2000);
        expect.soft(hdlabel).toContain(name);
        //await webactions.delay(2000);
        let hdcode = await this.page.innerText(this.leafletHeadcode);
        console.log("Headcode:", hdcode);
        await webactions.delay(2000);
        expect.soft(hdcode).not.toBe(" ");
       // await webactions.delay(2000);
    }

    async ValidateDefectLeafletbody() {

        let inspinfo = await this.page.innerText(this.leafletinspectioninfo);
        console.log("inspectioninfo:", inspinfo);
        await webactions.delay(2000);
        expect.soft(inspinfo).not.toBe(" ");
      //  await webactions.delay(2000);
        let strginf = await this.page.innerText(this.leafletstringinfo);
        console.log("stringinfo:", strginf);
        await webactions.delay(2000);
        expect.soft(strginf).not.toBe(" ");
    }

    async ClickonWindJ2plant(plant:string,name: string) {
        await webactions.waitForElementAttached(this.J2Plant(plant));
        await webactions.clickElement(this.J2Plant(plant));
        let wind = await this.page.innerText(this.J2plantlabel);
        await webactions.delay(2000);
        expect.soft(wind).toContain(name);

    }
    async Checkwindplantdata() {
        let ws = await this.page.innerText(this.plantWindspeed);
        expect.soft(ws).not.toBe(" ");
        console.log("Wind Speed :- ",ws);
        let ap = await this.page.innerText(this.plantActivepower);
        expect.soft(ap).not.toBe(" ");
        console.log("Active Power :- ",ap);
        let at = await this.page.innerText(this.plantAmbienttemp);
        expect.soft(at).not.toBe(" ");
        console.log("Ambient Temperature :- ",at);
        let dg = await this.page.innerText(this.dailygeneration);
        expect.soft(dg).not.toBe(" ");
        console.log("Daily Generation :- ",dg);
    }

    async ClickonBackButton() {
       // await webactions.delay(2000);
        await this.page.click(this.GobacktoMapView);
    }
    async ClickonMapReduceButton() {
        // await webactions.delay(2000);
         await this.page.click(this.reducedmapview);
     }
    async ClickOnWindButton() {
        await webactions.waitForElementAttached(this.WindButton);
        await webactions.clickElement(this.WindButton);

    }
    // async DeviceStatusTile() {
    //     await webactions.waitForElementAttached(this.deviceStatus);
    //     let th1 = this.page.locator(this.deviceStatus);
    //     await webactions.delay(2000);
    //     expect.soft(th1).toBeVisible();
    //     let tv1 = this.page.locator(this.devicevalue);
    //     await webactions.delay(2000);
    //     expect.soft(tv1).toBeVisible();
    //     let tv2 = await this.page.innerText(this.devicevalue);
    //     expect.soft(tv2).not.toBe(" ");
    //     console.log("Device Status", tv2);
    // }
    async DeviceStatusTile() {
        await webactions.waitForElementAttached(this.deviceStatus);
        let th1 = this.page.locator(this.deviceStatus);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
      //  let tv1 = this.page.locator(this.devicevalue);
        let tv1=await this.page.locator('//div[@class="home-tile"]//div[contains(@id,"status")]').count();
        //let xlinescountvalue=await tv1.count();
      //  console.log("count",tv1);
        for(let x=1;x<=tv1;x++){
            if(await this.page.locator(`//div[@class="home-tile"]//div[contains(@id,"status")][${x}]//*[contains(@id,"count")]`).isVisible()){
                   let dvalue=await this.page.innerText(`//div[@class="home-tile"]//div[contains(@id,"status")][${x}]//*[contains(@id,"count")]`);
                expect.soft(dvalue).not.toBe(" ");
                console.log("Tile Inverter Status :- ",dvalue);
            }
        }
        // await webactions.delay(2000);
        // expect.soft(tv1).toBeVisible();
        // let tv2 = await this.page.innerText(this.devicevalue);
        // expect.soft(tv2).not.toBe(" ");
        // console.log("Device Status", tv2);
    }

    async TurbineStatusTile() {
        await webactions.waitForElementAttached(this.tubineStatus);
        let th1 = this.page.locator(this.tubineStatus);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
      //  let tv1 = this.page.locator(this.devicevalue);
        let tv1=await this.page.locator('//div[@class="home-tile"]//div[contains(@id,"status")]').count();
        //let xlinescountvalue=await tv1.count();
      //  console.log("count",tv1);
        for(let x=1;x<=tv1;x++){
            if(await this.page.locator(`//div[@class="home-tile"]//div[contains(@id,"status")][${x}]//*[contains(@id,"count")]`).isVisible()){
                   let dvalue=await this.page.innerText(`//div[@class="home-tile"]//div[contains(@id,"status")][${x}]//*[contains(@id,"count")]`);
                expect.soft(dvalue).not.toBe(" ");
                console.log("Tile Turbine Status :- ",dvalue);
            }
        }
    }
    async ActivePowerTile() {
        await webactions.waitForElementAttached(this.TtlActivePower);
        let th1 = this.page.locator(this.TtlActivePower);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.TtlActivePowervalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = (await this.page.innerText(this.TtlActivePowervalue)).split(" ");
        let p = parseInt(tv2[0]);
        expect.soft(p).toBeGreaterThan(0);
        console.log("Active Power :- ",p);
    } async AvgWindTile() {
        await webactions.waitForElementAttached(this.AvgWindSpeed);
        let th1 = this.page.locator(this.AvgWindSpeed);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.AvgWindSpeedvalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = (await this.page.innerText(this.AvgWindSpeedvalue)).split(" ");
        let p = parseInt(tv2[0]);
        expect.soft(p).toBeGreaterThan(0);
        console.log("Average Wind Speed :- ",p);
    }
    async GenerationTile() {
        await webactions.waitForElementAttached(this.GenerationToday);
        let th1 = this.page.locator(this.GenerationToday);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.GenerationTodayvalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = (await this.page.innerText(this.GenerationTodayvalue)).split(" ");
        let p = parseInt(tv2[0]);
        expect.soft(p).toBeGreaterThan(0);
        console.log("Generation Today :- ",p);
    }

    async PRTile() {
        await webactions.waitForElementAttached(this.PR);
        let th1 = this.page.locator(this.PR);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.PRvalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.PRvalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("PR :- ",tv2);
    }

    async DailyEnergyTile() {
        await webactions.waitForElementAttached(this.dailyenergy);
        let th1 = this.page.locator(this.dailyenergy);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.dailyenergyvalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.dailyenergyvalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Daily Energy :- ",tv2);
    }

    async DailyPOATile() {
        await webactions.waitForElementAttached(this.DailyPOA);
        let th1 = this.page.locator(this.DailyPOA);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.DailyPOAValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.DailyPOAValue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Daily POA :- ",tv2);
    }

    async ActivePowerTileSolar() {
        await webactions.waitForElementAttached(this.ActivePower);
        let th1 = this.page.locator(this.ActivePower);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.ActivePowervalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.ActivePowervalue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Active Power :- ",tv2);
    }


    async GetHiddenColumnsLanding(locator: string, totalColumns: number, num: number) {
        await webactions.doubleClickElement(`//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="${num}"]`);
        // //div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="3"]');
        let colmuns = [];
        await webactions.delay(5000);
        for (let i = 0; i <= totalColumns; i++) {
            if (await this.page.locator(this.landinwindheader(i+2)).isVisible()) {
                let hd = await this.page.locator(this.landinwindheader(i+2));
                //await hd.click();
                if (i < 11) {
                    await this.page.keyboard.press('ArrowRight');
                }
                let col = await hd.innerText();
                if (col.match('\n')) {
                    colmuns.push('');
                }else{
                colmuns.push(col);
                }
            }
        }
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }
   async GetHiddenColumnValuesLanding(columns: Array<string>, colNum: number) {
       let columnValues = []
       let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="4"]';
       await this.page.locator('//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="4"]').scrollIntoViewIfNeeded();
       await this.page.locator(SecondElement).click({ button: 'right' });
       await this.page.keyboard.press('Tab');
       for (let i = 0; i <(14); i++) {
          if(i<12){
           if ((await this.page.locator(`//div[@row-index="0"]//div[@col-id="${(i + colNum)}"]`)).isVisible()) {
               let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`);
               await rowElement.click({ button: 'right' });
               for (let j = 0; j < 2; j++)
                   await this.page.keyboard.press('Tab');
               let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;
               let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
               // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
               // await rowElement.click({ button: 'right' });
               // for (let j = 0; j < 2; j++)
               // await this.page.keyboard.press('Tab');
               // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
               // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
               if (colValue.match('\n')) {
                   columnValues.push(' ');
               }
                else {
                   columnValues.push(colValue);
               }
           }
           }
       }
      // console.log(columns.length);
       return columnValues;
   }

   async GetHiddenColumnValuesWindLanding(columns: Array<string>, colNum: number) {
    let columnValues = []
    // let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
    // await this.page.locator('//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]').scrollIntoViewIfNeeded();
    // await this.page.locator(SecondElement).click({ button: 'right' });
    // await this.page.keyboard.press('Tab');
    for (let i = 2; i <12; i++) {
       if(i==4){
        i=i+1;
       }
    //    if(i<8){
        if ((await this.page.locator(`//div[@row-index="0"]//div[@col-id="${(i)}"]`)).isVisible()) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i)}"]`);
            await rowElement.click({ button: 'right' });
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press('Tab');
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
            // await rowElement.click({ button: 'right' });
            // for (let j = 0; j < 2; j++)
            // await this.page.keyboard.press('Tab');
            // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
            // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValues.push(' ');
            }
             else {
                columnValues.push(colValue);
            }
         }
        // }
    }
   // console.log(columns.length);
    return columnValues;
}

/*
    async GetHiddenColumnsLanding(locator: string, totalColumns: number, num: number) {
        await webactions.doubleClickElement(`//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="${num}"]`);
        // //div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="3"]');
        let colmuns = [];
        await webactions.delay(5000);
        for (let i = 2; i <= totalColumns; i++) {
            if (await this.page.locator(this.landinwindheader(i)).isVisible()) {
                let hd = await this.page.locator(this.landinwindheader(i));
                //await hd.click();
                if (i < 10) {
                    await this.page.keyboard.press('ArrowRight');
                }
                let col = await hd.innerText();
                colmuns.push(col);
            }

        }


        // for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
        //     const elements = await this.page.$$(locator);
        //     for (const element of elements) {
        //         let col = await element.innerText();
        //         colmuns.push(col);

        //     }
        //     let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
        //     if (await rowElement.isVisible()) {
        //         await rowElement.click({ button: 'right' });
        //         for (let j = 0; j < 5; j++)
        //             await this.page.keyboard.press('Tab')
        //     }

        // }
        //console.log(colmuns);
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }
    async GetHiddenColumnValuesLanding(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
        await this.page.locator(SecondElement).click({ button: 'right' });
        await this.page.keyboard.press('Tab');
        for (let i = 0; i < columns.length; i++) {
            if(i==4){
                i++;
            }
            //if((i+colNum)<11){
            if ((await this.page.locator(`//div[@row-index="0"]//div[@col-id="${(i + colNum)}"]`)).isVisible()) {
                let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`);
                await rowElement.click({ button: 'right' });

                for (let j = 0; j < 2; j++)
                    await this.page.keyboard.press('Tab');
                let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;
                let colValue = await this.page.$eval(locator, (ele) => ele.textContent);


                // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
                // await rowElement.click({ button: 'right' });

                // for (let j = 0; j < 2; j++)
                // await this.page.keyboard.press('Tab');
                // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
                // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
                if (colValue.match('\n')) {
                    columnValues.push(' ');
                } else {
                    columnValues.push(colValue);
                }
            }

        }
        //console.log(columns.length);
        return columnValues;
    }
*/

    async GetHiddenColumnsLandingEose(locator: string, totalColumns: number, num: number) {
        await webactions.doubleClickElement(`//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="${num}"]`);
        // //div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="3"]');
        let colmuns = [];
        await webactions.delay(5000);
        for (let i = 2; i <= totalColumns; i++) {
            if (await this.page.locator(this.landinwindheader(i)).isVisible()) {
                let hd = await this.page.locator(this.landinwindheader(i));
                //await hd.click();
                if (i < 13) {
                    await this.page.keyboard.press('ArrowRight');
                }
                let col = await hd.innerText();
                colmuns.push(col);
            }
        }
        // for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
        //     const elements = await this.page.$$(locator);
        //     for (const element of elements) {
        //         let col = await element.innerText();
        //         colmuns.push(col);
        //     }
        //     let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
        //     if (await rowElement.isVisible()) {
        //         await rowElement.click({ button: 'right' });
        //         for (let j = 0; j < 5; j++)
        //             await this.page.keyboard.press('Tab')
        //     }
        // }
        //console.log(colmuns);
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }
    async GetHiddenColumnValuesLandingEose(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
        await this.page.locator(SecondElement).click({ button: 'right' });
        await this.page.keyboard.press('Tab');
        for (let i = 0; i <14; i++) {
            // if (i == 4) {
            //     i = i + 1
            // }
            if (await this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`).isVisible()) {
                let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`);
                await rowElement.click({ button: 'right' });
                // for (let j = 0; j < 2; j++)
                await this.page.keyboard.press('Tab');
                let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;
                let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
                // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
                // await rowElement.click({ button: 'right' });
                // for (let j = 0; j < 2; j++)
                // await this.page.keyboard.press('Tab');
                // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
                // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
                if (colValue.match('\n')) {
                    columnValues.push(' ');
                } else {
                    columnValues.push(colValue);
                }
            }
        }
       // console.log(columns.length);
        return columnValues;
    }

 /*   async GetHiddenColumnsLandingEose(locator: string, totalColumns: number, num: number) {
        await webactions.doubleClickElement(`//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="${num}"]`);
        // //div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="3"]');
        let colmuns = [];
        await webactions.delay(2000);
        for (let i = 3; i <= totalColumns; i++) {
            if (await this.page.locator(this.landinwindheader(i)).isVisible()) {
                let hd = await this.page.locator(this.landinwindheader(i));
                //await hd.click();
                if (i < 15) {
                    await this.page.keyboard.press('ArrowRight');
                }
                let col = await hd.innerText();
                colmuns.push(col);
            }

        }


        // for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
        //     const elements = await this.page.$$(locator);
        //     for (const element of elements) {
        //         let col = await element.innerText();
        //         colmuns.push(col);

        //     }
        //     let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
        //     if (await rowElement.isVisible()) {
        //         await rowElement.click({ button: 'right' });
        //         for (let j = 0; j < 5; j++)
        //             await this.page.keyboard.press('Tab')
        //     }

        // }
        //console.log(colmuns);
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }

    async GetHiddenColumnValuesLandingEose(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="3"]';
        await this.page.locator(SecondElement).click({ button: 'right' });
        await this.page.keyboard.press('Tab');
        for (let i = 0; i <= columns.length; i++) {
           
            // if(i===5){
            //     i = i + 1
            // }
            if (await this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`).isVisible()) {
                let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + colNum)}"]`);
                await rowElement.click({ button: 'right' });

                // for (let j = 0; j < 2; j++)
                await this.page.keyboard.press('Tab');
                let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;
                let colValue = await this.page.$eval(locator, (ele) => ele.textContent);


                // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
                // await rowElement.click({ button: 'right' });

                // for (let j = 0; j < 2; j++)
                // await this.page.keyboard.press('Tab');
                // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
                // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
                if (colValue.match('\n')) {
                    columnValues.push(' ');
                } else {
                    columnValues.push(colValue);
                }
            }

        }
        // console.log(columns.length);
        return columnValues;
    }

    */
    async ValueofConnectedBlocks() {
        await this.page.locator(this.EOSEConnected("Connected Blocks")).scrollIntoViewIfNeeded();
        let connected = await this.page.innerText(this.EOSEConnected("Connected Blocks"));
        console.log("Connected Or Disconnected blocks", connected);
        expect.soft(parseInt(connected)).toBeGreaterThanOrEqual(0);
        // let disconnected = await this.page.innerText(this.EOSEConnected("Disconnected Blocks"));
        // console.log("DisConnected blocks", disconnected);
        // expect.soft(parseInt(connected)).toBeGreaterThanOrEqual(0);

    }
    async ValueofEnabledBlocks() {
        await this.page.locator(this.EOSEEnabled("Enabled Blocks")).scrollIntoViewIfNeeded();
        let connected = await this.page.innerText(this.EOSEEnabled("Enabled Blocks"));
        console.log("Enabled or Disabled blocks", connected);
        expect.soft(parseInt(connected)).toBeGreaterThanOrEqual(0);
        // let disconnected = await this.page.innerText(this.EOSEEnabled("Disabled Blocks"));
        // console.log("Disabled blocks", disconnected);
        // expect.soft(parseInt(connected)).toBeGreaterThanOrEqual(0);

    }
    async ValuesOfWarningAlarmFault() {

        await this.page.locator(this.EoseWarningalarmfault("Warnings")).scrollIntoViewIfNeeded();
        let warning = await this.page.innerText(this.EoseWarningalarmfault("Warnings"));
        console.log("Warnings", warning);
        expect.soft(parseInt(warning)).toBeGreaterThanOrEqual(0);
        let fault = await this.page.innerText(this.EoseWarningalarmfault("Faults"));
        console.log("Faults", fault);
        expect.soft(parseInt(fault)).toBeGreaterThanOrEqual(0);
        let alarm = await this.page.innerText(this.EoseWarningalarmfault("Alarms"));
        console.log("alarm", alarm);
        expect.soft(parseInt(alarm)).toBeGreaterThanOrEqual(0);


    }

    async ScrollToLeftLanding() {
        let rowEle = this.page.locator(`//div[@class="ag-center-cols-clipper"]/div[@row-index="0"]/div[@aria-colindex="2"]`);
        await this.page.locator(`//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable headerClass-text-center ag-focus-managed" and @col-id="V_NodeId_27"]`);
        for (let j = 0; j < 10; j++) {
            if (!(await rowEle.isVisible())) {
                await this.page.keyboard.press("ArrowLeft");
            }
        }

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

    async NavigateToMenuTree1() {
        // await this.page.waitForElementAttached(this.Historyparent);
      await this.page.locator(this.HistoryparentE).click({force:true});
      
       await webactions.clickElement(this.Historyplant1E);
        await webactions.clickElement(this.HistoryPlant2E);
    }
    async NavigateToMenuTreeW() {
        // await this.page.waitForElementAttached(this.Historyparent);
      await this.page.locator(this.Historyparentw).click({force:true});
      
       await webactions.clickElement(this.Historyplant1w);
        await webactions.clickElement(this.HistoryPlant2w);
    }
    async NavigateToMenuTreeS() {
        // await this.page.waitForElementAttached(this.Historyparent);
      await this.page.locator(this.HistoryparentS).click({force:true});
      
     await this.page.locator(this.Historyplant1S).click({force:true});
        await this.page.locator(this.HistoryPlant2S).click({force:true});
    }

    async DragAndDropElements(source: string): Promise<void> {
        await webactions.dragAndDrop(this.source_location(source), this.drop_textBox);
    }
    async ClickonSearchButton() {
        await webactions.clickElement(this.search_btn);
    }
    async checkDatainHistoryPage(diff:number,date: string,p:string) {
        await webactions.doubleClickElement(`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-header"]//div[@col-id="itemTimeMoment"]`);
        

        await delay(2000);
        let min=(await this.page.innerText(this.Historypagelastdate)).split(" ");
        let dm=min[1].split(":");
        let m =parseInt(dm[0])*60
        m=m+parseInt(dm[1]);
        console.log("minutes:",m);
        if(diff!=1){
        let p1=(p.split("."));
        let p2=parseInt(p1[0]);
        let sRH1 = await this.page.locator(this.SelectRowinHistory(date));
        let k=0;
        await webactions.clickElement(`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index='0']`);
            //`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index='0']`);
        ////mat-tab-body[@id="mat-tab-content-1-0"]//div[@class="dropContent ng-star-inserted"]//div[@ref="leftContainer"]//div[@col-id="itemTimeMoment" and contains(text(),"00:00")]');
        for (let i = 0; i < 2000; i++) {
            if (!(await sRH1.isVisible())) {
                await this.page.keyboard.press('ArrowDown');
                k=k++;
            }
        }
        await sRH1.scrollIntoViewIfNeeded();
        let hisdata = this.page.locator(this.SelectRowinHistory(date));
        let rowindex = await hisdata.getAttribute('row-index');
        let colvalue = await this.page.innerText(`//div[@row-index="${rowindex}"]//div[@aria-colindex="3"]`);
        console.log("historyvalue", colvalue);
        expect.soft(parseInt(colvalue)).toEqual(p2);
    }
    await webactions.clickElement(this.HistoryDownload);
    await this.Downloadfile();
    // if(m>20){
    //     m=20;
    // }
    //    for(let r=0;r<m;r++){
    //     await this.page.click(`//div[@row-index="${r}"]//div[@aria-colindex="3"]`);
    //     let d1=await this.page.innerText(`//div[@row-index="${r}"]//div[@aria-colindex="3"]`);
    //     // await this.page.inputValue(this.Historypagedata(r));
    //     await delay(2000);
    //     console.log(d1);
    //     expect.soft(d1).not.toBe("");
    //     await this.page.keyboard.press('ArrowDown');
    //    }
    }
    async Downloadfile(){
        let download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.HistoryExceldownload)
        ]);
        let filename = download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
        console.log("History File downloaded:",filename);
        downfile=filename;
       await this.readExcel(filename);
    //    upfile=filename;
    }
  /*  async openBrowser(): Promise<ChromiumBrowser> {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/EHS_09062023_163407.xlsx');
        return browser;
    }
    */
    async readExcel(FDname:string): Promise<void> {
//console.log("open");
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(FDname)
            .then(function () {
                var worksheet = workbook.getWorksheet(1);
                let ttr:number;
                // var row = worksheet.getRow(2);
                // row.getCell(1).value = value1; // A5's value set to 5
                // row.commit();
                // console.log("close");
                console.log("Excel");
                worksheet.eachRow((row, rowNumber) => {
                    row.eachCell((cell, colNumber) => {
                        const value = cell.value;
                        // console.log(`Cell(${rowNumber}, ${colNumber}): ${value}`);
                        if(colNumber==2){
                            console.log(`Cell(${rowNumber}, ${colNumber}): ${value}`);
                            expect.soft(value).not.toBe("");
                        }
                    });
                });
            });
        }
        
     /*   let p1=(p.split("."));
        let p2=parseInt(p1[0]);
        let sRH1 = await this.page.locator(this.SelectRowinHistory(date));
        let k=0;
        await webactions.clickElement(`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index='0']`);
            //`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index='0']`);
        ////mat-tab-body[@id="mat-tab-content-1-0"]//div[@class="dropContent ng-star-inserted"]//div[@ref="leftContainer"]//div[@col-id="itemTimeMoment" and contains(text(),"00:00")]');
        for (let i = 0; i < 2000; i++) {
            if (!(await sRH1.isVisible())) {
                await this.page.keyboard.press('ArrowDown');
                k=k++;
            }
        }
        await sRH1.scrollIntoViewIfNeeded();
        let hisdata = this.page.locator(this.SelectRowinHistory(date));
        let rowindex = await hisdata.getAttribute('row-index');
        let colvalue = await this.page.innerText(`//div[@row-index="${rowindex}"]//div[@aria-colindex="3"]`);
        console.log("historyvalue", colvalue);
        expect.soft(parseInt(colvalue)).toEqual(p2);
    }
*/
    async GotoLandingPage() {
        await webactions.clickElement(this.landingpage);
    }

    async ClickonFirstplant(){
        await webactions.clickElement(this.firstplant);
    }
}









/*
import { LandPageObject } from '@objects/SmokeSuit/SolarSmoke/LandingPage_Object';
import { WebActions } from '@lib/WebActions'
import {testConfig} from '../../../../testConfig';
import {ComboBoxActions} from '@lib_web/ComboBoxActions'
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;




function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }

export class LandingPage extends LandPageObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
       
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);

       }

       async navigateToURL(environment: string): Promise<void> {
        // await webActions.navigateToURL(testConfig.qa);
        await webActions.navigateToURL(environment);
        await webActions.waitForElementAttached(this.email_txt);
    }

    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

       async ClickOnSolarButton(){
        await webactions.waitForElementAttached(this.SolarBtn);
        await webactions.clickElement(this.SolarBtn);

       }

       async ClickOnEOSEButton(){
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

       }
       async ChecktheRowforAccount(name:string){
        let acrow=this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
      }

      async filterfromcolumn(idname:string,name:string){ 
  
  
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(4000);
        let searchtxt=`//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt,name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
      }

    async FindthelocationButton(name:string){
    let LOC=this.page.locator(this.Locationbtn);
    expect.soft(LOC).toBeVisible();
    await webactions.delay(2000);
    await webactions.clickElement(this.Locationbtn);
    await webactions.delay(2000);
    await this.page.locator(this.firstclickonplant(name)).click();
    
  }

  async CheckEosefarmname(name:string){
    await webactions.waitForElementAttached(this.farmname);
    let farmname=await this.page.innerText(this.farmname);
    await webactions.delay(2000);
    console.log("name:",farmname);
    expect.soft(farmname).toContain(name);

  }
  async CheckSocValue(){
    let SocEose=await this.page.innerText(this.Socvalue);
    expect.soft(SocEose).not.toBe(" ");
    console.log(SocEose);

  }
  async findGRPlant(name:string){
    await webactions.waitForElementAttached(this.Alllocation);
    await webactions.clickElement(this.Alllocation);
    await webactions.delay(1000);
    await webactions.clickElement(this.GRlocation(name));
    
  }

  async GetColumns(locator: string){
    const elements = await this.page.$$(locator);
    let colmuns=[];
    for(const element of elements){
        let col =  await element.innerText();
        colmuns.push(col);
        console.log("head",col);
    }
    return colmuns;
}
async GetColumnValues(columns: Array<string>, colNUm: number) {
   let columnValues = []
    for (let i = 0; i < columns.length; i++) {
        let locator = `//div[@class="ag-center-cols-container"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
        let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
        if (colValue.match('\n')) {
            columnValues.push(' ');
        } else {
            columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
        }
    }
    return columnValues;
}

async ScrollToLeft(){
    let rowEle = this.page.locator(`//div[@class="ag-center-cols-clipper"]/div[@row-index="0"]/div[@aria-colindex="2"]`);
    await this.page.locator(`//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable headerClass-text-center ag-focus-managed" and @col-id="V_NodeId_18"]`);
        for (let j = 0; j < 10; j++)
    {
    if (!(await rowEle.isVisible())) {
                await this.page.keyboard.press("ArrowLeft");
    }
  }

}
async CheckPlantIsCommunicating(lastdatareceived:string){

    let lstdata=lastdatareceived.split(" ");
    console.log("lastdatareceived:",lstdata);
    let lstdatadate=lstdata[0].split("-");
    console.log("lastdatareceived:",lstdatadate[0]);

    console.log("lastdatareceived:",lstdatadate[1]);
    console.log("lastdatareceived:",lstdatadate[2]);
    
    var date=(new Date().toDateString());
            console.log(date);
    let day=date.split(" ");
    console.log("lastdatareceived:",day[1]);
    console.log("lastdatareceived:",day[2]);
    console.log("lastdatareceived:",day[3]);
    expect.soft(lstdatadate[0]).toContain(day[2]);
    expect.soft(lstdatadate[1]).toContain(day[1]);
    expect.soft(lstdatadate[2]).toContain(day[3]);


}

async CheckTheDateonHistory(){
    var date=(new Date().toLocaleDateString()).split("/");
    console.log(date);
    
    
    await webactions.waitForElementAttached(this.strtDate);
    let strt=await this.page.inputValue(this.strtDate);
   let max1=(strt).split(" ");
    console.log(strt);
    
    await webactions.delay(2000);

    let end=await this.page.inputValue(this.endDate);
   let max2=(end).split(" ");
    console.log(end);
   
    if(max1[0]==max2[0]){
        if(max1[1]==max2[1]){
            if(max1[2]==max2[2]){
    await webactions.delay(5000);
   expect.soft(max1[0]).toContain(date[2]);
   expect.soft(max1[1]).toContain(date[1]);
   expect.soft(max1[2]).toContain(date[0]);
   
            }
        }
    }
}
async projectTile(){
    await webactions.waitForElementAttached(this.projecttileheading);
    let th1=this.page.locator(this.projecttileheading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.projecttilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=(await this.page.innerText(this.projecttilevalue)).split(" ");
    let p=parseInt(tv2[0]);
    expect.soft(p).toBeGreaterThan(0);
    console.log(p);
}
async CapacityTile(){
    await webactions.waitForElementAttached(this.CapacityTileheading);
    let th1=this.page.locator(this.CapacityTileheading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.CapacityTilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=(await this.page.innerText(this.CapacityTilevalue)).split(" ");
    let p=parseInt(tv2[0]);
    expect.soft(p).toBeGreaterThan(0);
    console.log(p);
}
async SocTile(){
    await webactions.waitForElementAttached(this.SocTileHeading);
    let th1=this.page.locator(this.SocTileHeading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.SocTilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.SocTilevalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
    
}
async PowerratingTile(){
    await webactions.waitForElementAttached(this.PowrTileHeading);
    let th1=this.page.locator(this.PowrTileHeading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.PowrTilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.PowrTilevalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}
async EnergyRatingTile(){
    await webactions.waitForElementAttached(this.EnergyTileHeading);
    let th1=this.page.locator(this.EnergyTileHeading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.EnergyTilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.EnergyTilevalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}
async TotalPowerTile(){
    await webactions.waitForElementAttached(this.TtlPowerTileHeading);
    let th1=this.page.locator(this.TtlPowerTileHeading);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.TtlPowerTilevalue);
    //await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.TtlPowerTilevalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}
async solarPlantFarmView(name:string){
    await webactions.delay(2000);
    //solar
    await webactions.waitForElementAttached(this.farmname);
    let farmname=await this.page.innerText(this.farmname);
    await webactions.delay(2000);
    console.log("name:",farmname);
    expect.soft(farmname).toContain(name);
    await webactions.delay(2000);
    await webactions.clickElement(this.solarfarmview);
}

async Checkinspection(){
    await webactions.waitForElementAttached(this.solarinspectiontxt);
    let insp=await this.page.locator(this.solarinspectiontxt);
    await webactions.delay(2000);
    expect.soft(insp).toBeVisible();
    let insdate=await (await this.page.innerText(this.solarinspectiontxt)).split("_");
    let insdate1 =new Date(insdate[2]);
    let insdateArray=insdate1.toDateString();
    console.log("inspection1",insdateArray);
    
    let inspdate=await this.page.innerText(this.inspectiondatelabel);
    await webactions.delay(2000);
    console.log("Actualdate2",inspdate);
    expect.soft(insdateArray).toContain(inspdate);
   
   // let s1=this.page.locator(this.differentdefects("Vegetation"));
}

async clickonInspectiondropdown(date:string){
    //await webactions.waitForElementAttached(this.inspectdropdown);
    await this.page.locator('//div//ng-select[@id="selectInspection"]').click({ force: true });
    
    await webactions.clickElement(this.inspectiontoSelect(date));

}

async FilterScope(){
    await webactions.clickElement(this.inspectionfilter);
    await webactions.waitForElementAttached(this.scope);
    await webactions.clickElement(this.scope);
    await webactions.clickElement(this.filterapplyButton);
    let scop=await this.page.locator(this.filterScopeblack);
    await webactions.delay(2000);
    expect.soft(scop).toBeVisible();
    await webactions.delay(2000);
    await webactions.clickElement(this.scope);

}
async FilterString(colour:string){
    await webactions.clickElement('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');

    await webactions.clickElement(`//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomOut"]`);
    for(let q=1;q<=21;q++){
            await this.page.keyboard.down('ArrowDown');
            
        }
    await webactions.clickElement(this.String);
    await webactions.clickElement(this.filterapplyButton);
    let strng=this.page.locator(this.filterStringblue);
    await webactions.delay(2000);
    let fill=await strng.getAttribute('fill');
    console.log("Fill",fill);
    expect.soft(fill).toContain(colour);
    await webactions.delay(2000);
    await webactions.clickElement(this.String);
    await webactions.clickElement(this.inspectionfilter);

}
async Checkdeffects(){
    let defct=this.page.locator(this.defectslabel);
    await webactions.delay(2000);
    expect.soft(defct).toBeVisible();
    await webactions.delay(4000);
    await webactions.waitForElementAttached(this.differentdefects("Hotspot"));
   // await this.page.locator(this.differentdefects("Hotspot")).scrollIntoViewIfNeeded();
    await this.page.locator(this.differentdefects("Hotspot")).click();
    await webactions.delay(2000);
    //let locator=`//div[@class="collapsible-content-defect"]//div[@id="category-div"]//div[@id="category-Hotspot"]//parent::div[@id="category-div"]//label[@class="defect-panel-label"][1]`;
    await webactions.waitForElementAttached(this.HotspotDeffect);
    let loc=await this.page.locator(this.HotspotDeffect);
    expect.soft(loc).toBeVisible();

    // for(let q=1;q<=21;q++){
    //     await this.page.keyboard.down('ArrowDown');
        
    // }
    // for(let k=1;k<=6;k++){
    //     await this.page.keyboard.down('ArrowLeft');
    // }

    // await webactions.waitForElementAttached('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');
    // for(let p=1;p<=4;p++){
        
    //     await webactions.clickElement('//div[@class="zoom-in-out"]//div[@class="zoom-container"]//div[@id="zoomIn"]');
    //     // for(let q=1;q<=8;q++){
    //     //     await this.page.keyboard.down('ArrowDown');
    //     // }
    // }
    // for(let k=1;k<=4;k++){
    //     if(!(await this.page.locator(`//*[@class="leaflet-interactive"][1]`).isVisible())){
    //     await this.page.keyboard.down('ArrowLeft');
    //}
   // }
    await this.page.locator('//*[@class="leaflet-interactive"][1]').focus();
   // this.page.evaluate("document.body.style.zoom=2.0");
    await this.page.locator('//*[@class="leaflet-interactive"][1]').click({ force: true });
    //console.log("Count",c);
   //await webactions.clickElement(this.filterStringblue);
    await webactions.delay(5000);
   
   
    // await this.page.locator(locator).nth(1).waitFor();
    // const elements = await this.page.$$(locator);
    // console.log(elements)
    // let colmuns=[];
    // for(const element of elements){
    //     let col =  await element.innerText();
    //     colmuns.push(col);
    //     console.log("head",col);
    // }
}

async ValidateDefectleaflethead(name:string,code:string){
    await webactions.waitForElementAttached(this.Leafletheadlabel);
    let hdlabel=await this.page.innerText(this.Leafletheadlabel);
    console.log("headlabel:",hdlabel);
    await webactions.delay(2000);
    expect.soft(hdlabel).toContain(name);
    await webactions.delay(2000);
    let hdcode=await this.page.innerText(this.leafletHeadcode);
    console.log("headcode:",hdcode);
    await webactions.delay(2000);
    expect.soft(hdcode).toContain(code);
    await webactions.delay(2000);
}

async ValidateDefectLeafletbody(inspection:string,stringinfo:string){

    let inspinfo=await this.page.innerText(this.leafletinspectioninfo);
    console.log("inspectioninfo:",inspinfo);
    await webactions.delay(2000);
    expect.soft(inspinfo).toContain(inspection);
    await webactions.delay(2000);
    let strginf=await this.page.innerText(this.leafletstringinfo);
    console.log("stringinfo:",strginf);
    await webactions.delay(2000);
    expect.soft(strginf).toContain(stringinfo);
}

async ClickonWindJ2plant(name:string){
    await webactions.waitForElementAttached(this.J2Plant);
    await webactions.clickElement(this.J2Plant);
    let wind=await this.page.innerText(this.J2plantlabel);
    await webactions.delay(2000);
    expect.soft(wind).toContain(name);

}
async Checkwindplantdata(){
    let ws=await this.page.innerText(this.plantWindspeed);
    expect.soft(ws).not.toBe(" ");
    console.log(ws);
    let ap=await this.page.innerText(this.plantActivepower);
    expect.soft(ap).not.toBe(" ");
    console.log(ap);
    let at=await this.page.innerText(this.plantAmbienttemp);
    expect.soft(at).not.toBe(" ");
    console.log(at);
    let dg=await this.page.innerText(this.dailygeneration);
    expect.soft(dg).not.toBe(" ");
    console.log(dg);
}

async ClickonBackButton(){
    await webactions.delay(2000);
    await this.page.click(this.GobacktoMapView);
}
async ClickOnWindButton(){
    await webactions.waitForElementAttached(this.WindButton);
    await webactions.clickElement(this.WindButton);

   }
   async DeviceStatusTile(){
    await webactions.waitForElementAttached(this.deviceStatus);
    let th1=this.page.locator(this.deviceStatus);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.devicevalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.devicevalue);
    expect.soft(tv2).not.toBe(" ");
    console.log("Device Status",tv2);
}
async ActivePowerTile(){
    await webactions.waitForElementAttached(this.TtlActivePower);
    let th1=this.page.locator(this.TtlActivePower);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.TtlActivePowervalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=(await this.page.innerText(this.TtlActivePowervalue)).split(" ");
    let p=parseInt(tv2[0]);
    expect.soft(p).toBeGreaterThan(0);
    console.log(p);
}async AvgWindTile(){
    await webactions.waitForElementAttached(this.AvgWindSpeed);
    let th1=this.page.locator(this.AvgWindSpeed);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.AvgWindSpeedvalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=(await this.page.innerText(this.AvgWindSpeedvalue)).split(" ");
    let p=parseInt(tv2[0]);
    expect.soft(p).toBeGreaterThan(0);
    console.log(p);
}
async GenerationTile(){
    await webactions.waitForElementAttached(this.GenerationToday);
    let th1=this.page.locator(this.GenerationToday);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.GenerationTodayvalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=(await this.page.innerText(this.GenerationTodayvalue)).split(" ");
    let p=parseInt(tv2[0]);
    expect.soft(p).toBeGreaterThan(0);
    console.log(p);
}

async PRTile(){
    await webactions.waitForElementAttached(this.PR);
    let th1=this.page.locator(this.PR);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.PRvalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.PRvalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}

async DailyEnergyTile(){
    await webactions.waitForElementAttached(this.dailyenergy);
    let th1=this.page.locator(this.dailyenergy);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.dailyenergyvalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.dailyenergyvalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}

async DailyPOATile(){
    await webactions.waitForElementAttached(this.DailyPOA);
    let th1=this.page.locator(this.DailyPOA);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.DailyPOAValue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.DailyPOAValue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}

async ActivePowerTileSolar(){
    await webactions.waitForElementAttached(this.ActivePower);
    let th1=this.page.locator(this.ActivePower);
    await webactions.delay(2000);
    expect.soft(th1).toBeVisible();
    let tv1=this.page.locator(this.ActivePowervalue);
    await webactions.delay(2000);
    expect.soft(tv1).toBeVisible();
    let tv2=await this.page.innerText(this.ActivePowervalue);
    expect.soft(tv2).not.toBe(" ");
    console.log(tv2);
}


async GetHiddenColumnsLanding(locator: string, totalColumns: number) {
    await webactions.doubleClickElement('//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@aria-colindex="3"]');
    let colmuns = [];
    await webactions.delay(5000);
    for (let i = 2; i <= totalColumns; i++) {
        let hd=await this.page.locator(this.landinwindheader(i));
        //await hd.click();
        if(i<10){
            await this.page.keyboard.press('ArrowRight');
        }
        let col = await hd.innerText();
             colmuns.push(col);

    }


    // for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
    //     const elements = await this.page.$$(locator);
    //     for (const element of elements) {
    //         let col = await element.innerText();
    //         colmuns.push(col);
           
    //     }
    //     let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
    //     if (await rowElement.isVisible()) {
    //         await rowElement.click({ button: 'right' });
    //         for (let j = 0; j < 5; j++)
    //             await this.page.keyboard.press('Tab')
    //     }
        
    // }
    //console.log(colmuns);
    const uniqueColumns = new Set(colmuns)
    return colmuns = Array.from(uniqueColumns);
  }
  async GetHiddenColumnValuesLanding(columns: Array<string>, colNum: number) {
   let columnValues = []
    let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
    await this.page.locator(SecondElement).click({ button: 'right' });
    await this.page.keyboard.press('Tab');
    for (let i = 0; i <columns.length; i++) {
      //if((i+colNum)<11){
        if((await this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i+colNum)}"]`)).isVisible()){
         let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i+colNum)}"]`);
        await rowElement.click({ button: 'right' });
      
        for (let j = 0; j < 2; j++)
        await this.page.keyboard.press('Tab');
        let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;
       let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
      
    
        // let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 2)}"]`);
        // await rowElement.click({ button: 'right' });
      
        // for (let j = 0; j < 2; j++)
        // await this.page.keyboard.press('Tab');
        // let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
        // let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
        if (colValue.match('\n')) {
            columnValues.push(' ');
        } else {
            columnValues.push(colValue);
        }
    }

    }
    console.log(columns.length);
    return columnValues;
  }
  
  async ScrollToLeftLanding(){
    let rowEle = this.page.locator(`//div[@class="ag-center-cols-clipper"]/div[@row-index="0"]/div[@aria-colindex="2"]`);
    await this.page.locator(`//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable headerClass-text-center ag-focus-managed" and @col-id="V_NodeId_27"]`);
        for (let j = 0; j < 10; j++)
    {
    if (!(await rowEle.isVisible())) {
                await this.page.keyboard.press("ArrowLeft");
    }
  }

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

async NavigateToMenuTree(nodes: string): Promise<void> {
    let parentTree = '#dropFrom';
    await webactions.clickElement(parentTree);
    let menu_tree_node = (nodeName: string) => `//span[text()="${nodeName}"]`;
    

    let treeeArray: string[];
    if (nodes.includes(":")) {
        treeeArray = nodes.split(":");
        for (let i = 0; i < treeeArray.length; i++) {
            await webactions.clickElement(menu_tree_node(treeeArray[i]));
        }
    } else {
        await webactions.clickElement(menu_tree_node(nodes));
    }
}

async DragAndDropElements(source: string): Promise<void> {
    await webactions.dragAndDrop(this.source_location(source), this.drop_textBox);
}
async ClickonSearchButton(){
    await webactions.clickElement(this.search_btn);
   }
async checkDatainHistoryPage(date:string){
  let sRH1=await this.page.locator(this.SelectRowinHistory(date));
 
    await webactions.clickElement('//mat-tab-body[@id="mat-tab-content-1-0"]//div[@class="dropContent ng-star-inserted"]//div[@ref="leftContainer"]//div[@col-id="itemTimeMoment" and contains(text(),"00:00")]');
    for(let i=0;i<1000;i++){
        if(!(await sRH1.isVisible())){
        await this.page.keyboard.press('ArrowDown');
    }
  }
    let hisdata=this.page.locator(this.SelectRowinHistory(date));
    let rowindex=await hisdata.getAttribute('row-index');
    let colvalue=await this.page.innerText(`//div[@row-index="${rowindex}"]//div[@aria-colindex="3"]`);
    console.log("hisvalue",colvalue);
}

async GotoLandingPage(){
    await webactions.clickElement(this.landingpage);
}
}
*/