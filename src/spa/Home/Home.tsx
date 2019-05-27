import React, { Component } from 'react'
import { NpsSelector } from '../../components'
import {Redirect} from 'react-router-dom'
import './style.css'

type State = {
	evaluation: number
}

class Home extends Component<State> {

	state = {
		evaluation: -1
	}

    render () {
		const {
			evaluation
		} = this.state
		/**
		 * Render the SPA according the value of
		 * score selected by user
		 */
		if (evaluation > -1 && evaluation <= 7) {
			return (
				<Redirect to="/justify" />
			)
		} else if (evaluation > 7) {
			return (
				<Redirect to="/Thanks" />
			)
		}
		
		return (
			<div className="container">
				<p className="question">
					Com base na sua experiência, qual a probabilidade 
					de você nos recomendar a um amigo ou alguém da sua
					família?
				</p>
				<NpsSelector onClickFunc={(value: number) => this.setState({ evaluation: value })}/>
			</div>
		)
	}
}

export default Home;