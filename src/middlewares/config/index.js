import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:3000":"https://laruinatv-api.fly.dev"
