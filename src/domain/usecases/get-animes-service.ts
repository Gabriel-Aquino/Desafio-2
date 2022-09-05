import { CreateAnimesDTO } from '@domain/dtos/create-animes-DTO';
import AnimesRepositoryInterface from '@infra/repository/contracts/animes-repository-interface';
import GetExternalAnimesService from '@infra/usecases/get-external-animes-service';
import AppError from '@shared/errors/app-error';
import { httpStatusCodes } from '@shared/utils/http-status-codes';
import { container, inject, injectable } from 'tsyringe';

@injectable()
export default class GetAnimesService {
  constructor(
    @inject('AnimesRepository')
    private animesRepository: AnimesRepositoryInterface,
  ) {}

  public async execute(): Promise<void> {
    const animes = await this.animesRepository.getAnimes();

    if(!animes){
      throw new AppError(
        'Animes not found on database',
        httpStatusCodes.INTERNAL_SERVER,
        'INTERNAL SERVER',
      );
    }

    const getExternalAnimesService = container.resolve(GetExternalAnimesService)
    const getExternalAnimes = await getExternalAnimesService.execute();
    if (!getExternalAnimes) {
      throw new AppError(
        'Animes not found on external service',
        httpStatusCodes.INTERNAL_SERVER,
        'INTERNAL SERVER',
      );
    }
    console.log('rodou o service')
    // usar forEach
    getExternalAnimes.forEach(async (externalAnime) => {
      const animeInDatabaseFiltered = animes.find(anime => anime.animes_id === externalAnime._id);
      if(!animeInDatabaseFiltered){
        const newAnime: CreateAnimesDTO = {
          animes_id: externalAnime._id, ...externalAnime
        }
        await this.animesRepository.create(newAnime);
        return;
      }
      await this.animesRepository.removeOne(animeInDatabaseFiltered.id);
        const newAnime: CreateAnimesDTO = {
          animes_id: externalAnime._id,...externalAnime
        }
        await this.animesRepository.create(newAnime)
    })
    const animesOnDatabase = await this.animesRepository.getAnimes();
    console.log(animesOnDatabase?.length);
  }
}
  