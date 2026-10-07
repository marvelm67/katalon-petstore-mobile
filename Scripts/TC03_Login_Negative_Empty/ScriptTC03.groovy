import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import internal.GlobalVariable as GlobalVariable

Mobile.startApplication(GlobalVariable.MobileApkPath, true)
Mobile.tap(findTestObject('Mobile/Page_Login/btn_Login'), 10)
Mobile.verifyElementExist(findTestObject('Mobile/Page_Login/msg_Error'), 10)
Mobile.closeApplication()
