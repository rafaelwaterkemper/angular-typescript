import { Imprimivel } from "./Imprimivel";
import { Equals } from "./Equals";

export interface Entity<T> extends Imprimivel, Equals<T> {

}