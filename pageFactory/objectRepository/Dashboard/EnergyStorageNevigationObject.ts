export class EnergyStorageNevigationObject {

    protected energy_storage_button = `//button[@id="button-3"]`;
    protected short_name_menu_btn =`//div[@class="ag-pinned-left-header"]//*//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-pinned-left-header"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]`;
    protected clickonelement = `//a[contains(text(),"Prethos ")]`;
    protected blockdropdown = (value:string) => `//div[@class="appDeviceDropdown1"]//span[contains(text(), "${value}")]`;
    protected blockdropdownclick = `//div[@class="appDeviceDropdown1"]//span[@class="ng-arrow-wrapper"]`; 
    protected blockdropdownclick1 = `//div[@class="ng-option ng-star-inserted ng-option-marked"]`;
    protected objPR = `//div[@class="card-name"]/h4[contains(text(),"Power Rating")]/parent::div/h3`;
    protected objER = `//div[@class="card-name"]/h4[contains(text(),"Energy Rating")]/parent::div/h3`;
    protected objvtg = `//div[@class="card-name"]/h4[text()="voltage"]/parent::div/h3`;

    // protected clickonelement = `//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]//*//a[(text()="EB-01 ")]`;

    
//div[@class="ag-filter-body-wrapper ag-simple-filter-body-wrapper"]//div[@class="ag-filter-body"]//input
    // protected bess = `body/app-root[1]/app-shell[1]/div[1]/div[2]/app-home[1]/app-landing-overview[1]/div[4]/ag-grid-angular[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[2]`;
    // protected project_dropdown = (value: string) =>
    //     `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    // protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    // protected time_span_btn = (value : string) => `//mat-button-toggle-group//span[(text()="${value}")]`



}