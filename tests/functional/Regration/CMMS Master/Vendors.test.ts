import test from '@lib/BaseTest';
import { testConfig } from '../../../../testConfig';
import { WebActions } from '@lib/WebActions';
import { testData } from '../../../resources/Regration/CMMS Master/VendorsData';


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Vendors Page", async ({ loginPage, homePage, Vendors, CommonMethods }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await CommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });




    await homePage.NaviagetToMenu("CMMS Master", "Vendors");
    await delay(2000);
    //await CommonMethods.checkPageisCorrectorNot("Vendors");

    //await delay(3000);

    await test.step('Add vendors in CMMS Master', async () => {
        await CommonMethods.ClickAddButton();
        await delay(2000);

        // await Vendors.AddAccount(testData.Vendor[0].Account);
        await Vendors.AddName(testData.Vendor[0].Name);
        await Vendors.AddAddress(testData.Vendor[0].Address);
        await Vendors.AddCity(testData.Vendor[0].City);
        await Vendors.AddZipcode(testData.Vendor[0].zipcode);
        await Vendors.AddContactprsn(testData.Vendor[0].ContactPerson);
        await Vendors.AddTax(testData.Vendor[0].Taxid);
        await Vendors.AddCountry(testData.Vendor[0].Country);
        await Vendors.AddContactnumber(testData.Vendor[0].ContactCode, testData.Vendor[0].Contactnumber);
        await Vendors.AddEmail(testData.Vendor[0].Email);
        await Vendors.Addworktype(testData.Vendor[0].Worktype);

        await CommonMethods.Save();

    });


    await test.step('Filter,view vendors in CMMS Master', async () => {
        await delay(2000);
        await CommonMethods.Filter();
        // await Vendors.FilterAccount(testData.Vendor[0].Account);
        // await Vendors.ClickonResetbutton();
        await Vendors.filterName(testData.Vendor[0].Name);
        await Vendors.ClickonSearchbutton();
        await Vendors.ClickonVenderrow(testData.Vendor[0].Name);
        await delay(2000);

    });
   /*   await test.step('Download Vendors CMMS Master', async () => {
        await Vendors.Downloadfile();
        await delay(3000);
    });
   */ await test.step('Edit vendors in CMMS Master', async () => {
        await delay(2000);
        await CommonMethods.Edit();
        // await Vendors.checkaccount(testData.Vendor[0].Account);
        await Vendors.checkName(testData.Vendor[0].Name);

        await Vendors.AddName(testData.Vendor[0].EditName);
        await CommonMethods.Save();
        await delay(2000);
        await CommonMethods.Filter();
        // await Vendors.FilterAccount(testData.Vendor[0].Account);
        // await Vendors.ClickonResetbutton();
        await Vendors.filterName(testData.Vendor[0].EditName);
        await Vendors.ClickonSearchbutton();
        await Vendors.ClickonVenderrow(testData.Vendor[0].EditName);
        await delay(2000);
        await Vendors.CheckDetailsFirstrow(testData.Vendor[0].Address, "1");
        await Vendors.CheckDetailsSecondrow(testData.Vendor[0].City, "1");
        await Vendors.CheckDetailsSecondrow(testData.Vendor[0].Country, "1");
        await Vendors.CheckDetailsSecondrow(testData.Vendor[0].zipcode, "1");

        await Vendors.EditfirstProfileDetails();
        // await delay(2000);
        await Vendors.checkAddress(testData.Vendor[0].Address);
        await Vendors.checkCity(testData.Vendor[0].City);
        await Vendors.checkZipcode(testData.Vendor[0].zipcode);
        await Vendors.checkCountry(testData.Vendor[0].Country);
        await Vendors.checkTaxid(testData.Vendor[0].Taxid);
        await Vendors.checkcontactPerson(testData.Vendor[0].ContactPerson);
        await Vendors.checkcontactnumber(testData.Vendor[0].ContactCode, testData.Vendor[0].Contactnumber);
        await Vendors.checkEmail(testData.Vendor[0].Email);
        await Vendors.checkWorkType(testData.Vendor[0].Worktype);



        await Vendors.AddAddress(testData.Vendor[0].Address);
        await Vendors.AddCity(testData.Vendor[0].City);
        await Vendors.AddZipcode(testData.Vendor[0].zipcode);
        await Vendors.AddContactprsn(testData.Vendor[0].ContactPerson);
        await Vendors.AddTax(testData.Vendor[0].Taxid);
        await Vendors.AddCountry(testData.Vendor[0].Country);
        await Vendors.AddContactnumber(testData.Vendor[0].ContactCode, testData.Vendor[0].Contactnumber);
        await Vendors.AddEmail(testData.Vendor[0].Email);
        await Vendors.Addworktype(testData.Vendor[0].Worktype);

        await CommonMethods.Save();

        await Vendors.ClickonPlusButton();
        await Vendors.AddAddress(testData.Vendor[0].OtherAddress);
        await Vendors.AddCity(testData.Vendor[0].OtherCity);
        await Vendors.AddZipcode(testData.Vendor[0].Otherzipcode);
        await Vendors.AddContactprsn(testData.Vendor[0].OtherContactPerson);
        await Vendors.AddTax(testData.Vendor[0].OtherTaxid);
        await Vendors.AddCountry(testData.Vendor[0].OtherCountry);
        await Vendors.AddContactnumber(testData.Vendor[0].OtherContactCode, testData.Vendor[0].OtherContactnumber);
        await Vendors.AddEmail(testData.Vendor[0].OtherEmail);
        await Vendors.Addworktype(testData.Vendor[0].OtherWorktype);

        await CommonMethods.Save();


    });

    await CommonMethods.View();
    //await Vendors.checkaccount(testData.Vendor[0].Account);
    await Vendors.checkName(testData.Vendor[0].Name);
    await CommonMethods.ClickCancelButton();
    // await Vendors.ClickonVenderrow(testData.Vendor[0].EditName);
    // await delay(4000);
    await Vendors.CheckDetailsFirstrow(testData.Vendor[0].OtherAddress, "2");
    await Vendors.CheckDetailsSecondrow(testData.Vendor[0].OtherCity, "2");
    await Vendors.CheckDetailsSecondrow(testData.Vendor[0].OtherCountry, "2");
    await Vendors.CheckDetailsSecondrow(testData.Vendor[0].Otherzipcode, "2");
    await Vendors.EditfirstProfileDetails();
    await delay(2000);
    await Vendors.checkAddress(testData.Vendor[0].Address);
    await Vendors.checkCity(testData.Vendor[0].City);
    await Vendors.checkZipcode(testData.Vendor[0].zipcode);
    await Vendors.checkCountry(testData.Vendor[0].Country);
    await Vendors.checkTaxid(testData.Vendor[0].Taxid);
    await Vendors.checkcontactPerson(testData.Vendor[0].ContactPerson);
    await Vendors.checkcontactnumber(testData.Vendor[0].ContactCode, testData.Vendor[0].Contactnumber);
    await Vendors.checkEmail(testData.Vendor[0].Email);
    await Vendors.checkWorkType(testData.Vendor[0].Worktype);
    await CommonMethods.ClickCancelButton();
    await delay(4000);
    await Vendors.EditSecondProfileDetails();
    await delay(2000);
    await Vendors.checkAddress(testData.Vendor[0].OtherAddress);
    await Vendors.checkCity(testData.Vendor[0].OtherCity);
    await Vendors.checkZipcode(testData.Vendor[0].Otherzipcode);
    await Vendors.checkCountry(testData.Vendor[0].OtherCountry);
    await Vendors.checkTaxid(testData.Vendor[0].OtherTaxid);
    await Vendors.checkcontactPerson(testData.Vendor[0].OtherContactPerson);
    await Vendors.checkcontactnumber(testData.Vendor[0].OtherContactCode, testData.Vendor[0].OtherContactnumber);
    await Vendors.checkEmail(testData.Vendor[0].OtherEmail);
    await Vendors.checkWorkType(testData.Vendor[0].OtherWorktype);
    await CommonMethods.ClickCancelButton();
    await Vendors.DeleteSecondProfileDetails();
    await Vendors.VerifySecondItemisDeleted();

    await test.step('Filter-Reset and Delete vendors in CMMS Master', async () => {
        await delay(2000);
        await CommonMethods.Filter();
        //await Vendors.FilterAccount(testData.Vendor[0].Account);
        await Vendors.ClickonResetbutton();
        // await Vendors.CheckfilterACafterReset();
        await Vendors.CheckfilternameafterReset();
    });
    // await test.step('Filter and Delete vendors in CMMS Master', async () => {
    // await delay(2000);
    // await CommonMethods.Filter();
    //  await Vendors.FilterAccount(testData.Vendor[0].Account);
    await Vendors.filterName(testData.Vendor[0].EditName);
    await Vendors.ClickonSearchbutton();
    await Vendors.ClickonVenderrow(testData.Vendor[0].EditName);
    await CommonMethods.Delete();
    await delay(2000);
    await Vendors.CatchpopupOk();
    //Check Item is deleted
    await CommonMethods.Filter();
    //  await Vendors.FilterAccount(testData.Vendor[0].Account);
    await Vendors.filterName(testData.Vendor[0].EditName);
    await Vendors.ClickonSearchbutton();
    await delay(2000);
    await Vendors.CatchpopupOk();

    await Vendors.VerifyEntireProfileisDeleted(testData.Vendor[0].EditName);
    await Vendors.VerifySecondItemisDeleted();

    // });
    await test.step('Check saving without mandatory field and Cancel ', async () => {
        await CommonMethods.Filter();
        await delay(2000);
        await Vendors.ClickoncanceltoCloseFilter();

        await CommonMethods.Filter();
        await Vendors.ClickonResetbutton();
        await delay(2000);
        // await Vendors.FilterAccount(testData.Vendor[0].Account);

        await Vendors.ClickonSearchbutton();
        await Vendors.ClickonPlusButton();
        await Vendors.AddAddress(testData.Vendor[0].Address);

        await Vendors.AddZipcode(testData.Vendor[0].zipcode);
        await Vendors.AddContactprsn(testData.Vendor[0].ContactPerson);
        await Vendors.AddTax(testData.Vendor[0].Taxid);
        await Vendors.AddCountry(testData.Vendor[0].Country);
        await Vendors.AddContactnumber(testData.Vendor[0].ContactCode, testData.Vendor[0].Contactnumber);
        await Vendors.AddEmail(testData.Vendor[0].Email);
        await delay(2000);
        await Vendors.ClickonSavetoCheckMandatoryFields();
        await CommonMethods.ClickCancelButton();
        await delay(2000);
    });
    /*   await test.step('Upload vendors in CMMS Master', async () => {
           await Vendors.Uploadfile(testData.Vendor[0].file);
           //await Vendors.SelectAccountToUpload(testData.Vendor[0].Account);
           await delay(2000);
           await CommonMethods.Save();
          // await Vendors.CatchpopupOk();
   
      });
     */
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });


});