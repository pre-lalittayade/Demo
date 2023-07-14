export class WSObject {

    protected short_name_menu_btn =`//div[@class="ag-pinned-left-header"]//*//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-pinned-left-header"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]`;
    protected dropdown = (value:string) => `//div[@class="appDeviceDropdown1"]//span[contains(text(), "${value}")]`;
    protected dropdownclick = `//div[@class="appDeviceDropdown1"]//span[@class="ng-arrow-wrapper"]`; 
    protected dropdownclick1 = `//div[@class="ng-option ng-star-inserted ng-option-marked"]`;
    protected obj = '//div[@class="card-name"]/h4[contains(text(),"PR")]/parent::div/h3';
    protected objBLK03 = `//div[@class="mfmCharts-c1"]//div/h2[@class="txt-reg"]`;
    protected objBLK08 = `//div[@class="mfmCharts-c2"]//div/h2[@class="txt-reg"]`
}