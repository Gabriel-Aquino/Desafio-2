import { connect } from '@database/mongoose';
import NodeScheduleAdapter from '@infra/adapters/node-schedule-adapter';
import app from '@shared/app';
import scheduleAnimesJob from '@shared/schedule-animes-job';

app.listen(process.env.PORT || process.env.APP_SERVER_PORT, async () => {
  await connect();
  const nodeScheduleAdapter = new NodeScheduleAdapter();
  scheduleAnimesJob(nodeScheduleAdapter);
  console.log(
    `Server is running on Port ${
      process.env.PORT || process.env.APP_SERVER_PORT
    }`,
  );
});
// remover express
