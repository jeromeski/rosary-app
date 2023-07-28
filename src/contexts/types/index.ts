import { initialState } from "contexts/player/player.reducer";

// Define the playlist item type
// export type PlaylistItem = {
// 	id: string;
// 	title: string;
// 	audioUrl: string;
// }

// Define the playlist state type
// export type PlayerState = {
// 	currentTrackIdx: number;
// 	isPlaying: boolean;
// 	joyfulPlaylist: PlaylistItem[];
// }

// Define the action types
export type PlayerActions =
	| { type: "SKIP_NEXT" }
	| { type: "SKIP_PREV" }
	| { type: "START" }
	| { type: "STOP" }
	| { type: "RESET" };

export type PlayerState = typeof initialState;

export type PlayerCtx = {
	start: () => void;
	next: () => void;
	back: () => void;
	reset: () => void;
	stop: () => void;
};

