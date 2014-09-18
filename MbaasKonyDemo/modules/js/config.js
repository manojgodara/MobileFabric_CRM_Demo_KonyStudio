MBaaSConfig ={
	
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
    "KMSID":"<Enter Your KMS ID>",    
    "getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
    "getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
    "getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}
};