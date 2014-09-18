var client;
var syncObj;
/**
****************************************************************
*	Name    : initSuccessCallBack
*	Author  : Kony
*	Purpose : This function will get invoked when initialization of MBaaS client is successful.
*****************************************************************/
function initSuccessCallBack(res)//res is of type JSON and which will have MBaaS application configuration. 
{
	//kony.application.dismissLoadingScreen();
	kmsNotificationAlert();//for push message alert.
}
/**
****************************************************************
*	Name    : initFailureCallBack
*	Author  : Kony
*	Purpose : This function will get invoked when we failed to initialize MBaaS client using init method.
****************************************************************
*/
function initFailureCallBack(error)
{
	var start,end;
	var basicConf = {
            message: "Failure",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Initialization"
        };
    kony.ui.Alert(basicConf, {});
    kony.application.dismissLoadingScreen();
}
/**
****************************************************************
*	Name    : initMbaas
*	Author  : Kony
*	Purpose : This function will initialize MBaaS client so that we can use the MBaaS services.The initialization method fetches the configuration from MBaaS and saves in the cache. Later, the application uses the cached configuration. It is a synchronous call.
****************************************************************
*/
function initMbaas() 
{
    client = new kony.sdk(); //Creating MBaaS client instance 
	frmLogin.textUserName.text =MBaaSConfig.DefaultUsername;
	frmLogin.textPassword.text=MBaaSConfig.DefaultPassword;
	//client =  new kony.mbaas();
    if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		
    //MBaaS client initialization using init method.
    client.init(MBaaSConfig.AppKey,// App key of application to use MBaaS APIs
     	MBaaSConfig.AppSecret,// App secret of application to use MBaaS APIs
     	 MBaaSConfig.ServiceURL,// URL for App's Service Document   
     	 initSuccessCallBack,//Initialization success callback 
      	initFailureCallBack);//Initialization failure callback
}

//function dummy(){};