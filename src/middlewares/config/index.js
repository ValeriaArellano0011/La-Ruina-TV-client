import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080":"https://laruinatv-api.fly.dev";

export const URL_LARUINAHUB_REGISTER = "https://hub.laruinarecords.cl/#/register";