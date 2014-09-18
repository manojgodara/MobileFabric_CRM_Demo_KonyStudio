var msgInstance;

/***************************************************************
iPhone related push code
**************************************************************/
function regSuccessiPhoneCallback(regId)
{
	kony.print("\n\n regSuccessiPhoneCallback:-\n"+regId+"\n" );
    msgInstance = client.getMessagingService();
	deviceId = kony.os.deviceInfo().deviceid;
	msgInstance.register("iPhone",deviceId,regId,MBaaSConfig.KMSID,regSubscribeSuccess, regSubscribeFailure)
}

function regFailureiPhoneCallback(errormsg)
{
	kony.print("************ JS regFailureCallback() called *********");
	kony.print("\n\nregFailureiPhoneCallback:-\n"+errormsg+"\n");
}

function onlinePushNotificationiPhoneCallback(res)
{
	kony.print("\n\nonlinePushNotificationiPhoneCallback:-\n"+JSON.stringify(res));
	alert(res["content"]);
 	
}

function offlinePushNotificationiPhoneCallback(res)
{
	kony.print("\n\offlinePushNotificationiPhoneCallback:-\n"+JSON.stringify(res));
	alert(res["content"]);
 	//frmInbox.segInBox.addAll([ {lblMsg:res["content"]}]);
	
}

function unregSuccessiPhoneCallback(){};
function unregFailureiPhoneCallback(){};

function callbackiPhoneSetCallbacks()
{
	var callbacksTable = {onsuccessfulregistration: regSuccessiPhoneCallback, onfailureregistration: regFailureiPhoneCallback, 
				onlinenotification: onlinePushNotificationiPhoneCallback, offlinenotification: offlinePushNotificationiPhoneCallback, 
				onsuccessfulderegistration: unregSuccessiPhoneCallback, onfailurederegistration: unregFailureiPhoneCallback}; 
	kony.push.setCallbacks(callbacksTable);
}
function callbackiPhoneRegister()
{
	var notificationTypes = [0, 1, 2];
	kony.push.register(notificationTypes);
}
/***********************************************************************
comon code to fetch all messages
*************************************************************************/
function fetchMsgFailure(error)
{
	kony.print(JSON.stringify(error));
	kony.application.dismissLoadingScreen();
}
function fetchMsgSuccess(response)
{
	kony.print(JSON.stringify(response));
	kony.application.dismissLoadingScreen();
}
function regSubscribeSuccess(response)
{
	kony.print("\n\nregSubscribeSuccess:-\n"+JSON.stringify(response)+"\n");
}
function regSubscribeFailure(error)
{
	kony.print("\n\nregSubscribeFailure:-\n"+JSON.stringify(error)+"\n");
	//kony.application.dismissLoadingScreen();
}
/***************************************************************
android related push code
**************************************************************/
function callbackAndroidRegister()
{
    var configToRegister = {senderid: "208976063116"};
    kony.push.register(configToRegister);
}
function unregFailureAndroidCallback(res){
kony.print("\n\nunregFailureAndroidCallback:-\n"+JSON.stringify(res));
}
function unregSuccessAndroidCallback(res){
	kony.print("\n\nunregSuccessAndroidCallback:-\n"+JSON.stringify(res));
}
function offlinePushNotificationAndroidCallback(res)
{
	kony.print("\n\nofflinePushNotificationAndroidCallback:-\n"+JSON.stringify(res));
	alert(res["content"]);
   	//kony.application.dismissLoadingScreen();
}
function onlinePushNotificationAndroidCallback(res)
{
	kony.print("\n\nonlinePushNotificationAndroidCallback:-\n"+JSON.stringify(res));
	alert(res["content"]);
}
function regFailureAndroidCallback(res)
{
    kony.print("registration failed " + JSON.stringify(res));
    kony.application.dismissLoadingScreen();
}

function regSuccessAndroidCallback(regId) 
{
    kony.print("\n\nRegisterd to Android push server:-\n " + regId);
    msgInstance = client.getMessagingService();
	deviceId = kony.os.deviceInfo().deviceid;
	msgInstance.register("androidgcm",deviceId,regId,"sreenivasulu.nallakshyam@kony.com" ,regSubscribeSuccess, regSubscribeFailure);
}
function callbackAndroidSetCallbacks()
{
	kony.print("\n\n callbackAndroidSetCallbacks  in\n\n");
    kony.push.setCallbacks({
        onsuccessfulregistration: regSuccessAndroidCallback,
        onfailureregistration: regFailureAndroidCallback,
        onlinenotification: onlinePushNotificationAndroidCallback,
        offlinenotification: offlinePushNotificationAndroidCallback,
        onsuccessfulderegistration: unregSuccessAndroidCallback,
        onfailurederegistration: unregFailureAndroidCallback
    });
    kony.print("\n\n callbackAndroidSetCallbacks out\n\n");
}

/*
**************************************************************
Register method to register the device with Push notification provider
**************************************************************
function register() 
{
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator")
	{
		alert("TBD");//remove this condition once push environment is ready for iphone
		return;
	}
 	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	if(frmInbox.segInBox.data == null||frmInbox.segInBox.data ==[])
		frmInbox.segInBox.addDataAt({lblMsg:"Please push the messages from cloud."}, 0);
 	frmInbox.show();
 	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator")
 	{
 		callbackiPhoneSetCallbacks();
		callbackiPhoneRegister();
 	}
 	else
 	{
 		callbackAndroidSetCallbacks();
    	callbackAndroidRegister();
 	}
}*/
function kmsNotificationAlert()
{
	//Defining basicConf parameter for alert
	var basicConf = {message: "Notifications may include alerts,sounds & icon badges ",alertType: constants.ALERT_TYPE_CONFIRMATION,
		alertTitle: '"CRM-SIT" Would Like to Send You Push Notifications',yesLabel:"OK",noLabel: "Don't Allow", alertHandler: handle2};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	kony.application.dismissLoadingScreen();
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}
function handle2(response)
{	
	if(response==true)
	{
		if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator")
 		{
 			callbackiPhoneSetCallbacks();
			callbackiPhoneRegister();
 		}
 		else if(kony.os.deviceInfo().name=="android")
 		{
 			callbackAndroidSetCallbacks();
    		callbackAndroidRegister();
 		}
	}
	
}

