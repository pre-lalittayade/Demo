export class Diagnostics_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected project_dropdown = (value: string) =>
    `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    protected source_location = (value: string) => `//span[contains(text(), "${value}")]`;
    protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
    protected refreshbtn = `//span[3]//span[@id="historyIcons"]`;
    protected refreshbtnDC = `//button//span[@class="mat-button-wrapper"]//*[contains(text(),"autorenew")]`;
    protected closebtn = `//button[@id="Close"]`;
    protected assertion = `//div[@class="ag-header-cell-label"]//span[text()="Time"]`;
    protected assertion1 = `//div[@row-index="0"]//div[@col-id="itemTimeMoment"]`;


}  
