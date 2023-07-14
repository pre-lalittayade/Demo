import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Selecting Project from Landing page', async () => {

        await AlaramEvent.ClickOnEOSEButton();
        // await AlaramEvent.NameMenu();
        // await AlaramEvent.EnterNameFor_Filter("EOSE");
        // await AlaramEvent.clickOnFirstElementEOSE();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");
    });
    await test.step('Enter Alarm Management Summary page', async () => {
        console.log("");
        console.log("       *** ALARM MANAGEMENT SUMMARY PAGE ***       ")
        console.log("");
        await delay(2000);
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Alarm Management");
        if (isPagePresent) {
            await test.step('test validation', async () => {
                let p: boolean = await AlaramEvent.chechthepopupNew();
                if (p) {
                    await AlaramEvent.clickonok();
                    await AlaramEvent.checktheTableHeader();
                    console.log("Data not present");


                }
                else {

                    //await AlaramEvent.ChecktheTable();

                    await delay(7000);
                    // await test.step('test validation', async () => {
                    const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@ref="eText"]';
                    const columns: Array<string> = await AlaramEvent.GetColumnsEOSE(locator);
                    // search
                    let i = 0;
                    const columnValues: Array<string> = await AlaramEvent.GetColumnValuesEOSE(columns, 2);

                    console.log(columns[0], ":-", columnValues[0]);
                    console.log(columns[1], ":-", columnValues[1]);
                    console.log(columns[4], ":-", columnValues[4]);
                    console.log(columns[5], ":-", columnValues[5]);
                    console.log(columns[6], ":-", columnValues[6]);
                    console.log(columns[7], ":-", columnValues[7]);
                    for (let i = 0; i <= 7; i++) {
                        if (i != 2 && i != 3) {
                            expect.soft(columnValues[i]).not.toBeNull();

                        }
                    }
                }

            });
            // } else {
            //     const abc = console.log("Module not present for the user");
            //     expect(abc).toBe(" ");
            // }
            // });
            await test.step('Enter Alarm Management Details page', async () => {
                console.log("");
                console.log("       *** ALARM MANAGEMENT DETAIL'S PAGE ***       ")
                console.log("");

                await AlaramEvent.GotoDetails();
                await test.step('Check in different TimeSpan-Live', async () => {
                    console.log("");
                    console.log("       Event's       ");
                    console.log("");

                    console.log("--- Alarm management-event-live ---");
                    let flag = 0;
                    // await AlaramEvent.AddPlant();
                    // await AlaramEvent.SelectDropdownvalue("EOSE Pilot");
                    // await AlaramEvent.ClickOnResetFilter();


                    // await AlaramEvent.CheckDetailTable();
                    // await delay(12000);

                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data not present");

                        }
                        else {
                            const locator = '//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@role="presentation"]//div[@role="columnheader"]';
                            const columns: Array<string> = await AlaramEvent.GetColumnsEOSE(locator);

                            // search
                            let i = 0;
                            const columnValues: Array<string> = await AlaramEvent.GetColumnValuesdetails(columns, 7);

                            // console.log("column values", columnValues);
                            for (let i = 1; i <= 6; i++) {
                                if (i != 3) {
                                    expect.soft(columnValues[i]).not.toBeNull();
                                    console.log(columns[i], ":-", columnValues[i]);
                                }
                            }
                        }
                    });
                    await AlaramEvent.OvalStatebutton();
                    await AlaramEvent.OvalFaultbutton();
                    await AlaramEvent.OvalAlarmbutton();
                    await AlaramEvent.OvalWarningbutton();

                });
                await test.step('Check in different TimeSpan-day', async () => {
                    console.log("--- Alarm management-event-day ---");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Day");
                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            // await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");

                            await AlaramEvent.CheckResolvedTime();

                        }
                    });
                });
                await test.step('Check in different TimeSpan-week', async () => {
                    console.log("--- Alarm management-event-week ---");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Week");
                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            //await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");

                            await AlaramEvent.CheckResolvedTime();

                        }
                    });

                });
                await test.step('Check in different TimeSpan-month', async () => {
                    console.log("Alarm management-event-month");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Month");
                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            // await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");

                            await AlaramEvent.CheckResolvedTime();

                        }
                    });

                });
                /*   await test.step('Check in different TimeSpan-Custom', async () => {
                      console.log("Alarm management-event-Custom");
                      await AlaramEvent.ClickontimspanDayWeekMonth("Custom");
                      await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data not present");
                        }
                        else {
                            console.log("Data is present");
        
                            await AlaramEvent.CheckResolvedTime();
        
                        }
                    });
          
                         });
                         */
            });

            await test.step('Enter Alarm Management Custom Alert page', async () => {
                console.log("");
                console.log("       Custom Alert's       ");
                console.log("");

                await AlaramEvent.ClickonCustomAlertButton();
                await delay(7000);

                /*  await test.step('Check in different TimeSpan-Custom', async () => {
                      console.log("Alarm management-event-Custom");
                     
                      await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data not present");
                        }
                        else {
                            console.log("Data is present");
        
                            await AlaramEvent.CheckResolvedTime();
        
                        }
                    });
                          
        
                   });*/

                await test.step('Check in different TimeSpan-month', async () => {
                    console.log("--- Alarm management-custom alert-month ---");
                    // await AlaramEvent.ClickontimspanDayWeekMonth("Month");

                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            // await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");

                            await AlaramEvent.CheckResolvedTime();

                        }
                    });

                });


                await test.step('Check in different TimeSpan-Live', async () => {
                    console.log("--- Alarm management-custom alert-live ---");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Live");

                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            const locator = '//div[@class="ag-header ag-focus-managed ag-pivot-off"]//div[@role="presentation"]//div[@role="columnheader"]';
                            const columns: Array<string> = await AlaramEvent.GetColumnsEOSE(locator);

                            // search
                            let i = 0;
                            const columnValues: Array<string> = await AlaramEvent.GetColumnValuesdetails(columns, 6);

                            // console.log("column values", columnValues);
                            for (let i = 1; i <= 5; i++) {
                                if (i != 3) {
                                    expect.soft(columnValues[i]).not.toBeNull();
                                    console.log(columns[i], ":-", columnValues[i]);
                                }
                            }
                        }
                    });
                    await AlaramEvent.OvalCriticalbutton();
                    await AlaramEvent.OvalHighbutton();
                    await AlaramEvent.OvalMediumbutton();
                    await AlaramEvent.OvalLowbutton();



                });
                await test.step('Check in different TimeSpan-day', async () => {
                    console.log("--- Alarm management-custom alert-day ---");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Day");

                    // let flag=0;
                    //await delay(2000);
                    // console.log("flag",flag);
                    // await delay(4000);
                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            // await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");

                            await AlaramEvent.CheckResolvedTime();

                        }
                    });


                });


                await test.step('Check in different TimeSpan-Week', async () => {
                    console.log(" --- Alarm management-custom alert-week ---");
                    await AlaramEvent.ClickontimspanDayWeekMonth("Week");

                    await test.step('test validation', async () => {
                        let p: boolean = await AlaramEvent.chechthepopupNew();
                        if (p) {
                            // await AlaramEvent.clickonok();
                            await AlaramEvent.checktheTableHeader();
                            console.log("Data Not Present");
                        }
                        else {
                            // console.log("Data is present");
                            // 
                            await AlaramEvent.CheckResolvedTime();

                        }
                    });


                });


            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
        
        await test.step(`Log out of application`, async () => {

            await loginPage.LogoutOfApplication();
        });
        // } else {
        //     const abc = console.log("Module not present for the user");
        //     expect(abc).toBe(" ");
        // }

    });

});