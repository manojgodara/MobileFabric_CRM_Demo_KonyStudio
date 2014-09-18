var identityInstance;
/**
****************************************************************
*	Name    : logout
*	Author  : Kony
*	Purpose : Logout from salesforce account using logut method of identityInstance
****************************************************************
*/
function logout()
{
    identityInstance.logout( function()//success callback
    {
    	/*frmLogin.textPassword.text="";
    	frmLogin.textUserName.text="";*/
    	frmLogin.show();
    },
     function()//failure callback
    { 
    	alert("Logout failed");
    }  );
}
/**
****************************************************************
*	Name    : showDashboard
*	Author  : Kony
*	Purpose : To show dashboard form onclick of home button in iOS contact details page
****************************************************************
*/
function showDashboard()
{
	frmDashBoard.show();
}

/**
****************************************************************
*	Name    : identitySuccess
*	Author  : Kony
*	Purpose : Login success callback
****************************************************************
*/
function identitySuccess(res)
{
	frmDashBoard.show();//show dashboard form
    kony.application.dismissLoadingScreen();
}
/**
****************************************************************
*	Name    : identityError
*	Author  : Kony
*	Purpose : Login failure callback
****************************************************************
*/
function identityError(error) 
{
    var basicConf = {
        message: JSON.stringify(error),//display the error message
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Login Failure"
    };
    kony.ui.Alert(basicConf, {});
    kony.application.dismissLoadingScreen();
    
}
/**
****************************************************************
*	Name    : login
*	Author  : Kony
*	Purpose : This function will make use of MBaaS identity service.
****************************************************************
*/
function login() 
{
	
	if(frmLogin.textUserName.text =="" ||frmLogin.textUserName.text ==null||frmLogin.textPassword.text==""||frmLogin.textPassword.text==null)
	{
		alert("Login Id and Password should not be empty");
		return;
	}
	else{
		try {
			if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" ||kony.os.deviceInfo().name == "iPad"  )
			kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
			else
			kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	    	//Let's make use of MBaaS client instance to invoke getIdentityService method 
	        identityInstance = client.getIdentityService(MBaaSConfig.IdentityService);//CRM is the provider name or identity name of your Identity service and identityInstance is Identity service instance for handling login/logout calls.
	    	
	    	// Invoking login mehod using identityInstance will do login with the given credentials asynchronously and executes the given callback. 				
	     	identityInstance.login({"userid": frmLogin.textUserName.text,"password": frmLogin.textPassword.text},//salesforce credentials
	     	identitySuccess,//login success callback
	     	identityError );//login error callback
			
			
	    }catch (exception) {
	    	alert(JSON.stringify(exception));
	        kony.print("exception " + exception.message);
	    }
	   
	}
}