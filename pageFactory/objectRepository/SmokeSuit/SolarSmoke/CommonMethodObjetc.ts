export class SmokeCommonMethodObject {
    protected EoseBtn = `#button-3`;
    protected rowcheck = `//div//*[@id="landing-grid"]//div[@row-index="0"]//div[@col-id="ProjectShortName"]`;
    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns

    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected refreshbtn = `//button[@id="profiling-date-refresh-button-2"]`;
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected checkpagename = `//div[@class="project-name"]//p`;
    protected wind_button = `//button[@id="button-2"]`;


}