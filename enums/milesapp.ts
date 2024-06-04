export enum NEW_QUOTE_REQ_LABELS {
  REQUEST_NUMBER = "Request Number",
  QUOTE_NUMBER = "Quote Number",
  CUSTOMER_OR_COST_CENTRE = "Customer or Cost Centre",
  INTERNAL_REQUEST_REFERENCE = "Internal Request Reference",
  STATUS = "Status",
  QUOTATION_TEMPLATE = "Quotation Template",
  REQUEST_DRIVER = "Request Driver",
  EXTERNAL_REQUEST_REFERENCE = "External Request Reference",
  TYPE = "Type",
  QUOTE_REASON = "Quote Reason",
  CONTRACT_TO_BE_REPLACED = "Contract to be replaced",
  CREATION_DATE = "Creation Date",
  REQ_DELIVERY_DATE = "Req Delivery Date",
  EXPIRATION_DATE = "Expiration Date",
  "NOTES_(TO_APPEAR_ON_QUOTE_DOCUMENT)" = "Notes (to appear on Quote document)",
  LOST_BUSINESS_REASON = "Lost Business Reason",
  LOST_BUSINESS_COMMENTS = "Lost Business Comments",
  POOL_VEHICLE_DESCRIPTION = "Pool Vehicle Description",
  POOL_DRIVER_LEVEL = "Pool Driver Level",
  HOME_GARAGE = "Home Garage",
  HOME_GARAGE_DESCRIPTION = "Home Garage Description",
  VEHICLE_PROCUREMENT_TYPE = "Vehicle Procurement Type",
  SUMMARY = "Summary",
  LEASE_SERVICE = "Lease Service",
  COPY = "Copy...Copy selected quote",
  NOVATED_CONTRACT_CATEGORY = "Novated Contract Category",
  VEHICLE = "Vehicle",
  MORE = "More",
}

export enum NEW_QUOTE_VEHICLE_LABELS {
  MAKE = "Make",
  MODEL = "Model",
  TYPE = "Type",
  DESCRIPTION = "Description",
  DEALER = "Dealer",
  DEALER_REFERENCE = "Dealer Reference",
  PURCHASE_TYPE = "Purchase Type",
  VEHICLE_SOURCE = "Vehicle Source",
  REG_POST_CODE = "Reg Post Code",
  STATE = "State",
  REG_CATEGORY = "Reg Category",
  NO_OF_VEHICLES = "No of Vehicles",
  CUSTOMER_ASSET_NUMBER = "Customer Asset Number",
  COMMERCIAL_ASSET_TYPE = "Commercial Asset Type",
  GROSS_ANNUAL_SALARY = "Gross Annual Salary",
  FBT_METHOD = "FBT Method",
  COMMERCIAL_BODY_STYLE = "Commercial Body Style",
  SALARY_PAYMENT_CYCLE = "Salary Payment Cycle",
  LEASEGUARD_OPT_OUT = "LeaseGuard Opt Out",
  LEASEGUARD_OPT_OUT_ ="LeaseGuard Opt-Out",
  AT_FAULT_CLAIMS = "In the last 3 years have you had 2 or more at fault claims?",
  CONVICTED_DUI = "In the last 3 years have you been charged with DUI and/or prescribed concentration of alcohol (PCA)?",
  NEGLIGENT_DRIVING = "In the last 3 years have you been charged with negligent driving?",
  DURATION = "Duration",
  DISTANCE = "Distance",
  TOTAL_DURATION = "Total Duration",
  TOTAL_DISTANCE = "Total Distance",
  PRODUCT = "Product",
  AMOUNT_FINANCE = "Amount Finance",
  LIST_PRICE = "List Price",
  RV_EXCL__GST = "RV Excl  GST",
  DELIVERY_COST = "Delivery Cost",
  FBT_BASE_VALUE = "FBT Base Value",
  DISCOUNTS = "Discounts",
  RENTAL_EXCL_GST = "Rental Excl GST",
  ON_ROAD_COST = "On Road Cost",
  RENTAL_INCL_GST = "Rental Incl GST",
  BOOK_VALUE_AT_CHANGE_DATE = "Book Value at Change Date",
  VEHICLE_USAGE = "Vehicle Usage",
  DISTANCE_OF_DATE = "Distance of Date",
  ZLEV_FIRST_HELD_DATE = "ZLEV First Held Date",
  ZLEV_FIRST_PURCHASE_PRICE = "ZLEV First Purchase Price",
  MANUAL_FBT_VALUE = 'Manual FBT Value',
  MANUAL_FBT_STATUS = 'Manual FBT Status',
  FBT4YEARS = "FBT After 4 Years", 
  THIRD_PARTY_LESSOR = "3rd Party Lessor",
  RV_OVERRIDE_STATUS = "RV Override Status"
}

