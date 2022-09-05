import { CreateAnimesDTO } from '@domain/dtos/create-animes-DTO';
import AnimesRepositoryInterface from './contracts/animes-repository-interface';
import { Animes } from '@database/mongoose/models/animes';
import { IExternalAnimes } from '@infra/contracts/animes';
import { IAnimes } from '@domain/contracts/i-animes';

export default class AnimesRepository implements AnimesRepositoryInterface {
  constructor() {}
  async getAnimes(): Promise<IAnimes[] | undefined> {
    const animes = await Animes.find()
    return animes;
  }
  async create({animes_id, banner, genres, name, note, year}: CreateAnimesDTO): Promise<IAnimes> {
    return await Animes.create({
      animes_id, banner, genres, name, note, year, createdAt: new Date()
    });
  }

  async remove(): Promise<void>{
    await Animes.remove()
  }
  async removeOne(id: string): Promise<void> {
    await Animes.deleteOne({id})
  }

  async findById(id: string): Promise<IAnimes | null>{
    return Animes.findById(id)
  }
}
