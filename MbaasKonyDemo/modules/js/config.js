/*MBaaSConfig ={

"DefaultUsername" : "<Enter Your Salesforce Developer Account User Name>", 
"DefaultPassword" : "<Enter Your Salesforce Developer Account Password>",    
"AppKey" : "<Enter Your KonyMobileFabric App Key>", 
"AppSecret" : "<Enter Your KonyMobileFabric App Secret>", 
"IdentityService" : "<Enter Your KonyMobileFabric Identity Service Name>",
"AccountIntegrationService":"<Enter Your KonyMobileFabric Account Related Integration Service Name>",
"LeadIntegrationService":"<Enter Your KonyMobileFabric Lead Related Integration Service Name>",
"ContactIntegrationService":"<Enter Your KonyMobileFabric Contact Related Integration Service Name>",
"OpportunitiesIntegrationService":"<Enter Your KonyMobileFabric Opportunity Related Integration Service Name>",
"ServiceURL" : "<Enter Your KonyMobileFabric Service-URL>",
"KMSID":"<Please provide any Unique identifier for the application. For example your email id.>",    
"getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
"getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
"getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
"getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}

};*/


MBaaSConfig ={
    "DefaultUsername" : "sreenivasn@gmail.com", 
    "DefaultPassword" : "Kony@#214Q2HZyOWh5WcwIz2BlmF3N8LD",    
    "AppKey" : "68fac5743b3667b1d20dbd97485f6203", 
    "AppSecret" : "29971de24e4a912bf26c4184c4209585", 
    "IdentityService" : "SyncDemoIdService",
    "AccountIntegrationService":"AccountIntgService",
    "LeadIntegrationService":"LeadIntgService",
    "ContactIntegrationService":"ContactSyncIntg",
    "OpportunitiesIntegrationService":"OpportunityIntgService",
    "ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    "KMSID":"sreenivasulu.reddy@kony.com",    
    "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
    "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress from Account"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
    "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName  from Opportunity"}
};
