import {GET_DUMMY_DATA} from '../Endpoints';
import handleRequest from '../handleRequest';

export const getData = async (data: any) => {
  return handleRequest(GET_DUMMY_DATA, data);
};
