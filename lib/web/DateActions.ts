import {WebActions} from '@lib/WebActions'

export class DateActions extends WebActions {

async  SelectDateRange(fromDate: string, toDate: string): Promise<void> {
    let date_btn = (value: string) => `//mat-datepicker-toggle[@mattooltip="${value}"]/button`;
    let selectDate = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(), "${value}")]`
    await this.clickElement(date_btn("From date"));
    await this.SelectDate(fromDate);
    await this.clickElement(date_btn("To date"));
    await this.SelectDate(toDate);
    }

async SelectDate(date: string): Promise<void>{

    let ok_btn = '//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]'
    const currentMonthYeartxt = '//div[@class="mat-calendar-header"]//span';
    const currentMonthYearArray = (await this.page.innerText(currentMonthYeartxt)).split(' ');
    const selectyearBtn = '//div[@class="mat-calendar-header"]//button';
    let dateMonthYearBtn = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(),"${value}")]`;
    
    const dateArray = date.split("-");
    if((currentMonthYearArray[1] !== dateArray[2]) || (currentMonthYearArray[0] !== dateArray[1].toUpperCase())){
        await this.clickElement(selectyearBtn);
        await this.clickElement(dateMonthYearBtn(dateArray[2])); 
        await this.clickElement(dateMonthYearBtn(dateArray[1].toUpperCase()));
        await this.clickElement(dateMonthYearBtn(dateArray[0]));
    } else {
        await this.clickElement(dateMonthYearBtn(dateArray[0]));
        
    }
    await this.clickElement(ok_btn); 
}

}