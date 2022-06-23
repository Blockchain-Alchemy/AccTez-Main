import { useContext } from "react";
import { TezosContext } from "../components/TezosContext/Context";
import type { TezosContextValue } from "../components/TezosContext/Context";

/**
 * A hook to access the value of the `TezosContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `TezosContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
export function useTezosContext(): TezosContextValue | null {
  const contextValue = useContext(TezosContext);

  if (process.env.NODE_ENV !== "production" && !contextValue) {
    throw new Error(
      "could not find react-redux context value; please ensure the component is wrapped in a <TezosProvider>"
    );
  }

  return contextValue;
}
