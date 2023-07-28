import React, {
	createContext,
	useReducer,
	useContext,
	useCallback,
	useMemo,
	useEffect,
	useRef
} from "react";

import { playerReducer, initialState } from "./player.reducer";
import { PlayerState, PlayerCtx } from "../types";
import { useLogger } from "react-use";

type PlayerProviderProps = {
	children: React.ReactNode;
};

const playerStateCtx = createContext<PlayerState | null>(null);
const playerDispatchCtx = createContext<PlayerCtx | null>(null);

const PlayerCtxProvider = (props) => {
	// useLogger("PlayerProvider", props);

	const [state, dispatch] = useReducer(playerReducer, initialState);
	
	const start = useCallback(() => dispatch({ type: "START" }), [dispatch]);

	const next = useCallback(() => dispatch({ type: "SKIP_NEXT" }), [dispatch]);

	const back = useCallback(() => dispatch({ type: "SKIP_PREV" }), [dispatch]);

	const reset = useCallback(() => dispatch({ type: "RESET" }), [dispatch]);

	
const stop = useCallback(() => dispatch({ type: "STOP" }), [dispatch]);



	const ctxValues = useMemo(() => ({ start, next, back, reset, stop}), [start, next, back, reset, stop]);

	return (
		<playerDispatchCtx.Provider value={ctxValues}>
			<playerStateCtx.Provider value={state}>
				{props.children}
			</playerStateCtx.Provider>
		</playerDispatchCtx.Provider>
	);
};

export function usePlayerDispatch() {
	const ctx = useContext(playerDispatchCtx)
	if(!ctx){
		throw new Error("playerDispatch must be used in a Provider");
	}
	return ctx;
}

export function usePlayerState() {
	const ctx = useContext(playerStateCtx);
	if (!ctx) {
		throw new Error("playerDispatch must be used in a Provider");
	}
	return ctx;
}

export default PlayerCtxProvider;
