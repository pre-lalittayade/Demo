export class WindObject {
    // protected wind_button =`//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-home[1]/app-landing-overview[1]/div[1]/div[1]/span[1]/button[2]`;
    protected wind_button = `//div[@class="action-button-container"]//*//button[@aria-describedby="cdk-describedby-message-4"]`;
    protected short_name_menu_btn =`//div[@class="ag-pinned-left-header"]//*//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-pinned-left-header"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]`;
    protected clickonelement = `//a[contains(text(),"DJE01 ")]`;
    protected dropdown = (value:string) => `//div[@class="appDeviceDropdown1"]//span[contains(text(), "${value}")]`;
    protected dropdownclick = `//div[@class="appDeviceDropdown1"]//span[@class="ng-arrow-wrapper"]`; 
    protected dropdownclick1 = `//div[@class="ng-option ng-star-inserted ng-option-marked"]`;

    protected obj = '//div[@class="card-name"]/h4[contains(text(),"Total Active Power")]/parent::div/h3';
    protected objPLF = '//div[@class="techinical-charts"]//div/h2[@class="proj-name"]';
    protected objTGT = '//div[@class="techinical-charts daily-energy-chart"]//div/h2[@class="txt-reg"]';

    protected objTur = '//div[@class="card-name"]/h4[contains(text(),"Active power")]/parent::div/h3';
    protected objTurGT = `//div[@class="value-head bartileChart"]//div//*[text()="Generation today"]//ancestor::div[@class="value-head bartileChart"]//div//*[@class="txt-reg"]`;
    protected objTurPLF = `//div[@class="value-head bartileChart"]//div//*[text()="PLF"]//ancestor::div[@class="value-head bartileChart"]//div//*[@class="txt-reg"]`;



   
}