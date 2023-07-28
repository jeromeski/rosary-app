import type { AppProps } from "next/app";
import PlayerCtxProvider  from '../contexts/player/player.context';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlayerCtxProvider>
			<Component {...pageProps} />
		</PlayerCtxProvider>
	);
}
