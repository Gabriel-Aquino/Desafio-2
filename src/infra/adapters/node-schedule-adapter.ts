import { ScheduleAdapter } from "@shared/adapters/contracts/schedule-adapter";
import { ScheduleParams } from "@shared/adapters/contracts/schedule-params";
import AppError from "@shared/errors/app-error";
import { httpStatusCodes } from "@shared/utils/http-status-codes";
import schedule from 'node-schedule'

export default class NodeScheduleAdapter implements ScheduleAdapter {
  scheduleEvent({day = '*', hour = '*', minute = '*', month = '*', seconds = '*'}: ScheduleParams, service: any): void {
    if((day) && day > 31 && day < 0){
      throw new AppError('Dias devem ser maior que 0 e menor ou igual a 31', httpStatusCodes.INTERNAL_SERVER, 'INTERNAL SERVER')
    }
    if((hour) && hour > 23 && hour <= 0){
      throw new AppError('Horas devem ser maior ou igual 0 e menor ou igual a 23', httpStatusCodes.INTERNAL_SERVER, 'INTERNAL SERVER')
    }

    if((minute) && minute > 59 && minute <= 0){
      throw new AppError('Minutos devem ser maior ou igual 0 e menor ou igual a 59', httpStatusCodes.INTERNAL_SERVER, 'INTERNAL SERVER')
    }

    if((month) && month > 12 && month < 1){
      throw new AppError('Meses devem ser maior ou igual 1 e menor ou igual a 12', httpStatusCodes.INTERNAL_SERVER, 'INTERNAL SERVER')
    }

    if((seconds) && seconds > 59 && seconds <= 0){
      throw new AppError('Segundos devem ser maior ou igual 0 e menor ou igual a 59', httpStatusCodes.INTERNAL_SERVER, 'INTERNAL SERVER')
    }
    schedule.scheduleJob(`${seconds}/${minute} ${hour} ${day} ${month} `, async () => {
      console.log(`Job programado para o mes: ${month}, dia: ${day}, a cada ${hour} horas, ${minute} minutos e ${seconds} segundos`)
      await service.execute()
    })
  }
}