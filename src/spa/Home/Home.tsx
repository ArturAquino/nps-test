import React, { Component } from 'react'
import { NpsSelector } from '../../components'
import './style.css'

class Home extends Component {
	
	state = {
		evaluation: -1
	}

    render () {
		return (
			<div className="container">
				<p className="question">
					Com base na sua experiência, qual a probabilidade 
					de você nos recomendar a um amigo ou alguém da sua
					família?
				</p>
				<NpsSelector onClickFunc={(value: number) => this.setState({evaluation: value})}/>
			</div>
		)
	}
}

export default Home;