export enum REQUEST_DRIVER_LABELS {
  FIRST_NAME = " First Name",
  LAST_NAME = " Last Name",
  CONTACT_IDENTIFICATION = " Contact Identification",
  BUSINES_PARTNER_NAME = " Busines Partner Name",
  LEGAL_ENTITY_NAME = " Legal Entity Name",
  ADDRESS = " Address",
  DRIVER_STATUS = " Driver Status",
  LICENSE_PLATE = " License Plate",
  CONTACT_ROLE_ID = " Contact Role ID",
  LEAVE_DATE = " (Leave Date",
  OR_LEAVE_DATE = "OR leave Date)",
  PAY_ROLL = " Pay Roll",
}

export enum VEHICLE_TYPE_LABELS {
  _MAKE_NAME = " Make Name",
  MODEL_NAME = " Model Name",
  TYPE_NAME = " Type Name",
  VEHICLE_DESCRIPTION = " Vehicle Description",
  CO2EMISSION = " Co2Emission",
  FUEL_TYPE = " Fuel Type",
  VEHICLE_NATURE = " Vehicle Nature",
  VEHICLE_CATEGORY = " Vehicle Category",
  BODY_STYLE = " Body Style",
  ENERGY_LABEL = " Energy Label",
  EMISSION_NORM = " Emission Norm",
  KW = " Kw",
  DIN_HP = " Din HP",
  VEHICLE_STATUS = " Vehicle Status",
  JATO_UNIQUE_ID = " jato unique id",
  JATO_VEHICLE_ID = " JATO Vehicle Id",
  JATO_VERSION_ID = " JATO Version Id",
  ETANCODE = " etanCode",
  ON_ROAD_COST = " On Road Cost",
  CATALOGPRICE = " catalogPrice",
  NVIC = " NVIC",
  CATALOG_ID = " catalog ID",
}

export enum VEHICLE_DELIVERY_LABELS {
  DEALER = "Dealer",
  DEALER_REFERENCE = "Dealer Reference",
  DEALER_CONTACT = "Dealer Contact",
  REQUESTED_DELIVERY_DATE = "Requested Delivery Date",
  REGISTRATION_POST_CODE = "Registration Post Code",
  REGISTRATION_SUBURB = "Registration Suburb",
  STATE = "State",
  REQUESTED_DEALER = "Requested Dealer",
  USAGE_CATEGORY = "Usage Category",
  REGISTRATION_CRN = "Registration CRN",
  REGISTRATION_EXPIRY = "Registration Expiry",
  REGISTRATION_CODE = "Registration Code",
  CTP_REGION = "CTP Region",
  CTP_PROVIDER = "CTP Provider",
  BUILDDATE = "BuildDate",
  COMMON_EXPIRY_DATE = "Common Expiry Date",
  CURRENT_ODO = "Current Odo",
  FIRST_REGISTRATION_DATE = "First Registration Date",
  PLATE_TYPE = "Plate Type",
  CHASSIS_NUMBER = "Chassis Number",
  LICENSE_PLATE = "License Plate",
  DELIVERY_LOCATION = "Delivery Location",
  DELIVERY_CONTACT = "Delivery Contact",
  DELIVERY_PHONE = "Delivery Phone",
  DELIVERY_EMAIL = "Delivery Email",
  DELIVERY_REGION = "Delivery Region",
}

export enum SEARCH_CONTRACT_LABELS {
  ID = " ID",
  ID_ = "id",
  REFERENCE = " reference",
  CUSTOMER_NAME = "Customer name",
  SERVICE_NAME = "Service Name",
  DRIVER_NAME = "Driver name",
  LICENSE_PLATE = "License plate",
  VEHICLE_DESCRIPTION = "Vehicle description",
  PRODUCT = "Product",
  CONTRACT_STATUS = "Contract status",
  END_DATE = "End Date",
  START_DATE = "startDate",
  PREVIOUS_LICENCE_PLATE = "Previous Licence plate",
  DRIVE_REFERENCE = "Drive Reference",
  TPSC_SUPPLIER_NAME = "TPSC Supplier Name",
  LEGAL_ENTITY_CBA_NUMBER = "Legal Entity CBA Number",
  LEGAL_ENTITY_CBA_SEQ = "Legal Entity CBA Seq",
  BILLABLE_STATUS = " Billable Status",
  BILLING_STATUS = " Billing Status",
  CONFIGVEHICLE_BODYSTYLE = "ConfigVehicle.BodyStyle",
  CONFIGVEHICLE_DESCRIPTION = "ConfigVehicle.description",
  CONFIGVEHICLE_VEHICLESOURCE =" ConfigVehicle.Vehicle Source",
  LEASESERVICECOMPONENTS_NETRENTAL_DESCRIPTION=" LeaseServiceComponents:NetRental.description",
  FUNDING_ARRANGEMENT=" Funding Arrangement",
  FIRST_REGISTRATION_DATE=" FleetVehicle.firstRegistrationDate",
  CATEGORY = "LeaseService.Contract Category"  
}

