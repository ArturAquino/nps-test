import React, {Component} from 'react';
import {map} from 'ramda';
import './style.css';

export interface itemType {
	value: number,
	color: string
};

type Props = {
	onClickFunc: Function,
};

class NpsSelector extends Component<Props> {

	private npsArray = [
		{ value: 0, color: "#B72025" },
		{ value: 1, color: "#D62027" },
		{ value: 2, color: "#F05223" },
		{ value: 3, color: "#F36F21" },
		{ value: 4, color: "#FAA823" },
		{ value: 5, color: "#FFCA27" },
		{ value: 6, color: "#ECDB12" },
		{ value: 7, color: "#E8E73D" },
		{ value: 8, color: "#C5D92D" },
		{ value: 9, color: "#AFD136" },
		{ value: 10, color: "#64B64D" }
	];

	private renderSelector = (item: itemType) => {
		const { onClickFunc } = this.props

		return (
			<div key={item.value} className="nps-items"
				style={{ backgroundColor: `${item.color}` }}
				onClick={() => onClickFunc(item.value)}>
				{item.value}
			</div>
		)
	}	

    render () {
		return (
			<div className="nps-list">
				{map(this.renderSelector, this.npsArray)}
			</div>
		)
	}
}

export default NpsSelector