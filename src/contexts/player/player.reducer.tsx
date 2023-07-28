import { produce, Draft } from "immer";
import initState from "../../data";
import {  PlayerState, PlayerActions } from "../types";

const initialState = initState;



const playerReducer = (state: PlayerState, action: PlayerActions) =>
	produce(state, draft => {
		switch(action.type) {
    case 'START':
      draft.isPlaying = true;
      draft.currentTrackIdx = 0; 
      break;
    case 'STOP':
      draft.isPlaying = false;
      break;
    case 'SKIP_PREV':
      draft.currentTrackIdx = Math.max(0, draft.currentTrackIdx - 1);
      draft.isPlaying = true;
      break;
    case 'SKIP_NEXT':
      draft.currentTrackIdx = Math.min(draft.joyfulPlaylist.length - 1, draft.currentTrackIdx + 1);
      draft.isPlaying = true;
      break;
    case 'RESET':
      draft.currentTrackIdx = 0;
      draft.isPlaying = false;
      break;
		default:
			throw new Error(`Unsupported action type at App Reducer`);
	}
});

export { playerReducer, initialState };
