import { useAxios } from '@vueuse/integrations/useAxios';
import { testInstance } from '@/api/instance';
import type { TestBasicParams, TestAdvancedParams } from './type';

// Define the API endpoints
enum Api {
  TEST_BASIC = 'basic',
  TEST_ADVANCED = 'advanced',
}

// Create the API functions
// /test/basic
export const createTestBasic = (params: TestBasicParams) => {
  return useAxios(
    Api.TEST_BASIC,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        basicName: params.basicName,
      },
    },
    testInstance
  );
};

export const createTestAdvanced = (params: TestAdvancedParams) => {
  return useAxios(
    Api.TEST_ADVANCED + `/${params.advancedName}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
    testInstance
  );
};
