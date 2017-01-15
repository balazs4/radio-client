import React from 'react';
import Head from 'next/head';


const Channel = ({name = 'Radio', click}) => (
	<div>
		<p>{name}</p>
		<button onClick={e => click()}>Listen</button>
	</div>
)

const ChannelList = ({channels}) => (
	<div id="radio-list">
		<ul> { channels.map(ch => <li><Channel /></li>) } </ul>
	</div>
)


export default () => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>radio-client</title>
		</Head>
		<ChannelList channels={['1', '2','3', '4']}/>
	</div>
)