export enum SEARCH_PURCHASE_INVOICE_LABELS {
  INVOICE_TYPE = "Invoice type",
  INVOICE_STATUS = "Invoice status",
  INVOICE_DATE = "Invoice date",
  INVOICE_NUMBER = "Invoice number",
}

export enum FUNDING_VERSION_LABELS{
  FUNDING_CREDIT_AUTH = "Funder Credit Auth",
  VAT_CODE = "VAT Code",
}

export enum SEARCH_QUOTE_LABELS {
  QUOTES_ID = " Quotes Id",
  REQUEST_REFERENCE = " Request reference",
  REQUEST_ID = " Request Id",
  CUSTOMER = " Customer",
  CREATION_DATE = " Creation date",
  DRIVER = " Driver",
  VEHICLE = " Vehicle",
  PRODUCT = " Product",
  DISTANCE = " Distance",
  DURATION = " Duration",
  REQUEST_TYPE = " Request type",
  QUOTE_TYPE = " Quote type",
  QUOTE_STATUS = " Quote status",
  REQUEST_STATUS = " Request status",
  REPLACING_REGO = " Replacing Rego",
  REGO_NO = " Rego No",
  CONTRACT_REFERENCE = " Contract Reference",
  BUSINESS_UNIT_ID = "Business Unit ID",
  TRADING_NAME = "Trading Name"
}

export enum NEW_QUOTE_HEADER_LABELS {
  REQUEST_NUMBER = "Request Number",
  CUSTOMER_OR_COST_CENTRE = "Customer or Cost Centre",
  INTERNAL_REFERENCE = "Internal Reference",
  LEASING_COMPANY = "Leasing Company",
  DRIVER = "Driver",
  EXTERNAL_REQUEST_REFERENCE = "External Request Reference",
  REQUEST_STATUS = "Request Status",
  CREATION_DATE = "Creation Date",
  REQUEST_TYPE = "Request Type",
  USER = "User",
}

export enum CUSTOMER_OR_COST_CENTRE_LABELS {
  TRADING_NAME = " Trading Name",
  LEGAL_ENTITY = " Legal Entity",
  HIERARCHY_PATH = " Hierarchy Path",
  BUSINESS_PARTNER_REFERENCE = " Business Partner Reference",
  BUSINESS_PARTNER_ID = " Business Partner ID",
  DRIVE_REFERENCE = " Drive Reference",
  PRICEBOOK_CATEGORY = " Pricebook Category",
  EXTERNAL_REFERENCE = " External Reference",
  VAT_NUMBER = " VAT Number",
  PRIMARY_ADDRESS = " Primary Address",
  PRIMARY_PHONE = " Primary Phone",
  CUSTOMER_STATUS = " Customer Status",
  AND_NOT_CUSTOMER_ID = "AND NOT Customer.id",
  SALES_REGION = "Sales Region"
}

export enum VEHICLE_ORDER_LABELS {
  SUPPLIER = "Supplier",
  TRADING_NAME = "Trading Name",
  VEHICLE_ORDER_NUMBER = "Vehicle Order Number",
  SUPPLIER_REFERENCE = "Supplier Reference",
  EST_DELIVERY_DATE = "Est Delivery Date",
  STATUS = "Status",
  TRADING_ORDER_STATUS = "Trading Order Status",
}

export enum FLEET_VEHICLE_LABELS {
  CHASSIS_NUMBER = "Chassis Number",
  MOTOR_NUMBER = "Motor Number",
  DATE_AND_TIME = "Date & Time",
  DISTANCE = "Distance",
  DRIVER = "Driver",
  VEHICLE_USAGES = "Vehicle Usages",
  REGISTRATION_AND_DOCUMENTS = "Registration and Documents",
  REGISTERED_LICENSE_PLATES = "Registered License Plates",
  FLEET_VEHICLE = "Fleet Vehicle",
}

export enum QUOTE_AMENDMENT_LABELS {
  CHANGE_REASON = "Change Reason",
  CHANGE_DATE = "Change Date",
  LEASE_SERVICE = "Lease Service",
  LEASING_COMPANY = "Leasing Company",
  CUSTOMER = "Customer",
  QUOTE_DRIVER = "Quote Driver",
  EXTERNAL_REFERENCE = "External Reference"

}

