import { IAnimes } from '@domain/contracts/i-animes';
import { CreateAnimesDTO } from '@domain/dtos/create-animes-DTO';
import { IExternalAnimes } from '@infra/contracts/animes';

export default interface AnimesRepositoryInterface {
  getAnimes(): Promise<IAnimes[] | undefined>;
  create({banner, genres, name, note, year}: CreateAnimesDTO): Promise<IAnimes>;
  remove(): Promise<void>;
  removeOne(id: string): Promise<void> ;
}
