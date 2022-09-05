import { IExternalAnimes } from '@infra/contracts/animes';
import { HttpAdapter } from '@shared/adapters/contracts/http-adapter';
import AppError from '@shared/errors/app-error';
import { httpStatusCodes } from '@shared/utils/http-status-codes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class GetExternalAnimesService {
  constructor(
    @inject('AxiosAdapter')
    private httpAdapter: HttpAdapter
  ){}
  public async execute(): Promise<IExternalAnimes[] | undefined> {
    try {
      const animes = await this.httpAdapter.get(process.env.API_URL as string);
      return animes;
    } catch (error) {
      if (error instanceof Error)
        throw new AppError(
          'Error when getting Animes: ' + error.message,
          httpStatusCodes.INTERNAL_SERVER,
          'INTERNAL SERVER',
        );
    }
  }
}
