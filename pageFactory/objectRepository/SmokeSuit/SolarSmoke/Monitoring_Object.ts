export class Monitoring_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected assertiontilesobj = (value: string) => `//div[@class="card-name"]/h4[contains(text(),"${value}")]/parent::div/h3`;
    protected assertiontilesobj1 = `//div[@class="value-head bartileChart"]//div/h2[@class="txt-reg"]`;
    protected assertiontilesobj2 = (value: string) => `//tr[@class="ng-star-inserted"]//*[contains(text(),"Phase R")]//parent::tr//td[${value}]`;
    protected ass_poa_ghi = (value: string) => `//div[@class="value-head bartileChart"]//div/h2[contains(text(),"${value}")]//parent::div//parent::div//div//*[@class="txt-reg"]`;
    protected assertiongenerator = (value: string) => `//div[@class="card-name"]//h4[contains(text(),"${value}")]//parent::div//h3`;
    protected wind_button = `//button[@id="button-2"]`;
    protected short_name_menu_btn = `//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    
    protected name_menu_btn = `//div[@col-id="CustomerName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected namebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="CustomerName"]`;
    
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected clickonfirstelementEOSE = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected datanotpresentokbtn = `//div[@class="cdk-overlay-pane"]//button`;
    protected turbinedropdown = `//ng-select[@id="deviceId"]`;
    protected turbinedropdownvalues = (value: string) => `//div[contains(@class,"ng-option")]//span[contains(text(),"${value}")]`;
    protected turbineassertion = `//div[@id="Chart1"]//*[@class="highcharts-legend-item highcharts-line-series highcharts-color-0 highcharts-series-0"]//*[name()='text']`;

    //Configur page
    protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;
    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns
    protected project = `//ng-select[@id='ProjectId']`;
    protected account = `//ng-select[@id="AccountId"]`;
    protected dashboard = `//ng-select[@id="selectDashboard"]`;
    protected dropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[contains(text(),"${value}")]`;
    protected projectdropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected search = `#refresh-btn`;
    protected backtoinverter = `#backToSite`;

    //configure page solar

    //     protected rowcheck=`//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    //     protected sortingfromcolumn=(name:string)=>`//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    // protected buttonsforsorting=(label:string)=>`//span[@aria-label="${label}"]`;//general,filter,columns

    protected backtodashboard = `#backToSite`;
    protected ActivePowerTile = `#title-Tile5`;
    protected Activepowervalue = `#value-Tile5`;
    protected PVpower = `#title-Tile2`;
    protected PVpowerValue = `#value-Tile2`;
    protected ReactiveP = `#title-Tile1`;
    protected ReactivePValue = `#value-Tile1`;
    protected DailyE = `#title-Tile4`;
    protected DailyEValue = `#value-Tile4`;
    protected ACFrequency = `#title-Tile3`;
    protected ACFrequencyValue = `#value-Tile3`;
    protected Powerfactor = `#title-Tile6`;
    protected PowerfactorValue = `#value-Tile6`;

    // protected GraphValue = `//div[@id="bar-tile"]//div//h2//b[@id="value"]`;
    protected graphbar = `//div[@id="bartile-chart"]//*[@class="highcharts-series-group"]//*[name()='rect']`;
    protected graphbartooltip = `//div[@id="bartile-chart"]//div[@class="highcharts-label highcharts-tooltip highcharts-color-undefined"]//span[@class="chartTooltip"]`;
    // protected Graph = `#title`;
    protected Graph = `#titleBarTile1`;

    // protected Table = `#table-control`;
    // protected Graph2 = `#Chart1`;

    protected GraphValue = `//div[@id="bar-tile"]//div//h2//b[@id="valueBarTile1"]`;

    protected Table = `#table-control-Table1`;
    protected Graph2 = `#Chart1`;




    //Monitoring EOSE page
    protected EoseBtn = `#button-3`;
    // protected rowcheck=`//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    // protected sortingfromcolumn=(name:string)=>`//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    // protected buttonsforsorting=(label:string)=>`//span[@aria-label="${label}"]`;//general,filter,columns

    protected soc = `#Tile1`;
    protected socvalue = `#value-Tile1`;
    protected Checkpagename = `//div[@class="project-name"]//p[@class="txt-14 txt-reg"]`;

    protected configureAccount = `#AccountId`;
    protected configureProject = `#ProjectId`;
    protected configureDashboard = `#selectDashboard`;
    protected configureRefresh = `#refresh-btn`;
    protected dropdown = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;

    protected Afterloadingtable = `//div[@class="common-controls ng-star-inserted"][1]//tr[@class="mat-header-row ng-star-inserted"]`;

    protected EnergyBlocktile = `#Tile1`;

    protected hyperlinkrow = (name: string) => `//div[@id="title-Grid1"]//div[@row-index="0"]//div[@col-id="Name"]//span//*//a[contains(text(),"${name}")]`;

    protected backtositSubgrpStrng = `#backToSite`;
    protected backtoBlock = `#BlockId`;


}