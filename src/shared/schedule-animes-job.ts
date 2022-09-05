import GetAnimesService from "@domain/usecases/get-animes-service";

import { container } from "tsyringe"
import { ScheduleAdapter } from "./adapters/contracts/schedule-adapter";

const scheduleAnimesJob = async (scheduleAdapter: ScheduleAdapter) => {
  const getAnimesService = container.resolve(GetAnimesService);
  scheduleAdapter.scheduleEvent({
    month: '*',
    day: '*',
    hour: '*',
    minute: '1',
    seconds: '*'
  }, getAnimesService)
}
export default scheduleAnimesJob;