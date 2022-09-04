import { calandar } from "../utils/date-utils.js";
const inputDate = "1995-02";

calandar(...inputDate.split("-").map((string) => parseInt(string)));
