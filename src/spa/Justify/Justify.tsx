import React, {Component} from 'react';
import { 
	Form,
	Button,
	TextArea
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { equals } from 'ramda';
import './style.css';

type State = {
	buttonAction: string,
	textInformed: boolean
};

const backAction = 'back';
const goAheadAction = 'goAhead';

class Justify extends Component<State> {

	state = {
		buttonAction: '',
		textInformed: false
	}
	
	ButtonComponents () {
		return (
			<div className="buttons">
				<Button
					className="buttonsecondary" 
					content="Voltar" 
					secondary 
					onClick={() => this.setState({buttonAction: backAction})}/>
				<Button 
					className="buttonprimary"
					content="Avançar"
					primary 
					type="submit" />
			</div >
		)
	}

	onSubmit (event:any) {
		event.preventDefault()
		this.setState({
			textInformed: true,
			buttonAction: goAheadAction
		})
	}

	render () {
		const {
			textInformed,
			buttonAction
		} = this.state

		if (equals(buttonAction, backAction)) {
			return (
				<Redirect to="/" />
			)
		} else if(textInformed && equals(buttonAction, goAheadAction)) {
			return (
				<Redirect to="/Thanks" />
			)
		}

		return (
			<Form className="container" onSubmit={this.onSubmit.bind(this)}>
				<p className="question">
					Por favor, comente os motivos da sua avaliação.
					Assim, você nos ajuda a continuar melhorando.
				</p>

				<TextArea 
					required
					autoFocus
					className="textarea"
					placeholder="Conta mais pra gente... XD" />

				{this.ButtonComponents()}
			</Form>
		)
	}
}

export default Justify