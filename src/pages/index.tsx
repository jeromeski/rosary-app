import Link from 'next/link';
import React from 'react'

const IndexPage: React.FC<{}> = () => {
	return <>
		<ul>
			<li>
				<Link href='./joyful'>Joyful</Link>
			</li>
		</ul>
	</>
}

export default IndexPage;
