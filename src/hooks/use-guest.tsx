import { useContext } from "react";
import { GuestContext } from "../App";

export const useGuest = ()=> useContext(GuestContext)