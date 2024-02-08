
import express from "express";
import morgan from "morgan";
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/usersRouter';



const PORT = 4000;

const app = express();
const logger= morgan("dev");

app.use(logger);

app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.use("/", globalRouter);




const handleListen = () => {
  console.log(`👽👻 Server is listening on PORT: ${PORT}`)
};
app.listen(PORT, handleListen);