import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import internal.GlobalVariable as GlobalVariable

Mobile.startApplication(GlobalVariable.MobileApkPath, true)
Mobile.setText(findTestObject('Mobile/Page_Login/txt_Username'), GlobalVariable.MobileUsername, 10)
Mobile.setText(findTestObject('Mobile/Page_Login/txt_Password'), GlobalVariable.MobilePassword, 10)
Mobile.tap(findTestObject('Mobile/Page_Login/btn_Login'), 10)
Mobile.verifyElementExist(findTestObject('Mobile/Page_Products/lbl_Products'), 10)
Mobile.tap(findTestObject('Mobile/Page_Products/btn_AddToCart'), 10)
Mobile.delay(2)
Mobile.tap(findTestObject('Mobile/Page_Cart/badge_CartIcon'), 10)
Mobile.delay(1)
Mobile.closeApplication()
