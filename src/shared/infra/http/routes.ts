import { httpStatusCodes } from '@shared/utils/http-status-codes';
import { Router } from 'express';

const route = Router();

route.get('/', (request, response) => {
  response.status(httpStatusCodes.OK).json({ message: 'Versão 1.0.0' });
});

route.use('*', (request, response) => {
  response
    .status(httpStatusCodes.NOT_FOUND)
    .json({ message: 'Caminho não encontrado' });
});
export default route;
