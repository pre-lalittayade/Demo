export class CMMS_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected assertionpmscheduler = `//div[@class="action-panel"]`;
    protected short_name_menu_btn = `//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = (value: string) => `//div[@class="ag-center-cols-container"]//div[@col-id="ProjectLongName"]//span[text()="${value}"]`;
    // protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected wo_clickonfirstelement = `//mat-expansion-panel[@id="work-order-handle-event-0"]//mat-expansion-panel-header`;
    protected wo_clickonfirstelement1 = `//div//p[@id="work-order-p-handle-event-00"]`;
    protected listviewbtn = `//button//*[@class="tab ng-star-inserted"]`;
    protected assertionworkorder = `//label[contains(text(),'Project')]`;
    protected project_dropdown = (value: string) =>
        `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    protected startdateassertion = `//div//*[@translate="StartDateText"]`;
    protected startdateassertion1 = `//div[@row-index="0"]//div[@col-id="ScheduleStartDate"]`;
    protected enddateassertion = `//div//*[@translate="EndDateText"]`;
    protected enddateassertion1 = `//div[@row-index="0"]//div[@col-id="ScheduleEndDate"]`;
    protected projectassertion = `//div[@class="ag-header-cell-label"]//span[contains(text(),"Project")]`;
    protected projectassertion1 = `//div[@row-index="0"]//div[@col-id="ProjectName"]`;
    protected project = `//span[@class="dropdown-btn"]`;
    protected projectdropdownvalue = (value: string) => `//div[@class="dropdown-list"]//div[text()="${value}"]`;
    protected popup = `//button[contains(text(),"Ok")]`;
    protected searchbtn = `//button[@id="SearchId"]`;
    protected edit = `//button[@id="jmr-btn-action-Edit"]`;
    protected editbutton = `//mat-icon[contains(text(),"edit")]//parent::button`;
    protected addbutton = `//mat-icon[contains(text(),"add")]//parent::button`;
    protected canclebutton = `//mat-icon[contains(text(),"cancel")]//parent::button`;
    protected popupyes = `//button[contains(text(),"Yes")]`;
    protected tabbtn = (value: string) => `//div[@class="mat-tab-label mat-focus-indicator mat-ripple ng-star-inserted"]//div[text()="${value}"]`;
    protected filterbutton = `//button[@id="FilterId"]`;
    protected closebutton = `//button[@id="CloseId"]`;
    protected closebutton1 = `//mat-icon[contains(text(),"cancel")]//parent::button`;
    protected canclebutton1 = `//mat-icon[contains(text(),"close")]//parent::button`;

    protected assertion1 = `//div[@row-id="0"]//div[@col-id="ProjectName"]`;
    //`//div[@row-id="0"]//div[@col-id="SPVName"]`;
    protected assertion2 = `//div[@aria-rowindex="1"]//div[@col-id="ProjectName"]`;
    //`//div[@aria-rowindex="1"]//div[@col-id="SPVName"]`;
    protected granularity = (value: string) => `//div[@class="btn-group"]//div[contains(text(),"${value}")]`
    protected template =  `//ng-select[@id="TemplateId"]`;
    protected templatedropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`
    //`//li[@class="ng-star-inserted"]/a[normalize-space(text())= "${value}"]`
    // `//div[contains(@class,"ng-option ng-star-inserted")]//span[normalize-space(text())="${value}"]`;
    //  `//div[@class="ng-dropdown-panel-items scroll-host"]//span[contains(text(),"${value})"]`;



}