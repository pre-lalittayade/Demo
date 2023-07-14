export class LandPageObject {

    protected Locationbtn = `#toogle-map`;
    protected EoseBtn = `#button-3`;
    protected SolarBtn = `#button-1`;
    protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns



    protected Alllocation = `//div[@class="select-options m-t-16 mb-3"]//button[@id="all-button"]`;
    protected GRlocation = (name: string) => `//div[@class="select-options m-t-16 mb-3"]//button[@id="in-button" and normalize-space(text())="${name}"]`;
    protected solarfarmview = `//div[@class="div1 ng-star-inserted"]//div[@title="go to Farm View"]`;
    protected firstclickonplant = (name: string) => `//div[@class="plant-details"]//span[@class="plant-name" and text()="${name}"]`;
    protected farmname = `//div[@class="div1 ng-star-inserted"]//div[@class="innerdiv11"]`;
    protected Socvalue = `//div[@class="storage12 valuestyle ng-star-inserted"]//label`;
    protected chargepowerlimit = `//div[@class="storage13 valuestyle ng-star-inserted"]//label`;
    protected dischargepowerlimit = `//div[@class="storage14 valuestyle ng-star-inserted"]//label`;
    protected totalpower = `//div[@class="storage15 valuestyle ng-star-inserted"]//label`;
    protected voltage = `//div[@class="storage16 valuestyle ng-star-inserted"][1]//label`;
    protected current = `//div[@class="storage16 valuestyle ng-star-inserted"][2]//label`;


    protected solarinspectiontxt = `//ng-select[@id="selectInspection"]//div[@class="ng-value ng-star-inserted"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected inspectiondatelabel = `//div[@id="panel"]//*//label[@class="mission-date"]`;
    protected HotspotDeffect = `//div[@class="collapsible-content-defect"]//div[contains(@id,"category-div")]//div[@id="category-Hotspot"]//parent::div[contains(@id,"category-div")]//label[@class="defect-panel-label"][1]`;
    protected defectslabel = `//div[@class="collapsible-control-defect"]//label[@class="lbl-toggle2"]`;
    protected differentdefects = (name: string) => `//div[contains(@id,"category-div")]//label[text()="${name}"]`;
    protected filterScopeblack = `//*[@class="leaflet-interactive" and @stroke="black"][1]`;
    protected filterStringblue = `//*[@class="leaflet-interactive"][1]`;
    protected inspectionfilter = `//div[@class="collapsible-control"]//label[@class="lbl-toggle"]`;
    protected scope = `//div[@class="scope-string-toggle"]//label[@class="switch1"]`;
    protected String = `//div[@class="scope-string-toggle"]//label[@class="switch2"]`;
    protected filterapplyButton = `#applyButton`;

    protected Leafletheadlabel = `//div[@class="leaflet-info-card"]//div[@class="info-card-header"]//div//div`;
    protected leafletHeadcode = `//div[@class="leaflet-info-card"]//div[@class="info-card-header"]//div[2]`;
    protected leafletinspectioninfo = `//div[@class="leaflet-info-card"]//div[@class="info-card-content"]//div[@class="mission-name"]`;
    protected leafletstringinfo = `//div[@class="leaflet-info-card"]//div[@class="info-card-content"]//div[@class="right stringName"]`;

    protected GobacktoMapView = `//div[@id="backButton"]//div[@class="back-btn-icon"]`;
    protected inspectdropdown = `#selectInspection`;
    protected reducedmapview = `//div//button[@aria-label="Toggle fullscreen view"]`;

    protected inspectiontoSelect = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[contains(text(),"${value}")]`;
    protected WindButton = `#button-2`;
    protected J2Plant = (name: string) => `//div//span[@class="device-name" and text()="${name}"]`;
    protected J2plantlabel = `//div[@class="si-content"]//div[@class="assetsinnerdiv"]`;
    protected plantWindspeed = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3110 valuestyle"]//label`;
    protected plantActivepower = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3112 valuestyle"]//label`;
    protected plantAmbienttemp = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3114 valuestyle"][2]//label`;
    protected dailygeneration = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3116 valuestyle"]//label`;


    protected projecttileheading = `//div[@class="home-tile"]//h4[@id="Projects"]`;
    protected projecttilevalue = `//div[@class="home-tile"]//h3[@id="value-Projects"]`;
    protected CapacityTileheading = `//div[@class="home-tile"]//h4[@id="Capacity"]`;
    protected CapacityTilevalue = `//div[@class="home-tile"]//h3[@id="value-Capacity"]`;
    protected SocTileHeading = `//div[@class="home-tile"]//h4[@id="SoC"]`;
    protected SocTilevalue = `//div[@class="home-tile"]//h3[@id="value-SoC"]`;
    protected PowrTileHeading = `//div[@class="home-tile"]//h4[@id="Power Rating"]`;
    protected PowrTilevalue = `//div[@class="home-tile"]//h3[@id="value-Power Rating"]`;
    protected EnergyTileHeading = `//div[@class="home-tile"]//h4[@id="Energy Rating"]`;
    protected EnergyTilevalue = `//div[@class="home-tile"]//h3[@id="value-Energy Rating"]`;
    protected TtlPowerTileHeading = `//div[@class="home-tile"]//h4[@id="Total Power"]`;
    protected TtlPowerTilevalue = `//div[@class="home-tile"]//h3[@id="value-Total Power"]`;


    protected deviceStatus = `//div[@class="home-tile"]//h4[@id="Inverter Status"]`;
    protected tubineStatus = `//div[@class="home-tile"]//h4[@id="Turbine Status"]`;
    protected turbinevalue = `//div[@class="home-tile"]//div[@id="status_4"]`;
    protected devicevalue = `//div[@class="home-tile"]//div[@id="status_4"]`;
    protected TtlActivePower = `//div[@class="home-tile"]//h4[@id="Total Active Power"]`;
    protected TtlActivePowervalue = `//div[@class="home-tile"]//h3[@id="value-Total Active Power"]`
    protected AvgWindSpeed = `//div[@class="home-tile"]//h4[@id="Avg Wind Speed of the farm"]`;
    protected AvgWindSpeedvalue = `//div[@class="home-tile"]//h3[@id="value-Avg Wind Speed of the farm"]`;
    protected GenerationToday = `//div[@class="home-tile"]//h4[@id="Generation today"]`;
    protected GenerationTodayvalue = `//div[@class="home-tile"]//h3[@id="value-Generation today"]`;

    protected PRvalue = `//div[@class="home-tile"]//h3[@id="value-PR"]`;
    protected PR = `//div[@class="home-tile"]//h4[@id="PR"]`;
    protected DailyPOA = `//div[@class="home-tile"]//h4[@id="Daily POA Energy"]`;
    protected DailyPOAValue = `//div[@class="home-tile"]//h3[@id="value-Daily POA Energy"]`;
    protected dailyenergy = `//div[@class="home-tile"]//h4[@id="Daily Energy"]`;
    protected dailyenergyvalue = `//div[@class="home-tile"]//h3[@id="value-Daily Energy"]`;
    protected ActivePower = `//div[@class="home-tile"]//h4[@id="Active Power"]`;
    protected ActivePowervalue = `//div[@class="home-tile"]//h3[@id="value-Active Power"]`;

    protected landinwindheader = (value: number) => `//div[@class="ag-header-container"]//div[@aria-colindex="${value}"]`;

    protected strtDate = `//div[@id="chartid"]//div[@class="mat-form-field-infix"]//input[@id="mat-input-0"]`;
    protected endDate = `//div[@id="chartid"]//div[@class="mat-form-field-infix"]//input[@id="mat-input-1"]`;

    // protected tableDevicestatusfailure = `//div[@row-index="0"]//div[@title="Communication Failure"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusError = `//div[@row-index="0"]//div[@title="Error"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusOk = `//div[@row-index="0"]//div[@title="OK"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusPause = `//div[@row-index="0"]//div[@title="Pause"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    protected tabledevicestatusresting = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksResting"]//following-sibling::span`;
    protected tabledevicestatusdischarging = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksDischarging"]//following-sibling::span`;
    protected tabledevicestatuscharging = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksCharging"]//following-sibling::span`;
    protected tableDevicestatusfailure = `//div[@row-index="0"]//div[@title="Communication Failure"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[contains(@class,"StatusAligment")]`;
    protected tabledevicestatusError = `//div[@row-index="0"]//div[@title="Error"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[contains(@class,"StatusAligment")]`;
    protected tabledevicestatusOk = `//div[@row-index="0"]//div[@title="OK"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[contains(@class,"StatusAligment")]`;
    protected tabledevicestatusPause = `//div[@row-index="0"]//div[@title="Pause"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[contains(@class,"StatusAligment")]`;

    protected project_dropdown = (value: string) =>
        `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    protected menu_tree_node = (nodeName: string) => `//span[contains(text(),"${nodeName}")]`;
    protected source_location = (value: string) => `//span[text()="${value}"]`;
    protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
    protected search_btn = `//button//span[@id="historyIcons" and @class="icon icon-Refresh"]`;

    protected SelectRowinHistory = (value: string) => `//mat-tab-body//div[@class="dropContent ng-star-inserted"]//div[@ref="leftContainer"]//div[@col-id="itemTimeMoment" and contains(text(),"${value}")]//parent::div[contains(@class,"ag-row-")]`;

    protected Historypagelastdate=`//div[@class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index='0']//div[@col-id="itemTimeMoment"]`;
    protected HistoryDownload=`#dropdownManual`;
    protected HistoryExceldownload=`//div//ul[@class="dropdown-menu show"]//li[normalize-space(text())="Excel"]`;


    protected landingpage = `//div[@id="LeftNav"]//div[@class="top"]//div//a`;


    protected EOSEConnected = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="connected"]//div[@class="ng-star-inserted"]//span[2]`;
    //`//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="connected"]//div[@title="${label}"]//span[2]`;
    protected EOSEEnabled = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="enabled"]//div[@class="ng-star-inserted"]//span[2]`;
    //`//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="enabled"]//div[@title="${label}"]//span[2]`
    // protected EoseWarningalarmfault = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="DeviceStatusValue"]//div[@title="${label}"]//span[@class="StatusAligment"]`;
    protected EoseWarningalarmfault = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="DeviceStatusValue"]//div[@title="${label}"]//span[contains(@class,"StatusAligment")]`;
    /*
        protected HistoryparentE = `//div[@class="tree_search"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
        //`//div[@class="tree"]//mat-nested-tree-node[@aria-level="1"]//li//div//button`;
        // `//div[@class="tree_search"]//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
        protected Historyplant1E = `//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li`;
        //`//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
        protected HistoryPlant2E = `//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    
        protected Historyplant1w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
        protected HistoryPlant2w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
        protected Historyparentw = `//div[@class="tree"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
    
        protected HistoryparentS = `//div[@class="tree"]//mat-nested-tree-node//li//span[contains(@class,"nodeLabel")]`;
        protected Historyplant1S = `//div//ul//mat-nested-tree-node//li//span[contains(text(),"Plant")]`;
        //`//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[6]//li//span[@class="nodeLabel"]`;
        protected HistoryPlant2S = `//div[@class="tree"]//mat-nested-tree-node[@aria-level="2"]//span[contains(text(),"Plant")]//parent::div//following-sibling::ul//li`;
        //`//div[@class="tree"]//mat-nested-tree-node[6]//li//ul//mat-nested-tree-node//li//span[@class="nodeLabel"]`;
    */
    protected firstplant = `//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    protected HistoryparentE = `//div[@class="tree"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
    //`//div[@class="tree"]//mat-nested-tree-node[@aria-level="1"]//li//div//button`;
    // `//div[@class="tree_search"]//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
    protected Historyplant1E = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    //`//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
    protected HistoryPlant2E = `//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    protected Historyplant1w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    protected HistoryPlant2w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    protected Historyparentw = `//div[@class="tree"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
    protected HistoryparentS = `//div[@class="tree"]//mat-nested-tree-node//li//span[contains(@class,"nodeLabel")]`;
    protected Historyplant1S = `//div//ul//mat-nested-tree-node//li//span[contains(text(),"Plant")]`;
    //`//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[6]//li//span[@class="nodeLabel"]`;
    protected HistoryPlant2S = `//div[@class="tree"]//mat-nested-tree-node[@aria-level="2"]//span[contains(text(),"Plant")]//parent::div//following-sibling::ul//mat-nested-tree-node[1]//li//span[@class="nodeLabel"]`;
    //`//div[@class="tree"]//mat-nested-tree-node[6]//li//ul//mat-nested-tree-node//li//span[@class="nodeLabel"]`;
}






    // protected email_txt = `#username`;
    // protected password_txt = `#myPassword`;
    // protected login_btn = `#btnLoginId`;
    // protected logout_btn = '//div[@mattooltip="Logout"]/*';

    // protected Locationbtn = `#toogle-map`;
    // protected EoseBtn = `#button-3`;
    // protected SolarBtn = `#button-1`;
    // protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;

    // protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    // protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns

    // protected Alllocation = `//div[@class="select-options m-t-16 mb-3"]//button[@id="all-button"]`;
    // protected GRlocation = (name: string) => `//div[@class="select-options m-t-16 mb-3"]//button[@id="in-button" and normalize-space(text())="${name}"]`;
    // protected solarfarmview = `//div[@class="div1 ng-star-inserted"]//div[@title="go to Farm View"]`;
    // protected firstclickonplant = (name: string) => `//div[@class="plant-details"]//span[@class="plant-name" and text()="${name}"]`;
    // protected farmname = `//div[@class="div1 ng-star-inserted"]//div[@class="innerdiv11"]`;
    // protected Socvalue = `//div[@class="storage12 valuestyle ng-star-inserted"]//label`;

    // protected solarinspectiontxt = `//ng-select[@id="selectInspection"]//div[@class="ng-value ng-star-inserted"]//span[@class="ng-value-label ng-star-inserted"]`;
    // protected inspectiondatelabel = `//div[@id="panel"]//*//label[@class="mission-date"]`;
    // protected HotspotDeffect = `//div[@class="collapsible-content-defect"]//div[@id="category-div"]//div[@id="category-Hotspot"]//parent::div[@id="category-div"]//label[@class="defect-panel-label"][1]`;
    // protected defectslabel = `//div[@class="collapsible-control-defect"]//label[@class="lbl-toggle2"]`;
    // protected differentdefects = (name: string) => `//div[@id="category-div"]//label[text()="${name}"]`;
    // protected filterScopeblack = `//*[@class="leaflet-interactive" and @stroke="black"][1]`;
    // protected filterStringblue = `//*[@class="leaflet-interactive"][1]`;
    // protected inspectionfilter = `//div[@class="collapsible-control"]//label[@class="lbl-toggle"]`;
    // protected scope = `//div[@class="scope-string-toggle"]//label[@class="switch1"]`;
    // protected String = `//div[@class="scope-string-toggle"]//label[@class="switch2"]`;
    // protected filterapplyButton = `#applyButton`;

    // protected Leafletheadlabel = `//div[@class="leaflet-info-card"]//div[@class="info-card-header"]//div//div`;
    // protected leafletHeadcode = `//div[@class="leaflet-info-card"]//div[@class="info-card-header"]//div[2]`;
    // protected leafletinspectioninfo = `//div[@class="leaflet-info-card"]//div[@class="info-card-content"]//div[@class="mission-name"]`;
    // protected leafletstringinfo = `//div[@class="leaflet-info-card"]//div[@class="info-card-content"]//div[@class="right stringName"]`;

    // protected GobacktoMapView = `//div[@id="backButton"]//div[@class="back-btn-icon"]`;
    // protected inspectdropdown = `#selectInspection`;

    // protected inspectiontoSelect = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[contains(text(),"${value}")]`;
    // protected WindButton = `#button-2`;
    // protected J2Plant = `//div//span[@class="device-name" and text()="J2"]`;
    // protected J2plantlabel = `//div[@class="si-content"]//div[@class="assetsinnerdiv"]`;
    // protected plantWindspeed = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3110 valuestyle"]//label`;
    // protected plantActivepower = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3112 valuestyle"]//label`;
    // protected plantAmbienttemp = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3114 valuestyle"][2]//label`;
    // protected dailygeneration = `//div[contains(@class,"ng-star-inserted")]//div[@class="assetsinnerdiv3116 valuestyle"]//label`;


    // protected projecttileheading = `//div[@class="home-tile"]//h4[@id="Projects"]`;
    // protected projecttilevalue = `//div[@class="home-tile"]//h3[@id="value-Projects"]`;
    // protected CapacityTileheading = `//div[@class="home-tile"]//h4[@id="Capacity"]`;
    // protected CapacityTilevalue = `//div[@class="home-tile"]//h3[@id="value-Capacity"]`;
    // protected SocTileHeading = `//div[@class="home-tile"]//h4[@id="SoC"]`;
    // protected SocTilevalue = `//div[@class="home-tile"]//h3[@id="value-SoC"]`;
    // protected PowrTileHeading = `//div[@class="home-tile"]//h4[@id="Power Rating"]`;
    // protected PowrTilevalue = `//div[@class="home-tile"]//h3[@id="value-Power Rating"]`;
    // protected EnergyTileHeading = `//div[@class="home-tile"]//h4[@id="Energy Rating"]`;
    // protected EnergyTilevalue = `//div[@class="home-tile"]//h3[@id="value-Energy Rating"]`;
    // protected TtlPowerTileHeading = `//div[@class="home-tile"]//h4[@id="Total Power"]`;
    // protected TtlPowerTilevalue = `//div[@class="home-tile"]//h3[@id="value-Total Power"]`;

    // protected deviceStatus = `//div[@class="home-tile"]//h4[@id="Device Status"]`;
    // protected devicevalue = `//div[@class="home-tile"]//div[@id="status_4"]`;
    // protected TtlActivePower = `//div[@class="home-tile"]//h4[@id="Total Active Power"]`;
    // protected TtlActivePowervalue = `//div[@class="home-tile"]//h3[@id="value-Total Active Power"]`
    // protected AvgWindSpeed = `//div[@class="home-tile"]//h4[@id="Avg Wind Speed of the farm"]`;
    // protected AvgWindSpeedvalue = `//div[@class="home-tile"]//h3[@id="value-Avg Wind Speed of the farm"]`;
    // protected GenerationToday = `//div[@class="home-tile"]//h4[@id="Generation today"]`;
    // protected GenerationTodayvalue = `//div[@class="home-tile"]//h3[@id="value-Generation today"]`;
    // protected PRvalue = `//div[@class="home-tile"]//h3[@id="value-PR"]`;
    // protected PR = `//div[@class="home-tile"]//h4[@id="PR"]`;
    // protected DailyPOA = `//div[@class="home-tile"]//h4[@id="Daily POA Energy"]`;
    // protected DailyPOAValue = `//div[@class="home-tile"]//h3[@id="value-Daily POA Energy"]`;
    // protected dailyenergy = `//div[@class="home-tile"]//h4[@id="Daily Energy"]`;
    // protected dailyenergyvalue = `//div[@class="home-tile"]//h3[@id="value-Daily Energy"]`;
    // protected ActivePower = `//div[@class="home-tile"]//h4[@id="Active Power"]`;
    // protected ActivePowervalue = `//div[@class="home-tile"]//h3[@id="value-Active Power"]`;
    // protected landinwindheader = (value: number) => `//div[@class="ag-header-container"]//div[@aria-colindex="${value}"]`;
    // protected strtDate = `//div[@id="chartid"]//div[@class="mat-form-field-infix"]//input[@id="mat-input-0"]`;
    // protected endDate = `//div[@id="chartid"]//div[@class="mat-form-field-infix"]//input[@id="mat-input-1"]`;
    // protected project_dropdown = (value: string) =>
    //     `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    // protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    // protected menu_tree_node = (nodeName: string) => `//span[contains(text(),"${nodeName}")]`;
    // protected source_location = (value: string) => `//span[contains(text(), "${value}")]`;
    // protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
    // protected search_btn = `//button//span[@id="historyIcons" and @class="icon icon-Refresh"]`;
    // protected SelectRowinHistory = (value: string) => `//mat-tab-body[@id="mat-tab-content-1-0"]//div[@class="dropContent ng-star-inserted"]//div[@ref="leftContainer"]//div[@col-id="itemTimeMoment" and text()="${value}"]//parent::div[contains(@class,"ag-row-even")]`;
    // protected landingpage = `//div[@id="LeftNav"]//div[@class="top"]//div//a`;









    // protected chargepowerlimit = `//div[@class="storage13 valuestyle ng-star-inserted"]//label`;
    // protected dischargepowerlimit = `//div[@class="storage14 valuestyle ng-star-inserted"]//label`;
    // protected totalpower = `//div[@class="storage15 valuestyle ng-star-inserted"]//label`;
    // protected voltage = `//div[@class="storage16 valuestyle ng-star-inserted"][1]//label`;
    // protected current = `//div[@class="storage16 valuestyle ng-star-inserted"][2]//label`;
    // protected reducedmapview = `//div//button[@aria-label="Toggle fullscreen view"]`;
    // protected tableDevicestatusfailure = `//div[@row-index="0"]//div[@title="Communication Failure"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusError = `//div[@row-index="0"]//div[@title="Error"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusOk = `//div[@row-index="0"]//div[@title="OK"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusPause = `//div[@row-index="0"]//div[@title="Pause"]//div//span[contains(@class,"TurbineStatus")]//following-sibling::span[@class="StatusAligment"]`;
    // protected tabledevicestatusresting = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksResting"]//following-sibling::span`;
    // protected tabledevicestatusdischarging = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksDischarging"]//following-sibling::span`;
    // protected tabledevicestatuscharging = `//div[@row-index="0"]//div[@class="ng-star-inserted"]//div//span[@class="TurbineStatus statusIcon BatteryBanksCharging"]//following-sibling::span`;
    // protected EOSEConnected = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="connected"]//div[@title="${label}"]//span[2]`;
    // protected EOSEEnabled = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="enabled"]//div[@title="${label}"]//span[2]`
    // protected EoseWarningalarmfault = (label: string) => `//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@col-id="DeviceStatusValue"]//div[@title="${label}"]//span[@class="StatusAligment"]`;
    // protected HistoryparentE = `//div[@class="tree_search"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
    // //`//div[@class="tree"]//mat-nested-tree-node[@aria-level="1"]//li//div//button`;
    // // `//div[@class="tree_search"]//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
    // protected Historyplant1E = `//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li`;
    // //`//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//div[@class="mat-tree-node"]//button//parent::div//span[@class="nodeLabel"]`;
    // protected HistoryPlant2E = `//div[@class="tree_search"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    // protected Historyplant1w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    // protected HistoryPlant2w = `//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node//li//ul//mat-nested-tree-node[1]//li`;
    // protected Historyparentw = `//div[@class="tree"]//mat-nested-tree-node//li//mat-icon//parent::li//span[@class="nodeLabel"]`;
    // protected HistoryparentS = `//div[@class="tree"]//mat-nested-tree-node//li//span[contains(@class,"nodeLabel")]`;
    // protected Historyplant1S = `//div//ul//mat-nested-tree-node//li//span[contains(text(),"Plant")]`;
    // //`//div[@class="tree"]//mat-nested-tree-node//li//ul//mat-nested-tree-node[6]//li//span[@class="nodeLabel"]`;
    // protected HistoryPlant2S = `//div[@class="tree"]//mat-nested-tree-node[@aria-level="2"]//span[contains(text(),"Plant")]//parent::div//following-sibling::ul//li`;
    // //`//div[@class="tree"]//mat-nested-tree-node[6]//li//ul//mat-nested-tree-node//li//span[@class="nodeLabel"]`;
    // protected firstplant = `//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;
// }