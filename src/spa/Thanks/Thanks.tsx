import React, {Component} from 'react';
import imgSmile from '../../assets/images/clap.gif'
import './style.css'

class Thanks extends Component {
    render () {
		return (
			<div className="container">
				<img src={imgSmile} alt="clap" />
				<p><b>Muito obrigado por sua colaboração!</b></p>
			</div>
		)
	}
}

export default Thanks