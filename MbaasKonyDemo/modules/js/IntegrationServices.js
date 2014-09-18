var contactDetails=[],opportDetails=[],leadDetails=[],accountDetails=[],currentContctIndex,contactResponse;

/**
****************************************************************
*	Name    : showLeadDetails
*	Author  : Kony
*	Purpose : This function is to display the lead details in lead details form
****************************************************************
*/
function showLeadDetails(leadDetails,leadIndex)
{
	frmLeadDetails.lblLeadDetName.text =leadDetails[leadIndex].FirstName+" "+leadDetails[leadIndex].LastName;
	if(leadDetails[leadIndex].Title==null||leadDetails[leadIndex].Title==""||leadDetails[leadIndex].Title=="null")
		frmLeadDetails.lblLeadDetTtl.text="No Title";
	else
		frmLeadDetails.lblLeadDetTtl.text=leadDetails[leadIndex].Title;
	frmLeadDetails.lblLeadDetFName.text = leadDetails[leadIndex].FirstName;
	frmLeadDetails.lblLeadDetLName.text = leadDetails[leadIndex].LastName;
	if(leadDetails[leadIndex].Phone==null||leadDetails[leadIndex].Phone==""||leadDetails[leadIndex].Phone=="null")
		frmLeadDetails.lblLeadDetPhone.text="No details";
	else
		frmLeadDetails.lblLeadDetPhone.text=leadDetails[leadIndex].Phone;
	if(leadDetails[leadIndex].Email==null||leadDetails[leadIndex].Email==""||leadDetails[leadIndex].Email=="null")
		frmLeadDetails.lblLeadDetEmail.text="No details";
	else
		frmLeadDetails.lblLeadDetEmail.text=leadDetails[leadIndex].Email;
	frmLeadDetails.show();
}
/**
****************************************************************
*	Name    : leadsSuccessCallback
*	Author  : Kony
*	Purpose : This function is to display the lead details in leads form
****************************************************************
*/
function leadsSuccessCallback(response)
{
	var lblLeadName,lblLeadTitle;
	var leadList =[];
	var tempLead ={};
	if(response.Lead!=undefined &&response.Lead!=null&&response.opstatus==0)
	{
		if(response.Lead.length==0)
		{
			alert("No records found");
			kony.application.dismissLoadingScreen();
			return;
		}
		else
		{
			leadDetails = response.Lead;
			for(var i=0;i<response.Lead.length;i++)
			{
				tempLead={};
				tempLead.lblLeadName=response.Lead[i].FirstName+" "+response.Lead[i].LastName;
				if(response.Lead[i].Title==null||response.Lead[i].Title==""||response.Lead[i].Title=="null")
					tempLead.lblLeadTitle="No title";
				else
					tempLead.lblLeadTitle=response.Lead[i].Title;
				leadList.push(tempLead);
			}
			frmLeads.segLeads.removeAll();
			frmLeads.segLeads.setData(leadList);
			frmLeads.show();
		    kony.application.dismissLoadingScreen();
		}
	}
	else
	{
		alert("Service failed");
		kony.application.dismissLoadingScreen();
		return;
	}
}
/**
****************************************************************
*	Name    : showOpportDetails
*	Author  : Kony
*	Purpose : This function is to display the opportunity details in opportunity details form
****************************************************************
*/
function showOpportDetails(opportDetails,opportIndex)
{
	frmOpportunityDetails.lblOpportDetName.text =opportDetails[opportIndex].Name;
	if(opportDetails[opportIndex].Type == "null")
		frmOpportunityDetails.lblContactDetOppType.text="No cutomer type found";
	else
		frmOpportunityDetails.lblContactDetOppType.text=opportDetails[opportIndex].Type;
	frmOpportunityDetails.lblOpportAccntName.text = opportDetails[opportIndex].Name;
	if(opportDetails[opportIndex].Amount=="null")
		frmOpportunityDetails.lblOpportDetAmt.text = "No details found";
	else
		frmOpportunityDetails.lblOpportDetAmt.text = opportDetails[opportIndex].Amount;
	if(opportDetails[opportIndex].ExpectedRevenue=="null")
		frmOpportunityDetails.lblOpportDetER.text="No details found";
	else
		frmOpportunityDetails.lblOpportDetER.text=opportDetails[opportIndex].ExpectedRevenue;
	frmOpportunityDetails.lblOpportDetCloseDate.text=opportDetails[opportIndex].CloseDate;
	if(opportDetails[opportIndex].LeadSource=="null")
		frmOpportunityDetails.lblOpportDetLSource.text="No details found";
	else
		frmOpportunityDetails.lblOpportDetLSource.text=opportDetails[opportIndex].LeadSource;
	frmOpportunityDetails.imgOpprtProbBig.src="p"+opportDetails[opportIndex].Probability.split(".")[0]+".png";
	frmOpportunityDetails.show();
}
/**
****************************************************************
*	Name    : opportsSuccessCallback
*	Author  : Kony
*	Purpose : This function is to display the opportunity details in opportunities form
****************************************************************
*/
function opportsSuccessCallback(response)
{
	var lblOpportName,lblOpportStage,lblOpportType,imgOpportProb;
	var opportList =[];
	var tempOpport ={};
	if(response.Opportunity!=undefined &&response.Opportunity!=null&&response.opstatus==0)
	{
		if(response.Opportunity.length==0)
		{
			alert("No records found");
			kony.application.dismissLoadingScreen();
			return;
		}
		else
		{
			opportDetails = response.Opportunity;
			for(var i=0;i<response.Opportunity.length;i++)
			{
				tempOpport={};
				tempOpport.lblOpportName=response.Opportunity[i].Name;
				tempOpport.lblOpportStage=response.Opportunity[i].StageName;
				if(response.Opportunity[i].Type=="null")
					tempOpport.lblOpportType="Customer type not found";
				else
					tempOpport.lblOpportType=response.Opportunity[i].Type;
				tempOpport.imgOpportProb="p"+response.Opportunity[i].Probability.split(".")[0]+".png";
				opportList.push(tempOpport);
			}
			frmOpportunities.segOpportunities.removeAll();
			frmOpportunities.segOpportunities.setData(opportList);
			frmOpportunities.show();
		    kony.application.dismissLoadingScreen();
		}
	}
	else
	{
		alert("Service failed");
		kony.application.dismissLoadingScreen();
		return;
	}
}	
/**
/**
****************************************************************
*	Name    : showAccountDetails
*	Author  : Kony
*	Purpose : This function is to display the account details in account details form
****************************************************************
*/
function showAccountDetails(accountDetails,accountIndex)
{
	frmAccountDetails.lblAccountDetName.text =accountDetails[accountIndex].Name;
	if(accountDetails[accountIndex].Type==null||accountDetails[accountIndex].Type==""||accountDetails[accountIndex].Type=="null")
		frmAccountDetails.lblAccountDetType.text="Cutomer type not found";
	else
		frmAccountDetails.lblAccountDetType.text=accountDetails[accountIndex].Type;
	if(accountDetails[accountIndex].Website=="null")
		frmAccountDetails.lblAccountDetWebSite.text = "No details";
	else
		frmAccountDetails.lblAccountDetWebSite.text = accountDetails[accountIndex].Website;
	if(accountDetails[accountIndex].AnnualRevenue=="null")
		frmAccountDetails.lblAccountDetAnnualRevenue.text = "No details";
	else
		frmAccountDetails.lblAccountDetAnnualRevenue.text = accountDetails[accountIndex].AnnualRevenue;
	if(accountDetails[accountIndex].Phone==null||accountDetails[accountIndex].Phone==""||accountDetails[accountIndex].Phone=="null")
		frmAccountDetails.lblAccountDetPhone.text="No details";
	else
		frmAccountDetails.lblAccountDetPhone.text=accountDetails[accountIndex].Phone;
	if(accountDetails[accountIndex].BillingStreet=="null"&&accountDetails[accountIndex].BillingCity=="null"||accountDetails[accountIndex].BillingState=="null")
		frmAccountDetails.lblAccountDetBillingAddr.text="No details";
	else
		frmAccountDetails.lblAccountDetBillingAddr.text=accountDetails[accountIndex].BillingStreet+", "+accountDetails[accountIndex].BillingCity+", "+accountDetails[accountIndex].BillingState;
	frmAccountDetails.show();
}
/**
****************************************************************
*	Name    : accountSuccessCallback
*	Author  : Kony
*	Purpose : This function is to display the account details in accounts form
****************************************************************
*/
function accountSuccessCallback(response)//responce is JSON object which will have all the accounts related to the salesforce account through which we login.
{
	var lblAccountName,lblAccountType;
	var accountList =[];
	var tempAccount ={};
	if(response.Account!=undefined &&response.Account!=null&&response.opstatus==0)
	{
		if(response.Account.length==0)
		{
			alert("No records found");
			kony.application.dismissLoadingScreen();
			return;
		}
		else
		{
			accountDetails = response.Account;//accountDetails will have all the records which may be used later to display more details of an account. 
			for(var i=0;i<response.Account.length;i++)
			{
				tempAccount={};
				tempAccount.lblAccountName=response.Account[i].Name;
				if(response.Account[i].Type==null||response.Account[i].Type==""||response.Account[i].Type=="null")
					tempAccount.lblAccountType="Cutomer type not found";
				else
					tempAccount.lblAccountType=response.Account[i].Type;
				accountList.push(tempAccount);
			}
			frmAccounts.segAccounts.removeAll();
			frmAccounts.segAccounts.setData(accountList);
			frmAccounts.show();
		    kony.application.dismissLoadingScreen();
		}
	}
	else
	{
		alert("Service failed");
		kony.application.dismissLoadingScreen();
		return;
	}
}
/**
****************************************************************
*	Name    : showContactDetails
*	Author  : Kony
*	Purpose : This function is to display the contact details in contact details form
****************************************************************
*/
function showContactDetails(contactDetails,contactIndex)
{
	currentContctIndex=contactIndex;
	//gblContactObject = contactDetails[contactIndex];
	frmContactDetails.lblContactDetName.text =contactDetails[contactIndex].FirstName+" "+contactDetails[contactIndex].LastName;
	if(contactDetails[contactIndex].Title==null||contactDetails[contactIndex].Title==""||contactDetails[contactIndex].Title=="null")
	{
		frmContactDetails.lblContactDetTtl.text="No title";
	}else{
		frmContactDetails.lblContactDetTtl.text=contactDetails[contactIndex].Title;
	}
	frmContactDetails.lblContactDetFName.text = contactDetails[contactIndex].FirstName;
	frmContactDetails.lblContactDetLName.text = contactDetails[contactIndex].LastName;
	if(contactDetails[contactIndex].Phone==null||contactDetails[contactIndex].Phone==""||contactDetails[contactIndex].Phone=="null")
	{
		frmContactDetails.lblContactDetPhone.text="No details";
	}
	else{
		frmContactDetails.lblContactDetPhone.text=contactDetails[contactIndex].Phone;
	}
	if(contactDetails[contactIndex].Email==null||contactDetails[contactIndex].Email==""||contactDetails[contactIndex].Email=="null")
		frmContactDetails.lblContactDetEmail.text="No details";
	else
		frmContactDetails.lblContactDetEmail.text=contactDetails[contactIndex].Email;
			
	frmEditContactDetails.lblContactDetName2.text=frmContactDetails.lblContactDetName.text;
	frmEditContactDetails.lblContactDetTtl2.text=frmContactDetails.lblContactDetTtl.text;
	frmEditContactDetails.txtBoxContactDetailsFirstName.text=frmContactDetails.lblContactDetFName.text;
	frmEditContactDetails.txtBoxContactDetLName.text=frmContactDetails.lblContactDetLName.text;
	frmEditContactDetails.txtBoxContactDetPhone.text=frmContactDetails.lblContactDetPhone.text;
	frmEditContactDetails.txtBoxContactDetEmail.text=frmContactDetails.lblContactDetEmail.text;
	frmContactDetails.show();
}
/**
****************************************************************
*	Name    : contactSuccessCallback
*	Author  : Kony
*	Purpose : This function is to display the contact details in contacts form
****************************************************************
*/
var Id;
function contactSuccessCallback(response)
{
	kony.print("in contact successcallback");
	kony.print(JSON.stringify(response));
	var lblContactName,lblContactTitle;
	var contactList =[];
	var tempContact ={};
	if(response && response.Contact)
		response.list = response.Contact;
	if(response.list!=undefined &&response.list!=null&&response.opstatus==0)
	{
		if(response.list.length==0)
		{
			alert("No records found");
			kony.application.dismissLoadingScreen();
			return;
		}
		else
		{
			//Id=response.list[0].Id;
			//alert("id of 0th contact "+Id+"Name:-"+response.list[0].FirstName);
			contactDetails = response.list;
			for(var i=0;i<response.list.length;i++)
			{
				tempContact={};
				tempContact.lblContactName=response.list[i].FirstName+" "+response.list[i].LastName;
				if(response.list[i].Title==null||response.list[i].Title==""||response.list[i].Title=="null")
					tempContact.lblContactTitle="No Title";
				else
					tempContact.lblContactTitle=response.list[i].Title;
				contactList.push(tempContact);
			}
			frmContacts.segContacts.removeAll();
			frmContacts.segContacts.setData(contactList);
			frmContacts.show();
		    kony.application.dismissLoadingScreen();
		}
	}
	else
	{
		alert("Service failed");
		kony.application.dismissLoadingScreen();
		return;
	}
}
/**
****************************************************************
*	Name    : integFailureCallback
*	Author  : Kony
*	Purpose : This function is common error callback for all the integration services
****************************************************************
*/
function integFailureCallback(error)
{
	var basicConf = {
        message: JSON.stringify(error),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Login Failure"
    };
    kony.ui.Alert(basicConf, {});
	//kony.print(JSON.stringify(error));
    kony.application.dismissLoadingScreen();
}
/**
****************************************************************
*	Name    : getAccounts
*	Author  : Kony
*	Purpose : This function is to fetch salesforce account details by 'getIntegrationService' method.
****************************************************************
*/
function getAccounts()
{
	//var intgService="SFInt";
	//var intgService="SFAccount";
	var accountsClient;
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	try{
		//Making MBaaS client instance to invoke getIntegrationService method.
		accountsClient = client.getIntegrationService(MBaaSConfig.AccountIntegrationService);//Accounts is service name and accountsClient is Accounts integration service instance
		//accountsClient.invokeOperation(Accounts service name,headers,query params, SuccessCallback,FailureCallback);
	 	accountsClient.invokeOperation("getAccount",{},MBaaSConfig.getAccountQuery, accountSuccessCallback, integFailureCallback);
	 }catch(excp){
	 	 kony.application.dismissLoadingScreen();
	 	kony.print(JSON.stringify(excp));
	 	}
}
/**
**********************************************************************************
*	Name    : getContacts
*	Author  : Kony
*	Purpose : This function is to fetch salesforce contact details by "ORM API's".
**********************************************************************************
*/
function getContacts()
{
	var contactClient;
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	try{
		contactClient = client.getIntegrationService(MBaaSConfig.ContactIntegrationService);
		contactClient.invokeOperation("getContact", {},MBaaSConfig.getContactQuery,contactSuccessCallback, integFailureCallback);
	}catch(excp){
		kony.print(JSON.stringify(excp));
	}
}

/**
****************************************************************
*	Name    : getLeads
*	Author  : Kony
*	Purpose : This function is to fetch salesforce lead details by 'getIntegrationService' method.
****************************************************************
*/
function getLeads()
{
	var leadClient;
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	try{
		leadClient = client.getIntegrationService(MBaaSConfig.LeadIntegrationService);
		leadClient.invokeOperation("getLead", {},MBaaSConfig.getLeadQuery,leadsSuccessCallback, integFailureCallback);
	}catch(excp){
		kony.print(JSON.stringify(excp));
	}
	
}
/**
****************************************************************
*	Name    : getOpportunities
*	Author  : Kony
*	Purpose : This function is to fetch salesforce opportunity details by 'getIntegrationService' method.
****************************************************************
*/
function getOpportunities()
{
	var opportsClient;
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	try{
		opportsClient = client.getIntegrationService(MBaaSConfig.OpportunitiesIntegrationService);
		opportsClient.invokeOperation("getOpportunity",{},MBaaSConfig.getOpportunityQuery, opportsSuccessCallback, integFailureCallback);
	}catch(excp){
		kony.print(JSON.stringify(excp));
	}
}
