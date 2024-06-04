import { request as playwrightrequest } from "@playwright/test";

export const getRequest = async ({
  URL,
  params
}: {
  URL: string;
  params: Record<string, any>
}) => {
  const request = await playwrightrequest.newContext();
  console.log(URL, params);
  const response = await request.get(URL, {    
    params
  });    
  return response;
};

