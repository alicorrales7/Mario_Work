import { CommissionStatemDTO } from "../../DTO/commissionStatemClientDTO";

export interface CommissionStatemInterface {
  readFile(): string[][] | string;
  parse(file:object):object|string;
}
