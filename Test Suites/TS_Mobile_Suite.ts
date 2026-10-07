<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
  <name>TS_Mobile_Suite</name>
  <description>Test Suite untuk 5 Mobile Test Cases SauceLabs</description>
  <tag>mobile,regression</tag>
  <testCaseLinks>
    <testCaseLink>
      <testCaseId>Test Cases/Mobile/TC01_Login_Positive</testCaseId>
      <type>INCLUDE</type>
      <executionOrder>1</executionOrder>
    </testCaseLink>
    <testCaseLink>
      <testCaseId>Test Cases/Mobile/TC02_Login_Negative_WrongCred</testCaseId>
      <type>INCLUDE</type>
      <executionOrder>2</executionOrder>
    </testCaseLink>
    <testCaseLink>
      <testCaseId>Test Cases/Mobile/TC03_Login_Negative_Empty</testCaseId>
      <type>INCLUDE</type>
      <executionOrder>3</executionOrder>
    </testCaseLink>
    <testCaseLink>
      <testCaseId>Test Cases/Mobile/TC04_AddToCart</testCaseId>
      <type>INCLUDE</type>
      <executionOrder>4</executionOrder>
    </testCaseLink>
    <testCaseLink>
      <testCaseId>Test Cases/Mobile/TC05_AddAndRemoveCart</testCaseId>
      <type>INCLUDE</type>
      <executionOrder>5</executionOrder>
    </testCaseLink>
  </testCaseLinks>
  <profiles>
    <profile>default</profile>
    <profile>mobile</profile>
  </profiles>
</TestSuiteEntity>
