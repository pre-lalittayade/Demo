import {CmmsMasterPageObject } from "@objects/CMMS_Master/CmmsObject";
import { WebActions } from '@lib/WebActions'
import {testConfig} from '../../../testConfig';
import {ComboBoxActions} from '@lib_web/ComboBoxActions'
import { TextBoxActions } from "@lib/web/TextBoxActions";
import { DateActions } from "@lib/web/DateActions";
import { Page,expect } from "@playwright/test";


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let textboxObj:TextBoxActions;
let dateObj: DateActions;
let January:string;
let February:string;
let March:string;
let April:string;
let May:string;
let June:string;
let July:string;
let August:string;
let September:string;
let October:string;
let November:string;
let December:string;
let T:number;
let t:number;
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }



export class CmmsPage extends CmmsMasterPageObject{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        textboxObj=new TextBoxActions(this.page);

       }



async ClickAddButton(){    //same as Warehouse//Same as workorder
    await webactions.waitForElementAttached(this.adding_btn);
    await webactions.clickElement(this.adding_btn);
    
}

async Filter(){                     //same as Resources//same as anomily//same as warehouse
    await webactions.waitForElementAttached(this.filter);
    await webactions.clickElement(this.filter);
    await webactions.delay(5000);
} 

async Save(){                                  //same as  activity//same as Resources//same as Anomily//same as warehouse
    await webactions.waitForElementAttached(this.saving_btn);
    await webactions.clickElement(this.saving_btn);
    await webactions.delay(5000);
    await this.page.locator('//button[contains(text(), "Yes")]').click();
  
       await this.page.locator('//button[contains(text(), "Ok")]').click();
       
  }

  async Edit(){
    await webactions.waitForElementAttached(this.editing_btn);
    await webactions.clickElement(this.editing_btn);
    await webactions.delay(5000);
}

  async View(){
    await webactions.waitForElementAttached(this.view_btn1);
    await webactions.clickElement(this.view_btn1);
    await webactions.delay(5000);
}
async Delete(){
    await webactions.clickElement(this.deleting_btn);
    await webactions.delay(5000);
    await this.page.locator('//button[contains(text(), "Yes")]').click();
  
       await this.page.locator('//button[contains(text(), "Ok")]').click();
       

}
async AddPPE(value:string,item:string,name:string){
    await webactions.waitForElementAttached(this.JSA_SearchBtn(value));
    await webactions.clickElement(this.JSA_SearchBtn(value));
    await webactions.clickElement(this.JSA_typedropdown);
    await webactions.waitForElementAttached(this.JSA_typevalue(item));
    await webactions.clickElement(this.JSA_typevalue(item));
    await webactions.enterElementText(this.JSA_Nametxt,name);
    //if(value==="PPE"){
    await webactions.clickElement(this.ActivityJsaAdding_Search);
   // }if(value=="Tools"){
      //  await webactions.clickElement(this.ToolsAdding_searchbtn);
  //  }
    await webactions.delay(5000);
    await webactions.clickElement(this.JSA_row(name));
    await webactions.clickElement(this.ActivityApply_btn);
}
async AddTools(value:string,item:string,name:string){
    
}

 
async findYear(date:string){
    await webactions.delay(4000);
    await webactions.waitForElementAttached(this.Year_btn("Year"));
    await webactions.clickElement(this.Year_btn("Year"));
    // let k=await this.page.innerText(this.Yeartext);
    // console.log(k);
    let DateArray = date.split("-");
    let datelabelArray = (await this.page.innerText(this.datelabel)).split(",");
    let datemonthArray=(datelabelArray[1]).split(' ');
    let month=datemonthArray[0].substring(0,3);

    let y=parseInt(DateArray[2]);
    console.log(y);
    let x=parseInt(datelabelArray[2])

    if(x<y){
       for(let x=parseInt(datelabelArray[2]);x<y;x++)   {  
            console.log(x);
            console.log(y);
        await webactions.clickElement(this.RightArrow_btn);
    } }
    else if(x>y){
        for(let x=parseInt(datelabelArray[2]);x>y;x--)   {  
            console.log(x);
            console.log(y);
            await webactions.clickElement(this.LeftArrow_btn);
        }  
    }
          
   }
   
   async findMonthandDay(date:string){
    await webactions.delay(4000);
    let DateArray = date.split("-");
    let datelabelArray = (await this.page.innerText(this.datelabel)).split(",");
    let datemonthArray=(datelabelArray[1]).split(' ');
    let month=datemonthArray[0].substring(0,3);
    await webactions.clickElement(this.workorderMonth(DateArray[1]));
    await webactions.clickElement(this.workorderweek(DateArray[0]));
    await webactions.clickElement(this.Year_btn("Day"));
   }
  



