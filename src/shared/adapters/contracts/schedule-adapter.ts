import { ScheduleParams } from "./schedule-params";

export interface ScheduleAdapter {
  scheduleEvent(scheduleParams: ScheduleParams, service: any): void;
}