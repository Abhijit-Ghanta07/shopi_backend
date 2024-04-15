import express from "express";
import { globalErrHandler } from "./utils/globalError.js";
import { CustomErr } from "./lib/customErr.js";
import productRouter from "./routes/productRoute.js";
const app = express();

// middleware
app.use(express.json());
// routes goes heres
app.use("/api/product", productRouter);
app.use("/*", (req, res, next) => {
  let err = new CustomErr("this is not a valid endpoint", 404);
  next(err);
});
app.use(globalErrHandler);

export default app;