async TotalNoOfWorkorders(){
    await webactions.delay(4000);
     T=0;
 January=await this.page.innerText(this.NoOfWorkorder("January"));
   let J=January.split(":");
    console.log(January);
    T=T+parseInt(J[1]);
     February=await this.page.innerText(this.NoOfWorkorder("February"));
     let F=February.split(":");
    console.log(February);
    T=T+parseInt(F[1]);
     March=await this.page.innerText(this.NoOfWorkorder("March"));
     let M=March.split(":");
    console.log(March);
    T=T+parseInt(M[1]);
     April=await this.page.innerText(this.NoOfWorkorder("April"));
     let A=April.split(":");
    console.log(April);
    T=T+parseInt(A[1]);
     May=await this.page.innerText(this.NoOfWorkorder("May"));
     let My=May.split(":");
    console.log(May);
    T=T+parseInt(My[1]);
     June=await this.page.innerText(this.NoOfWorkorder("June"));
     let Jun=June.split(":");
    console.log(June);
    T=T+parseInt(Jun[1]);
    July=await this.page.innerText(this.NoOfWorkorder("July"));
     let Jl=July.split(":");
    console.log(July);
    T=T+parseInt(Jl[1]);
     August=await this.page.innerText(this.NoOfWorkorder("August"));
     let Au=August.split(":");
    console.log(August);
    T=T+parseInt(A[1]);
     September=await this.page.innerText(this.NoOfWorkorder("September"));
     let S=September.split(":");
    console.log(September);
    T=T+parseInt(S[1]);
     October=await this.page.innerText(this.NoOfWorkorder("October"));
     let O=October.split(":");
    console.log(October);
    T=T+parseInt(O[1]);
     November=await this.page.innerText(this.NoOfWorkorder("November"));
     let N=November.split(":");
    console.log(November);
    T=T+parseInt(N[1]);
     December=await this.page.innerText(this.NoOfWorkorder("December"));
     let D=December.split(":");
    console.log(December);
 T=T+parseInt(D[1]);
 //let t=parseInt(T);
 console.log(T)
}
async CheckWorkOrderPlaced(){
    let A=T;
    await this.TotalNoOfWorkorders();
    expect.soft(T).toBeGreaterThan(A);
}


async ClickonMoreAddingButton(){
    await webactions.delay(2000);

    await this.page.locator(`//div[@col-id="ProjectName" and @title="Project"]`).scrollIntoViewIfNeeded();
    await webactions.clickElement(this.MultipleAdd_btn);
}
async DeleteAdditional(name:string){
    await webactions.delay(3000);
    await this.page.locator(this.Delete_btn(name)).scrollIntoViewIfNeeded();
    await webactions.clickElement(this.Delete_btn(name));

}
async ViewAssets(value:string){
    await webactions.delay(2000);
    await webactions.waitForElementAttached(this.Asset_viewbtn(value));
    await webactions.clickElement(this.Asset_viewbtn(value));
}
async CloseAssetView(){
    await webactions.clickElement('//button[@class="dailog-close-btn"]//*[text()="clear"]');
}

async AddUsers(name:string){
    await webactions.clickElement(this.Usernamefilter);
    await webactions.clickElement(this.Userfilter_btn);
    await webactions.enterElementText(this.AssignedUsername_txt,name);
    await webactions.clickElement(this.Userfilter_btn);
    await webactions.clickElement(this.Username(name));
    await webactions.clickElement(this.CrewApply_btn);
   }

   async sortandColumnlvloprtns(idname:string,name:string){
   
      
    // await this.ScrollTOElement(this.proj);
    // await this.page.locator(`//div[@col-id="ProjectName" and @title="Project"]`).scrollIntoViewIfNeeded();
  
    await this.page.locator(this.sortingfromcolumn(idname)).scrollIntoViewIfNeeded();
    await webactions.clickElement(this.sortingfromcolumn(idname));
    //await webactions.clickElement(this.buttonsforsorting("general"));
    await webactions.waitForElementAttached(this.pincolumn("Pin Column"));
    await this.page.hover(this.pincolumn("Pin Column"));
    await webactions.clickElement(this.pinvalues("Pin Right"));
    await webactions.delay(2000);
    await webactions.clickElement(this.sortingfromcolumn(idname)); 
    await webactions.clickElement(this.pincolumn("Pin Column"));
    await webactions.clickElement(this.pinvalues("No Pin"));
    await webactions.delay(2000);

    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.delay(2000);
    await webactions.waitForElementAttached(this.pincolumn("Autosize This Column"));
    await webactions.clickElement(this.pincolumn("Autosize This Column"));
    await webactions.delay(2000);
    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
    await webactions.clickElement(this.pincolumn("Reset Columns"));
    await webactions.delay(2000);
  
    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.delay(2000);
    await webactions.waitForElementAttached(this.pincolumn("Autosize All Columns"));
    await webactions.clickElement(this.pincolumn("Autosize All Columns"));
    await webactions.delay(2000);
    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
    await webactions.clickElement(this.pincolumn("Reset Columns"));
    await webactions.delay(2000);
  
    await webactions.clickElement(this.sortingfromcolumn(idname));
    
    await webactions.clickElement(this.buttonsforsorting("columns"));
    await webactions.clickElement(this.selectallcheckbx);
    await webactions.delay(4000);
    await webactions.clickElement(this.selectallcheckbx);
    await webactions.clickElement(this.columnchkbx(name));
    await webactions.delay(4000);
    await webactions.clickElement(this.columnchkbx(name));
    
    
  
  }
  async filterfromcolumn(idname:string,name:string){ 
  
  
    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.clickElement(this.buttonsforsorting("filter"));
    await webactions.delay(2000);
    let searchtxt=`//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
    await webactions.enterElementText(searchtxt,name);
    await webactions.delay(2000);
    await webactions.clickElement(this.buttonsforsorting("filter"));
    await webactions.delay(2000);
  }async Removefilterfromcolumn(idname:string){
    await webactions.clickElement(this.sortingfromcolumn(idname));
    let searchtxt=`//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
    await webactions.delay(2000);
    await webactions.clickElement(searchtxt);
    await this.page.locator(searchtxt).fill(" ");

      }
  async sortColumn(name:string){
    await webactions.waitForElementAttached(this.columntosort(name));
    await webactions.clickElement(this.columntosort(name));
    await webactions.delay(2000);
    await webactions.clickElement(this.AscendingSort(name));
    await webactions.delay(2000);
    await webactions.clickElement(this.DescendingSort(name));
    await webactions.delay(2000);
    await webactions.clickElement(this.columntosort(name));
    await webactions.delay(2000);
    await webactions.clickElement(this.AscendingSort(name));
    await webactions.delay(2000);
  }

}