// src/app/hooks.ts
import type { TypedUseSelectorHook} from "react-redux";
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store.ts";



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
