export class Dashboards_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected assertiontilesobj = (value: string) => `//div[@class="card-name"]/h4[contains(text(),"${value}")]/parent::div/h3`
    
    // protected objTPR = `//div[@class="techinical-charts"]//div/h2[@class="txt-reg proj-value"]`;
    protected objTPR = `//div[@class="techinical-charts"]//div/h2[@class="txt-reg proj-value"]`;
    protected objTDE = `//div[@class="techinical-charts daily-energy-chart"]//div/h2[@class="txt-reg"]`;
    protected inverterPRtile1 = `//div[1][@class="highcharts-label highcharts-data-label highcharts-data-label-color-undefined highcharts-tracker"]//span//span[2]`;

    protected homebutton = //`//div[@id="LeftNav"]//a//*[@width="64" and @height="53.2"]`;
                            `//div[@id="LeftNav"]//div[@class="top"]//div//a`;
    protected checkpagename = `//div[@class="project-name"]//p`;
    protected testPR = `//div[@class="layout-container"]//div/h2[@class="txt-reg proj-value"]`;
    protected testDE = `//div[@class="value-head bartileChart"]//div/h2[@class="txt-reg"]`;
    protected short_name_menu_btn =`//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    protected technicalnamebutton =`//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="Name"]`;
    protected technical_name_menu_btn =`//div[@col-id="Name"]//span[@class="ag-icon ag-icon-menu"]`;
    protected technical_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected tecnicalclickonfirstelement = `//div[@class="ag-pinned-left-cols-container"]//div[@row-index="0"]//div[@aria-colindex="1"]//a`;
    protected wind_button = `//button[@id="button-2"]`;
    protected dashboard = `//ng-select[@id="select-dashboard"]`;
    protected dashboarddropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected searchbtn = `#autorenew-btn`;
    protected assertiondailyenergy = (value: string) => `//div[@id="bar-tile"]//h2[contains(text(),"${value}")]//parent::div//parent::div//div//b`;
    protected assertiontotalenergy = (value: string) => `//h2[contains(text(),"${value}")]//parent::div//b`;
    protected assertionheatmap = `//div[@id="heatmapContainer"]//div//span[@class="chartTooltip"]`;
    protected assertionGuage = (value: string) => `//div[@id="gauge-controls"]//h2[contains(text(),"${value}")]//parent::div//parent::div//div//b`;
    protected assertiondidimaturbinestatus = `//body[@data-theme="light"]//div[@class="highcharts-tooltip-container"][3]//span//b`;

    // EOSE

    protected EoseBtn=`#button-3`;
    // protected dashboard=`#select-dashboard`;
    protected dropdownnames=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected search=`#autorenew-btn`;
    protected tilecumulativeenergy=`#title-Tile1`;
    protected cumulativeenergyValue=`#value-Tile1`;
    protected TileStoredenergy=`#title-Tile2`;
    protected StoredenergyValue=`#value-Tile2`;
    protected Guage=`#title-Gauge1`;
    protected GuageValue=`#value-Gauge1`;
    protected Energyrating=`#titleBarTile1`;
    protected energyRatingValue=`#valueBarTile1`;

    protected generationToday=`#title-Chart1`;
}