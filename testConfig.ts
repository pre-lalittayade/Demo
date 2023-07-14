export const testConfig = {
    // qa: `https://staging.prescinto.ai/v3/login`,
    // qa: `https://cloud.prescinto.ai/v3/login`,
    qa: `http://20.204.28.204/qav3/login`,
    cloud :`https://cloud.prescinto.ai/v3/login`,
    staging :`https://staging.prescinto.ai/v3/login`,
 
    // qa: `http://20.204.28.204/qav3/`,
    dev: ``,
    qaApi: `https://reqres.in`,
    devApi: ``,
    // username: `rushikesh.sunil@prescinto.ai`,
    // password: `Rushi000@`,

    // username:`p.anupama@prescinto.ai`,
    // password:`HiMowk%444`,

    // username: `tayade.lalit@prescinto.ai`,
    // password: `kdTUyh&712`,
    // username: `p.anupama@prescinto.ai`,
    // password: `fpPrVG@521`,
    waitForElement: 120000,
    dbUsername: ``,
    dbPassword: ``,
    dbServerName: ``,
    dbPort: ``,
    dbName: ``,
    project:``,
    User:`Lalit Tayade`,

    envorments : {
        "qa":[{
            "url" : "http://20.204.28.204/qav3/login",
        }],

        "staging":[{
            "url" : `https://staging.prescinto.ai/v3/login`
        }],

        "cloud":[{
            "url" : `https://cloud.prescinto.ai/v3/login`
        }],
        "dotnetcore":[{
            "url" : `https://devv3.prescinto.ai/v3_netcore/login`
            //`https://staging.prescinto.ai/v3_netcore`
        }]
    }
}