export enum CONTACT_LABELS {
  TITLE = "Title",
  DATE_OF_BIRTH = "Date of Birth",
  GENDER = "Gender",
  FIRST_NAME = "First Name",
  LAST_NAME = "Last Name",
  JOIN_DATE = "Join Date",
  EMPLOYEE_NUMBER = "Employee Number",
  PERSON = "Person",
  OK = "OK",  
}

export enum LEASE_SERVICE_LABELS {
  TPSC_COST_PRICE = "TPSC Cost Price",
  MANUAL_RV_OVERRIDE = "Manual RV Override",
  RV_OVERRIDE_STATUS = "RV Override Status",
  MANUAL_STANDARD_INTEREST_MARGIN = "Manual Standard Interest Margin",
  MANUAL_INTEREST_STATUS = "Manual Interest Status",
  MORE = "More",
}

export enum CONTRACT_LABELS {
  STATUS = "Status",
  BILLABLE = "Billable",
  VERSIONS = "Versions",
  LEASE_SERVICE = "Lease Service",
  INSURANCE_TYPE = "Insurance Type",
  DESCRIPTION = "Description",
  PENDING_QUOTES = "Pending Quotes",
  VEHICLE_ORDERS = "Vehicle Orders",
  GENERAL = "General",
  ADDITIONAL_DETAILS = "Additional Details",
  TO_CUSTOMER = "To Customer",
  TO_UNIT_ACCOUNT = "To Unit Account",
  DRIVER = "Driver",
  NEW_BUSINESS_UNIT = "New Business Unit",
  CHANGE_DATE = "Change Date",
  QUOTATION_TEMPLATE = "Quotation Template",
  FINANCIAL = "Financial",
  BILLING_OVERVIEW = "Billing Overview",
}

// In Quote when editing Equipment
export enum EQUIPMENT_LABELS {
  DESCRIPTION = "Description",
  TYPE = "Type",
  CATALOG_PRICE = "Catalog Price",
  DEALER = "Dealer",
}

export enum PURCHASE_INVOICE_LABELS {
  CONTENTS = "Contents",
  GENERAL = "General",
  STATUS = "Status",
  RUC_INITIAL_COST = "RUC Initial Cost",
  INITIAL_REGISTRATION = "Initial Registration",
  DOCUMENT_NUMBER = "Document Number",
  DOCUMENT_NUMBER_ = "documentNumber",
  ID = 'ID',
  DOCUMENT_ID = "Document ID",
  INVOICE_NUMBER = "Invoice Number",  
  AMOUNT_VAT_EXCL = "Amount VAT Excl.",
  VAT_AMOUNT = "VAT Amount",
  VAT_NUMBER = "VAT Number",
  AMOUNT_VAT_INCL = "Amount VAT Incl.",
  PAYMENT_METHOD = "Payment Method",
  SUPPLIER = "Supplier",
  FUEL = "Fuel",
  DESCRIPTION = "Description",
  FUEL_TYPE = "Fuel Type",
  QUANTITY= "Quantity",
  UNIT_PRICE= "Unit Price",
  COST_PRICE= "Cost Price",
  RECHARGE_AMOUNT = "Recharge Amount",
  CUSTOMER_APPROVED = "Customer Approved",  
  REMIT_TO = "Remit To",
  DUE_DATE = "Due Date",
  START_DATE = "Start Date",
  END_DATE = "End Date",
  TRADING_NAME = "Trading Name",
  INVOICE_TYPE = 'Invoice Type',
  BANK_ACCOUNT = "Bank Account"
}

export enum DIRECT_CREDIT_LABELS {
  INVOICE_NUMBER = "Invoice number",
  INVOICE_DATE = "Invoice Date",
  BANK_ACCOUNT = "Bank Account",
  COMMENTS = "Comments",
  STATUS = "Status",
  DOCUMENT_NUMBER = "documentNumber",
}

export enum DRIVER_SEARCH_LABELS {
  ID = "ID",
  CONTACT_ROLE = "Contact Role",
  AND_NOT_CONTACT_ROLE= "AND NOT Contact Role"
}

export enum BULK_OPERATIONS {
  INPUT_FILE = "Input File",
  SEARCH_NAME = 'Name',
  SEARCH = "Search",
  COMMAND_NAME = "Command.Name"
}

export enum SALES_INVOICES {
  CUS_INVOICE_NUMBER = "Cus Invoice Number",
}

export enum FINANCIAL_LABELS {
  END_DATE = 'EndDate'
}

export enum PAYMENTS_LABELS {
  STATUS = 'Status',
}

export enum GENERAL_LEDGER_LABELS {
  PAYMENT_ID = 'PaymentDocument.id'
}