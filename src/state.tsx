import { atom } from "jotai";
import { UserAccounts } from "./config";

export const currentUserIdAtom = atom(UserAccounts[0].id);
