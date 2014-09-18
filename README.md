KonyMbaaSDemo
=========

This application will showcase how to use JS MBaaS SDK to invoke identity, integration, messaging services.

# To run this app

1. Download the project
2. Import project to your Kony IDE.
3. In the project,go to js folder under modules and open 'config.js' file
4. Configure your app secret,app key, service URL that you got from your Kony MobileFabric console after app configuration and configure your sales force accounts details. Please look at config.js file below for more information.
5. Build and run the app
 
config.js:

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
	

**Note:**
You need to setup and configure your Kony MobileFabric environment before running the app. Follow these tutorials at  http://docs.kony.com/tutorials/MobileFabric/ to know how to set up Kony MobileFabric environment

# Supported platforms:
**Mobile**
 * Android
 * iPhone

 

