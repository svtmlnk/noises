import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Создание кастомных хуков
// http://react-redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();