import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as demo from "./routes/demo";
import * as root from "./routes/root";
import {Express, Request, Response, NextFunction} from "express";

export const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(allowCors);
app.use("/", root.router);
app.use("/api/v1/demo", demo.router);

/**
 * A simple middleware to support Cross-Origin Resource Sharing CORS
 **/
function allowCors(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
    if (req.method == 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
}
