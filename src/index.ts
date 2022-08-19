import app from '@shared/app';

app.listen(process.env.PORT || process.env.APP_SERVER_PORT, async () => {
  console.log(
    `Server is running on Port ${
      process.env.PORT || process.env.APP_SERVER_PORT
    }`,
  );
});
