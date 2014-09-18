MBaaSConfig ={
	
	"DefaultUsername" : "sreenivasn@gmail.com", //Auto populated in login username text field
    "DefaultPassword" : "Kony@098PnygieWKfzIoQfWQ1yHpfTse", //Auto populated in password text field   
	"AppKey" : "36ec426e04c1fc18c3ec4b43e68f9037", // App ID obtained from MBaaS console
    "AppSecret" : "981b9ab4ba03e795de15e4650c31ce6a", // App Secret obataiend from MBaaS console
    "IdentityService" : "SForceIdentity",
    "AccountIntegrationService":"SForceAccount",
    "LeadIntegrationService":"SForceLead",
	"ContactIntegrationService":"SForceContact",
    "OpportunitiesIntegrationService":"SForceOpportunity",
    "ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    "KMSID":"sampleid@kony.com",    
    "getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
    "getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
    "getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}
};