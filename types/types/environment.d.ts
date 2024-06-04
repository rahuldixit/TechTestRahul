declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IMS_APPLICATION_URL: string;
      TEST_USERNAME: string;
      TEST_PASSWORD: string;
      TEST_USERNAME_2: string;
      TEST_PASSWORD_2: string;
      TEST_USERNAME_3: string;
      TEST_PASSWORD_3: string;
      MILES_APPLICATION_URL: string;
      MILES_SIDEBAR_APPLICATION_URL: string;
      FI_APPLICATION_URL: string;
      FI_APPLICATION2_URL: string;
      FI_NOVATED_DRIVER_USERNAME:string;
      FI_NOVATED_DRIVER_PASSWORD: string;
      FI_AUTOPAK_USERNAME: string;
      FI_AUTOPAK_PASSWORD: string;
      FI_NOVATED_DRIVER_BALANCE_USERNAME: string;
      FI_NOVATED_DRIVER_BALANCE_PASSWORD: string;
      FI_NVB_EMPLOYEE_USERNAME: string;
      FI_NVB_EMPLOYEE_PASSWORD: string;
      EFM_APPLICATION_URL: string;
      EFM_USERNAME: string;
      EFM_PASSWORD: string;
      FAM_APPLICATION_URL: string;
      NBA_APPLICATION_URL: string;
      QUOMO_APPLICATION_URL:string;
      
    }
  }
}
export {}