
import express  from "express";
import { authRoutes } from "./routes/auth.routes"


const app = express();
const port = 5000;


authRoutes(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
