export class AlaramsEvent_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected wind_button = `//button[@id="button-2"]`;
    protected short_name_menu_btn =`//div[@col-id="plantName"]//*//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//span[contains(text(),"Plant")]//parent::div[@class="ag-header-cell-label"]`;
   
    protected name_menu_btn = `//div[@col-id="CustomerName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected namebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="CustomerName"]`;
   
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@row-index="0"]//div[@col-id="plantName"]//span//a`;
    protected clickonfirstelementEOSE = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;

    protected clickonelement = `//a[contains(text(),"Prethos ")]`;
    protected clickonokbtn = `//button[contains(text(),"Ok")]`;
    protected assertion = `//div[@ref="gridHeader"]//div[@aria-rowindex="1"]//div[@aria-colindex="2"]`;
    protected assertionAN = `//div[@ref="leftContainer"]//div[@aria-rowindex="2"]//div[@aria-colindex="2"]`;
    protected assertion1 = `//div[@aria-rowindex="2"]//div[@col-id="ControllerName"]`;
    protected assertion2 = `//div[@aria-rowindex="2"]//div[@col-id="ControllerName"]`;

    protected popokbtn = `//button[contains(text(),"Ok")]`;

    //Alarm management
    protected statusbutton = (value: string) => `//span[contains(text(),"${value}")]//ancestor::button`;
    protected costumalertsbutton = `//button[contains(text(),"Custom Alerts")]`;
    protected refreshbutton = `//span[@class="icon icon-Refresh"]//parent::button[@class="btn btn-default action-button mat-tooltip-trigger"]`;
    protected eventrefreshbutton = `//span[@class="icon icon-Refresh"]//ancestor::button`;



    //EOSE 

    protected EoseBtn=`#button-3`;
    protected rowcheck=`//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    protected sortingfromcolumn=(name:string)=>`//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
protected buttonsforsorting=(label:string)=>`//span[@aria-label="${label}"]`;//general,filter,columns

protected checktableload=`//div[@class="table-wrapper m-t-16 mb-3"]//ag-grid-angular[@class="ag-theme-alpine"]`;

protected DetailsPlant=`//div[@class="picklist"]//ng-select[@name="Plant"]`;
protected multiselectDropdown=(name:string)=>`//div[contains(@class,"cmms-chart-multiselect picklist")]//*[@name="${name}"]//div[@class="multiselect-dropdown"]//span[@class="dropdown-btn"]`;
protected ResetFilter=`//div//button[@class="resetFilter ng-star-inserted"]`;
protected dropdown=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;

protected Multivaluedropdown=`//div[@class="dropdown-list"]//ul[@class="item1"]//li//input[@aria-label="multiselect-select-all"]`;

protected checkDetailtableload=`//div[@class="table-container"]//*[@class="ag-theme-alpine"]`;

protected customAlerts=`//div[@class="tab-section"]//div[@class="tab-pills-container"]//button[@class="pill"]`;

protected okpopup=`//div//button[normalize-space(text())="Ok"]`;
protected custalrtTable=`//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[@ref="gridHeader"]`;


protected timespan=(value: string) =>`//div[@class="range-w-datepicker"]//mat-button-toggle//button[@class="mat-button-toggle-button mat-focus-indicator"]//span[text()="${value}"]`;
protected timespanmonth=`#mat-button-toggle-15-button`;
protected timespanweek=`#mat-button-toggle-16-button`;
protected timespandaycustom=`#mat-button-toggle-17-button`;

protected Statebutton=`//button[@class="state-pill active ng-star-inserted"]//span[@class="pill-value state-value"]`;
protected Faultsbutton=`//button[@class="faults-pill active"]//span[@class="pill-value faults-value"]`;
protected Alarmbutton=`//button[@class="alarms-pill active ng-star-inserted"]//span[@class="pill-value alarms-value"]`;
protected Warningbutton=`//button[@class="warnings-pill active"]//span[@class="pill-value warnings-value"]`;

protected Criticalbutton=`//button[@class="critical-pill active"]//span[@class="pill-value critical-value"]`;
protected Highbutton=`//button[@class="high-pill active"]//span[@class="pill-value high-value"]`;
protected Mediumbutton=`//button[@class="medium-pill active"]//span[@class="pill-value medium-value"]`;
protected Lowbutton=`//button[@class="low-pill active"]//span[@class="pill-value low-value"]`;

}