export class CMMS_Master_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected vendoesassertion = `//div//*[@class="card-block mat-card mat-focus-indicator"]//span[2]`;
    protected short_name_menu_btn =`//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected dashboard = `//ng-select[@id="select-dashboard"]`;
    protected dashboarddropdownvalue = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`;
    protected searchbtn = `#autorenew-btn`;
    protected ProjectDropdown=`#Projectid`;
    protected Dropdownvalues=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected SearchBTN=`#autorenewId`;
}