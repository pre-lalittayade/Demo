import test from '@lib/BaseTest';
import { testConfig } from '../../../testConfig'
import { Data } from "../../resources/LoginUsers/LoginData"

test(` Login to PHP travels.`, async ({ LoginUsers }) => {
    let index = 0
        if (testConfig.project !== '') {
            for (let i = 0; i < Data.Users.length; i++) {
                if (Data.Users[i].qa === testConfig.project) {
                    index = i;
                    break;
                }
            }
        }
        for (let i = 0; i < Data.Users.length; i++) {

            if (testConfig.project !== '')
                i = index;
             await LoginUsers.navigateToURL();
             await LoginUsers.loginToApplication(Data.Users[i].username, Data.Users[i].password);
             await LoginUsers.LogoutOfApplication();
        if (testConfig.project !== '')
     break;
    }
});