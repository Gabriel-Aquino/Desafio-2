import AxiosAdapter from '@infra/adapters/axios-adapter';
import NodeScheduleAdapter from '@infra/adapters/node-schedule-adapter';
import AnimesRepository from '@infra/repository/animes-repository';
import AnimesRepositoryInterface from '@infra/repository/contracts/animes-repository-interface';
import { HttpAdapter } from '@shared/adapters/contracts/http-adapter';
import { ScheduleAdapter } from '@shared/adapters/contracts/schedule-adapter';
import { container } from 'tsyringe';

container.registerSingleton<AnimesRepositoryInterface>(
  'AnimesRepository',
  AnimesRepository,
);

container.registerSingleton<ScheduleAdapter>(
  'NodeScheduleAdapter',
  NodeScheduleAdapter,
);

container.registerSingleton<HttpAdapter>(
  'AxiosAdapter',
  AxiosAdapter,
);

