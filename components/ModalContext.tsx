"use client";
import { createContext, useContext } from "react";

export const ModalContext = createContext<(open: boolean) => void>(() => {});
export const useModal = () => useContext(ModalContext);
