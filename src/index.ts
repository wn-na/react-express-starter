import application from './applications/application';

const port: number = Number(process.env.PORT) || 3001;

application
    .listen(port, () => console.log(`[Start] Express is start at port ${port}!!!`))
    .on('error', (err: unknown) => console.error(`[Error] ${err}`));
