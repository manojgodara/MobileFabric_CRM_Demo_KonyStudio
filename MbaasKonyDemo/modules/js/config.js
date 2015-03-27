MBaaSConfig ={
                "DefaultUsername" : "sreenivasn@gmail.com", 
    "DefaultPassword" : "Kony@(877uJ8SgCQtfWM8h64QgzSUJxu",    
                "AppKey" : "e3e0621b030f8da8eeed07341b78f94d", 
    "AppSecret" : "bd642e4251bab53b07320bc15f71aa9d", 
    "IdentityService" : "SalesForceIdentity",
    "AccountIntegrationService":"SFAccounts",
    "LeadIntegrationService":"SFLeads",
               "ContactIntegrationService":"SFContacts",
    "OpportunitiesIntegrationService":"SFOpportunities",
    "ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    "KMSID":"sreenivasulu.reddy@kony.com",    
    "getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
    "getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
    "getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}
};
