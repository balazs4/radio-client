import React from 'react';
import Head from 'next/head';

import { get, patch } from 'axios';

const server = `${process.env.SERVER || 'http://localhost:4747'}/api/radio/`
const names = ['Star FM From Hell', 'Star FM Nürnberg', 'DnB Heaven'];

export default class extends React.Component {
	static async getInitialProps() {
		const res = await get(server);
		const data = res.data;
		return {
			channels: data.map((url, index) => (
				{ id: index, name: names[index] })
			)
		}
	}

	listenTo(id) {
		patch(`${server}${id}`)
			.then(x => console.log(x))
			.catch(x => console.log(x))
	}

	stop() {
		patch(`${server}`)
			.then(x => console.log(x))
			.catch(x => console.log(x))
	}

	render() {
		const {channels} = this.props;
		return (
			<div>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>radio-client</title>
				</Head>
				<div>
					<div>
						<button onClick={e => this.stop()}>Stop</button>
					</div>
					{channels.map(ch => <Radio key={ch.id} name={ch.name} listen={e => this.listenTo(ch.id)} />)}
				</div>
			</div>
		);
	}
}

const Radio = ({name, listen}) => (
	<div>
		<p>{name}</p>
		<button onClick={listen}>Listen</button>
	</div>
)