export class Configuration_Object {
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected assertionpmscheduler = `//div[@class="action-panel"]`;
    protected short_name_menu_btn =`//div[@col-id="ProjectLongName"]//span[@class="ag-icon ag-icon-menu"]`;
    protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
    protected Shortnamebox_hover = `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="ProjectLongName"]`;
    protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
    protected clickonfirstelement = `//div[@class="ag-center-cols-container"]/div[@row-index="0"]`;
    protected wo_clickonfirstelement = `//*[@id="mat-expansion-panel-header-16"]`;
    protected wo_clickonfirstelement1 =`//*[@class="mat-accordion"]//*[@id="cdk-accordion-child-16"]//div[@class="mat-expansion-panel-body"]//div[@class="wolistBody ng-star-inserted"][1]`;
    protected refreshbtn = `//span[3]//button[@id="RefreshId"]`;
    protected columnvalue = `//div[@ref="eBodyViewport"]//div[@ref="eContainer"]//div[@row-index="0"]//div[@aria-colindex=3]`;

}