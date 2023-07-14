export class Reporting_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected assertion = `//div//div[@class="layout-container"]`;
    protected ppacapacity = `//span[@id="daily-performance-report-PPA-value"]`;
    protected dccapacity = `//span[@id="daily-performance-report-DCC-value"]`;
    protected addbutton =`//button[@title="Add"]`;
    protected canclebutton =`//button[@title="Cancel"]`;
    protected popup = `//button[contains(text(),"Yes")]`;
    protected filterbutton=`//button[@title="Filter"]`;
    protected closebutton =`//button[@title="Close"]`;
    protected template = `//ng-select[@id="TemplateId"]`;
    protected templatedropdownvalue = (value: string) => `//div[@class="ng-option ng-star-inserted"]//span[contains(text(),"${value}")]`;
    protected search = `//button[@id="AutoRenewId"]`;
    protected gird1column = `//span[contains(text(),"Performance KPI")]`;
    protected grid1columnvalue = `//ag-grid-angular[@id="daily-performance-grid1"]//div[@row-index="0"]//div[@aria-colindex="2"]`;
    protected gird2column = `//span[contains(text(),"Operation KPI")]`;
    protected grid2columnvalue = `//ag-grid-angular[@id="daily-performance-grid2"]//div[@row-index="0"]//div[@aria-colindex="2"]`;



}