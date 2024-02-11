## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Sat Jan 27 2024 13:05:05 GMT+0530 (India Standard Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.11.5|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>simple|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://services.odata.org/V2/Northwind/Northwind.svc
|**Module Name**<br>northwinderp|
|**Application Title**<br>Northwind ERp|
|**Namespace**<br>sap.com|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.4|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## northwinderp

A Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


# Application Description and functionalities

This application is using northwind odata v2 service which is open and can be use without any authentication for learning purpose.

this northwind service contains various tables about northwind fiction company for example Employees, orders, product lists, invoices etc.
I have used these tables in custom UI5 app and displayed the data of these tables with uses of sap ui5 grid and responsive tables also the search functionaltity has been used.
i have used JSON model  insead of direct binding of odata model because i wanted to explore JSON model and its feature more.



