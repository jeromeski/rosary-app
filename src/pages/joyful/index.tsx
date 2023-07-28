import React, { useContext, useRef, useEffect, useCallback, useState } from "react";

import { NextPage } from "next";
import { useLogger, useRendersCount } from "react-use";

import { usePlayerState, usePlayerDispatch } from "contexts/player/player.context";
import Playlist from "components/playlist";
import Controls from "components/controls";

const noop = () => null;

const JoyfulPage: NextPage = (props) => {
	useLogger("JoyfulPage", props);
	const count = useRendersCount()
	console.log(count)
	const { currentTrackIdx, isPlaying, joyfulPlaylist } = usePlayerState();
	const {  next, start, stop } = usePlayerDispatch();
	// const [isPaused, setIsPaused] = useState(true)

	let audioRef = useRef<HTMLAudioElement>(null);

	

	// effect 1
	useEffect(() => {
		audioRef.current = new Audio(joyfulPlaylist[currentTrackIdx].audioUrl);
		if (isPlaying) {
			// handling from pause

			// handles from the beginning
			if (audioRef.current) {
				audioRef.current.play();
				audioRef.current.onended = () => {
					if (currentTrackIdx === joyfulPlaylist.length - 1) {
						audioRef.current?.pause();
						audioRef.current.currentTime = 0;
						audioRef.current.src = "";
						stop();
					} else {
						audioRef.current?.pause();
						audioRef.current.currentTime = 0;
						audioRef.current.src = "";
						next();
					}
				};
			}
			if (!isPlaying) {
				audioRef.current.pause();
			}
		}
		if(audioRef.current.paused){
			noop()
		}

		return () => {
			audioRef.current?.removeEventListener("onended", () => {
				if (currentTrackIdx === joyfulPlaylist.length - 1) {
					audioRef.current?.pause();
					audioRef.current.currentTime = 0;
					audioRef.current.src = "";
				} else {
					audioRef.current?.pause();
					audioRef.current.currentTime = 0;
					audioRef.current.src = "";
					next();
				}
			});
		};
	}, [
		isPlaying,
		start,
		currentTrackIdx,
		joyfulPlaylist.length,
		next,
		joyfulPlaylist,
		audioRef.current,
		stop
	]);

	return (
		<div>
			<h1>JOYFUL PAGE</h1>
			<Controls ref={audioRef}/>
			<Playlist  />
		</div>
	);
};

export default JoyfulPage;
