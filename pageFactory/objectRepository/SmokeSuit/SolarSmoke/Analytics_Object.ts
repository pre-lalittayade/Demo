export class Analyticst_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected refreshbtn = `//button[@id="profiling-date-refresh-button-2"]`;
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected checkpagename = `//div[@class="project-name"]//p`;
    protected searchbutton = `#ams-searchId`;

    protected assertion = (value: string) => `//div[@class="pt-4 pb-1"]//*[contains(text(),"${value}")]//parent::div//parent::div//div[@class="text-primary"]//app-data-availability-progress-bar//parent::div//span`;
    protected assertionlosscalculation = (value: string) => `//div[@id="loss-distrbution-info"]//div[contains(text(),"Loss Distribution")]//parent::div//span[@class="highcharts-subtitle"]`;
    protected assertionDA = (value: string) => `//div[normalize-space (text())="${value}"]//parent::div//h2`;
    protected assertionDQ = (value: string) => `//span[normalize-space (text())="${value}"]//parent::div//h2`;
    protected plantinverterwmsbutton = (value: string) => `//button//span[contains(text(),"${value}")]`
    protected tahoeV2button = `//span[contains(text(),"Go to Analytics")]`;
    protected datagovernancebutton = `//span[contains(text(),"Go to Data Governance")]`;

    protected source_location = (value: string) => `//span[contains(text(), "${value}")]`;
    protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
    protected colunmname = `//div[@role="rowgroup"]//div[@row-index="0"]/div[@aria-colindex=1]`;
    protected colunmlocation = `//div[@role="rowgroup"]//div[@row-index="0"]/div[@aria-colindex=2]`;
    protected colunmda = `//div[@role="rowgroup"]//div[@row-index="0"]/div[@aria-colindex=3]`;

    // protected project_dropdown =`//div[@class="ng-dropdown-panel-items scroll-host"]`;
    //`//div[@id="projectId"]//span[normalize-space(text())="${value}")]//parent::div//span[@class="ng-value-label ng-star-inserted"]`;
    // `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    protected chart_menu_btn = '//button[@aria-label="View chart menu"]'
    protected chart_menu_item = (menuItem: string) => `//li[contains(text(), "${menuItem}")]`;
    protected grid_view_btn = `//button[@id='iconId']`;
    protected grid_view_btnprof = `//button[@id='IconId']`;
    protected setting_btn = `//button[@id='settingId']`;
    protected setting1 = `//button[@id='SettingId']`;
    protected amsassertion1 = `//app-ag-grid-table[@id="ams-grid1"]//span[contains(text(),"State")]`;
    protected amsassertion2 = `//app-ag-grid-table[@id="ams-grid1"]//div[@aria-rowindex="2"]//div[@col-id="state"]`;
    protected amsassertion3 = `//app-ag-grid-table[@id="ams-grid2"]//span[contains(text(),"State")]`;
    protected amsassertion4 = `//app-ag-grid-table[@id="ams-grid2"]//div[@aria-rowindex="2"]//div[@col-id="state"]`;

    protected graph = `//div[@class="chart-type-row align-chart-type-moz"]//span[1]`;
    protected graph_1 = `//div[@class="chart-type-row align-chart-type-moz"]//span[2]`;
    protected graph_2 = `//div[@class="chart-type-row align-chart-type-moz"]//span[3]`;
    protected graph_3 = `//div[@class="chart-type-row align-chart-type-moz"]//span[4]`;
    protected graph_4 = `//div[@class="chart-type-row align-chart-type-moz"]//span[5]`;
    protected graph_5 = `//div[@class="chart-type-row align-chart-type-moz"]//span[6]`;
    protected assertionprof = `//div[@id="chartGrid3_1"]`;
    protected user = `//div[@class="highcharts-data-table"]//*[contains(text(),"Chart")]`;
    protected assertion1 = //`//div[@ref="gridHeader"]//div[@col-id="datetime"]//*//span[@ref="eText"]`;
        `//div[@class="ag-header-cell-label"]//span[contains(text(),"Time")]`;
    protected assertionprof1 = `//div[@row-index="0"]//div[@col-id="itemTimeMoment"]`;
    protected assertiontrends1 = `//tr//th[contains(text(),"DateTime")]`;
    protected assertiontrends2 = `//tbody//tr[1]//td`;
    //div[@class="highcharts-data-table"]//*[contains(text(),"Chart")]
    //Tahoev2

    protected valueassertion = (value: string) => `//div[@class="container-descp"]//div[@class="text" and contains(text(),"${value}")]//parent::div//div[@class="value"]`;
    protected overalllossdistributionassertion = (value: string) => `//div[@class="highcharts-container "]//span[text()="${value}"]//parent::div//span[@class="highcharts-subtitle"]`
    protected ldbp = `//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@aria-colindex="1"]`;
    protected tahoepageass = `//*[@class="highcharts-title"]`;
    protected wind_button = `//button[@id="button-2"]`;
    protected Dropdownvalues = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected clickonproject = `//ng-select[@id='ProjectId']`;
    protected searchbtn = `//button[@id='SearchId']`;
    protected CalenderDate = (value: string) => `//div/h6[contains(text(),"${value}")]//parent::div//button`;
    protected short_name_menu_btn = `//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;

    protected name_menu_btn = `//div[@col-id="CustomerName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected namebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="CustomerName"]`;

    // protected short_name_menu_btn =`//div[@col-id="plantName"]//*//span[@class="ag-icon ag-icon-menu"]`;
    // protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    // protected Shortnamebox_hover = `//span[contains(text(),"Plant")]//parent::div[@class="ag-header-cell-label"]`;
    // protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    // protected clickonfirstelement = `//div[@row-index="0"]//div[@col-id="plantName"]//span//a`;


    protected datanotpresentokbtn = `//div[@class="cdk-overlay-pane"]//button`;
    protected costomer = `//div/h6[contains(text(),"Customer")]`;
    protected assertionproject = `//div/h6[contains(text(),"Project")]`;
    protected assertionwtg = `//div[@id="plotly-graph-1"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    // `//*[contains(text(),"WTG Efficiency")]`;
    protected assertionefficiency = `//div[@id="plotly-graph-2"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    protected assertionactualwtgplf = `//div[@id="plotly-graph-4"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    protected assertiondataavailability1 = `//div[@id="plotly-graph-6"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    protected assertiondataavailability = `//div[@id="plotly-graph-2"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    protected assertionactualwtg = `//div[@id="plotly-graph-3"]//*[name()='svg' and @class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@class="number"]`;
    protected assNDAP = `//*[@data-unformatted="Nacelle Direction Vs Active Power"]`;

    //AMS
    protected project_dropdown = (value: string) => `//ng-select[@id="projects-list"]//div[contains(text(), "${value}")]/parent::div`;
    // `//div[@class="row dropdown-container"]//div[contains(text(), "${value}")]/parent::div`;
    //`//div[@class="row dropdown-container"]//div[contains(text(), "${value}")]//parent::div`;
    //plant perfornamce
    protected dropdowns = (value: string) => `//div[@class="row dropdown-container"]//div[contains(text(), "${value}")]/parent::div`;
    protected project = `//ng-select[@id="ProjectId"]`;
    protected projectdropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    // `//div[@class="ng-dropdown-panel-items scroll-host"]//span[normalize-space(text())="${value}"]`;
    protected analysis = `//h6[contains(text(),"Analysis")]//parent::div//ng-select`;
    protected analysisdropdownvalue = (value: string) => `//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected customer = `//h6[contains(text(),"Customer")]//parent::div//ng-select`;
    protected customerdropdownvalue = (value: string) => `//div[@class="ng-option ng-option-selected ng-option-marked ng-star-inserted"]//span[normalize-space(text())="${value}"]`;
    protected makemodel = `//h6[contains(text(),"Make Model")]//parent::div//ng-select`;
    protected makemodeldropdownvalue = (value: string) => `//div[@class="ng-option ng-option-selected ng-option-marked ng-star-inserted"]//span[normalize-space(text())="${value}"]`;
    protected searchbuttton = `//button[@id="SearchId"]`;
    protected assertionplantperformance = `//div[@id="plotly-graph-1"]//*[contains(text(),"Power Curves")]`;

    //String Analysis
    protected project_sa = `//div[@id='projectId']//ng-select[@placeholder="Plant Name"]`;
    protected projectdropdownvalue_sa = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected inverter_sa = `//span[@class="dropdown-btn"]`;
    protected inverterdropdownvalue_sa = (value: string) => `//div[@class="dropdown-list"]//div[contains(text(),"${value}")]//parent::li`;
    protected moduletype_sa = `//div[@id='projectId']//ng-select[@placeholder="Module Type"]`;
    protected moduletypedropdownvalue_sa = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected search_sa = `//div[@class="widget-control flexit cg-12 string-analysis-subcard"]//button[@id="searchId"]`;
    protected assertion_sa = `//div[@row-index="0"]//div[@aria-colindex="3"]`;
    protected assertion_pie0 = `//*[@class="highcharts-label highcharts-data-label highcharts-data-label-color-0"]//*[@class="highcharts-text-outline"]`;
    protected assertion_pie1 = `//*[@class="highcharts-label highcharts-data-label highcharts-data-label-color-1"]//*[@class="highcharts-text-outline"]`;
    protected assertion_pie2 = `//*[@class="highcharts-label highcharts-data-label highcharts-data-label-color-2"]//*[@class="highcharts-text-outline"]`;
    protected assertion_xy0 = `//div[@class="highcharts-container "]//*[@class="highcharts-axis-labels highcharts-yaxis-labels"][1]//*[2]`;
    protected assertion_xy1 = `//div[@class="highcharts-container "]//*[@class="highcharts-axis-labels highcharts-yaxis-labels"][1]//*[3]`;

    // Plant power forecasting
    protected project_ppf = `//ng-select[@id='ProjectId']`;
    protected projectdropdownvalue_ppf = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected search_ppf = `//button[@id="searchId"]`;
    protected assertion_ppf = `//div[@id="plotly-graph-2"]//*[@class="numbers"]//*[@data-unformatted]`;

    //Data Governance
    protected clickondataavaibality = `//div[@row-index="0"]//div[@aria-colindex="3"]`;
    protected user_DG = `//div[contains(text(),"Page Size:")]`;
    protected assertion_dm = `//*[text()="Plant Parameters"]`;


    ///EOSE

    // protected EoseBtn = `#button-3`;
    // protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    // protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    // protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns

    // protected dailycyclelatvalue = (label: string) => `//div[@class="svg-container"]//*[@class="subplot xy"]//*[@class="x"]//*[name()='path'][7]`
    // //`//div[@class="svg-container"]//*[@class="subplot xy"]//*[@class="x"]//*[@class="xgrid crisp"][7]`;
    // //div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="axistext"]//*[text()="${label}"];
    // protected dailycyclestatusstateOfCharge = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[text()="State Of Cha..."]//following-sibling::*[@class="nums"]`;
    // protected dailycyclestatusEnergyBlockCurrent = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"][1]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"][1]`;
    // protected dailycyclestatusEnergyBlockVoltage = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"][2]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"][1]`;
    // protected ProjectDPS = `#ProjectId`;
    // protected EnergyGroupName = `//div[@class="widget-control flexit cg-12"]//h6[text()="Energy Group Name"]//parent::div//div[@class="ng-select-container ng-has-value"]`;
    // protected StartDate = `//div//input[@id="startDateId"]//parent::div//mat-datepicker-toggle//button`;
    // protected dropdown = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    // protected SearchBtnDPS = `#SearchId`;
    // protected prethosdropdown = `//div[@class="plotly-container full-width large-graph-div"]//div[@class="ng-star-inserted"]//div[@class="ng-select-container ng-has-value"]`;
    // protected DailyCyclegraphheading = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[text()="Cycle with Identified Charge and Discharge Region"]`;
    // protected StringCurrent = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[text()="Timeseries for string currents with identified charge/discharge region"]`;
    // protected graphstringVoltage = `//div[@id="plotly-graph-2"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected graphModuleVoltage = `//div[@id="plotly-graph-3"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected graphModuleTemperature = `//div[@id="plotly-graph-4"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphStringSocs = `//div[@id="plotly-graph-5"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleSoc = `//div[@id="plotly-graph-6"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA1 = `//div[@id="plotly-graph-7"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA2 = `//div[@id="plotly-graph-8"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA3 = `//div[@id="plotly-graph-9"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA4 = `//div[@id="plotly-graph-10"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA5 = `//div[@id="plotly-graph-11"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIA6 = `//div[@id="plotly-graph-12"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB1 = `//div[@id="plotly-graph-13"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB2 = `//div[@id="plotly-graph-14"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB3 = `//div[@id="plotly-graph-15"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB4 = `//div[@id="plotly-graph-16"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB5 = `//div[@id="plotly-graph-17"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected graphModuleVStringIB6 = `//div[@id="plotly-graph-18"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected tableTimetoDrop = `//div[@id="plotly-graph-19"]//*//*[@class="g-gtitle"]//*[name()='text']`
    // protected timetodropmodule1 = `//div[@id="plotly-graph-19"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="column-cell"][1]//*[@class="cell-text-holder"]//*[@class="cell-text"]`;
    // protected heatmapofVoltage = `//div[@id="plotly-graph-20"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected heatmapvalue = `//div[@id="plotly-graph-20"]//*[@class="main-svg"]//*[@class="infolayer"]//*[@data-index="0"]//*[@class="cursor-pointer"]//*[@class="annotation-text"]`;
    // protected TotalEnergyDischarge = `//div[@id="plotly-graph-21"]//*//*[@class="g-gtitle"]//*[name()='text']`;

    // protected totalEnergydischargevalue = `//div[@id="plotly-graph-21"]//*[@class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@text-anchor="middle"]`;

    // //DailyperformanceSummary
    // //Grid 1
    // protected zoomout = (label: string) => `//div[@id="${label}"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover = (label: string) => `//div[@id="${label}"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline6 = (label: string) => `//div[@id="${label}"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout2 = `//div[@id="plotly-graph-2"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover2 = `//div[@id="plotly-graph-2"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline62 = `//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout3 = `//div[@id="plotly-graph-3"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover3 = `//div[@id="plotly-graph-3"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline63 = `//div[@id="plotly-graph-3"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout4 = `//div[@id="plotly-graph-4"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover4 = `//div[@id="plotly-graph-4"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline64 = `//div[@id="plotly-graph-4"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout5 = `//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover5 = `//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline65 = `//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout6 = `//div[@id="plotly-graph-6"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover6 = `//div[@id="plotly-graph-6"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline66 = `//div[@id="plotly-graph-6"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    // protected zoomout7 = `//div[@id="plotly-graph-7"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    // protected Comparewithhover7 = `//div[@id="plotly-graph-7"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    // protected verticalline67 = `//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;


    // protected dailyperformancevalues1 = (name: string) => `//div[@id="plotly-graph-1"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues2 = (name: string) => `//div[@id="plotly-graph-2"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues3 = (name: string) => `//div[@id="plotly-graph-3"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues5 = (name: string) => `//div[@id="plotly-graph-5"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues7 = (name: string) => `//div[@id="plotly-graph-7"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues8 = (name: string) => `//div[@id="plotly-graph-8"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues9 = (name: string) => `//div[@id="plotly-graph-9"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues10 = (name: string) => `//div[@id="plotly-graph-10"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues11 = (name: string) => `//div[@id="plotly-graph-11"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues12 = (name: string) => `//div[@id="plotly-graph-12"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues13 = (name: string) => `//div[@id="plotly-graph-13"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues14 = (name: string) => `//div[@id="plotly-graph-14"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues15 = (name: string) => `//div[@id="plotly-graph-15"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues16 = (name: string) => `//div[@id="plotly-graph-16"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues17 = (name: string) => `//div[@id="plotly-graph-17"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected dailyperformancevalues18 = (name: string) => `//div[@id="plotly-graph-18"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    // protected Table1 = `//div[@id="plotly-graph-3"]`;
    // protected table1Cell1 = `//div[@id="plotly-graph-3"]//*[name()='svg']//*[@class="table"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="cell-text-holder"]//*[@class="cell-text"]`;
    // protected table2Cell1 = `//div[@id="plotly-graph-5"]//*[name()='svg']//*[@class="table"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="cell-text-holder"]//*[name()='text']`;


    // protected weakmoduleQFFilter = `//div//ng-select[@bindlabel="qFFilterName"]`;

    // protected GraphCycletrend = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected Cycleperformance = `//div[@id="plotly-graph-2"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected EnergyModule1 = `//div[@id="plotly-graph-3"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected EnergyModule2 = `//div[@id="plotly-graph-4"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected cumulativeEnergy = `//div[@id="plotly-graph-5"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected cumulativeCyclecount = `//div[@id="plotly-graph-6"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected chargeenergydischargeefficiency = `//div[@id="plotly-graph-7"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    // protected roundTripEfficiency = `//div[@id="plotly-graph-8"]//*//*[@class="g-gtitle"]//*[name()='text']`;











    //EOSE
    protected EoseBtn = `#button-3`;
    protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns

    protected dailycyclelatvalue = (label: string) => `//div[@class="svg-container"]//*[@class="subplot xy"]//*[@class="x"]//*[name()='path'][7]`
    //`//div[@class="svg-container"]//*[@class="subplot xy"]//*[@class="x"]//*[@class="xgrid crisp"][7]`;
    //div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="axistext"]//*[text()="${label}"];
    protected dailycyclestatusstateOfCharge = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[text()="State Of Cha..."]//following-sibling::*[@class="nums"]`;
    protected dailycyclestatusEnergyBlockCurrent = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"][1]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"][1]`;
    protected dailycyclestatusEnergyBlockVoltage = `//div[@class="plot-container plotly"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"][2]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"][1]`;
    protected ProjectEOSE = `#ProjectId`;
    protected EnergyGroupName = `//div[@class="widget-control flexit cg-12"]//h6[text()="Energy Group Name"]//parent::div//div[@class="ng-select-container ng-has-value"]`;
    protected StartDate = `//div//input[@id="startDateId"]//parent::div//mat-datepicker-toggle//button`;
    protected dropdown = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected SearchBtnEOSE = `#SearchId`;
    protected prethosdropdown = `//div[@class="plotly-container full-width large-graph-div"]//div[@class="ng-star-inserted"]//div[@class="ng-select-container ng-has-value"]`;
    protected DailyCyclegraphheading = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[text()="Cycle with Identified Charge and Discharge Region"]`;
    protected StringCurrent = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[text()="Timeseries for string currents with identified charge/discharge region"]`;
    protected graphstringVoltage = `//div[@id="plotly-graph-2"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected graphModuleVoltage = `//div[@id="plotly-graph-3"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected graphModuleTemperature = `//div[@id="plotly-graph-4"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphStringSocs = `//div[@id="plotly-graph-5"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleSoc = `//div[@id="plotly-graph-6"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA1 = `//div[@id="plotly-graph-7"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA2 = `//div[@id="plotly-graph-8"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA3 = `//div[@id="plotly-graph-9"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA4 = `//div[@id="plotly-graph-10"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA5 = `//div[@id="plotly-graph-11"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIA6 = `//div[@id="plotly-graph-12"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB1 = `//div[@id="plotly-graph-13"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB2 = `//div[@id="plotly-graph-14"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB3 = `//div[@id="plotly-graph-15"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB4 = `//div[@id="plotly-graph-16"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB5 = `//div[@id="plotly-graph-17"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected graphModuleVStringIB6 = `//div[@id="plotly-graph-18"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected tableTimetoDrop = `//div[@id="plotly-graph-19"]//*//*[@class="g-gtitle"]//*[name()='text']`
    protected timetodropmodule1 = `//div[@id="plotly-graph-19"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="column-cell"][1]//*[@class="cell-text-holder"]//*[@class="cell-text"]`;
    protected heatmapofVoltage = `//div[@id="plotly-graph-20"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected heatmapvalue = `//div[@id="plotly-graph-20"]//*[@class="main-svg"]//*[@class="infolayer"]//*[@data-index="0"]//*[@class="cursor-pointer"]//*[@class="annotation-text"]`;
    protected TotalEnergyDischarge = `//div[@id="plotly-graph-21"]//*//*[@class="g-gtitle"]//*[name()='text']`;

    protected totalEnergydischargevalue = `//div[@id="plotly-graph-21"]//*[@class="main-svg"]//*[@class="indicatorlayer"]//*[@class="numbers"]//*[@text-anchor="middle"]`;

    //DailyperformanceSummary
    //Grid 1
    protected zoomout = (label: string) => `//div[@id="${label}"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover = (label: string) => `//div[@id="${label}"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline6 = (label: string) => `//div[@id="${label}"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout2 = `//div[@id="plotly-graph-2"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover2 = `//div[@id="plotly-graph-2"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline62 = `//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout3 = `//div[@id="plotly-graph-3"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover3 = `//div[@id="plotly-graph-3"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline63 = `//div[@id="plotly-graph-3"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout4 = `//div[@id="plotly-graph-4"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover4 = `//div[@id="plotly-graph-4"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline64 = `//div[@id="plotly-graph-4"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout5 = `//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover5 = `//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline65 = `//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout6 = `//div[@id="plotly-graph-6"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover6 = `//div[@id="plotly-graph-6"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline66 = `//div[@id="plotly-graph-6"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;

    protected zoomout7 = `//div[@id="plotly-graph-7"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`;
    protected Comparewithhover7 = `//div[@id="plotly-graph-7"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Compare data on hover"]`;
    protected verticalline67 = `//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][6]`;


    protected dailyperformancevalues1 = (name: string) => `//div[@id="plotly-graph-1"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues2 = (name: string) => `//div[@id="plotly-graph-2"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues3 = (name: string) => `//div[@id="plotly-graph-3"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues5 = (name: string) => `//div[@id="plotly-graph-5"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues7 = (name: string) => `//div[@id="plotly-graph-7"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues8 = (name: string) => `//div[@id="plotly-graph-8"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues9 = (name: string) => `//div[@id="plotly-graph-9"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues10 = (name: string) => `//div[@id="plotly-graph-10"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues11 = (name: string) => `//div[@id="plotly-graph-11"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues12 = (name: string) => `//div[@id="plotly-graph-12"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues13 = (name: string) => `//div[@id="plotly-graph-13"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues14 = (name: string) => `//div[@id="plotly-graph-14"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues15 = (name: string) => `//div[@id="plotly-graph-15"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues16 = (name: string) => `//div[@id="plotly-graph-16"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues17 = (name: string) => `//div[@id="plotly-graph-17"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;
    protected dailyperformancevalues18 = (name: string) => `//div[@id="plotly-graph-18"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[text()="${name}"]//preceding-sibling::*[name()='tspan']`;




    protected Table1 = `//div[@id="plotly-graph-3"]`;
    protected table1Cell1 = `//div[@id="plotly-graph-3"]//*[name()='svg']//*[@class="table"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="cell-text-holder"]//*[@class="cell-text"]`;
    protected table2Cell1 = `//div[@id="plotly-graph-5"]//*[name()='svg']//*[@class="table"]//*[@class="y-column"][1]//*[@id="cells1"]//*[@class="cell-text-holder"]//*[name()='text']`;


    protected weakmoduleQFFilter = `//div//ng-select[@bindlabel="qFFilterName"]`;
    protected GraphCycletrend = `//div[@id="plotly-graph-1"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected Cycleperformance = `//div[@id="plotly-graph-2"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected CyclePerformaceQFColumn = `//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"]//*[@class="column-block"]//*[@class="cell-text-holder"]//*[@data-unformatted="<b>Qualifying<br>Factor [%]<b>"]//ancestor::*[@class="column-block"]//preceding-sibling::*[@id="cells1"]//*[name()='g']//*[@class="column-cell"]`
    protected EnergyModule1 = `//div[@id="plotly-graph-3"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected EnergyModule2 = `//div[@id="plotly-graph-4"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected cumulativeEnergy = `//div[@id="plotly-graph-5"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected cumulativeCyclecount = `//div[@id="plotly-graph-6"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected chargeenergydischargeefficiency = `//div[@id="plotly-graph-7"]//*//*[@class="g-gtitle"]//*[name()='text']`;
    protected roundTripEfficiency = `//div[@id="plotly-graph-8"]//*//*[@class="g-gtitle"]//*[name()='text']`;


}
/*/
Another X path for graphs

 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[1]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[2]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[3]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[4]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[5]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[6]`;

/*/