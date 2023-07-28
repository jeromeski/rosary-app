import { usePlayerState } from "contexts/player/player.context"
import { ReactComponentElement } from "react";

const Playlist: React.FC = () => {
  const {currentTrackIdx, joyfulPlaylist, isPlaying} = usePlayerState()

return (<>
	 <ul>
			{joyfulPlaylist.map((item) => {
				return (
					<li key={item.id}>
						{item.id - 1 === currentTrackIdx && isPlaying ? "Playing --> " : ""}  {item.title}`
					</li>
				);
			})}
		</ul>
		{!isPlaying && <p>Click start to begin.</p>}
</>)
}

export default Playlist;