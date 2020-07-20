import React from 'react'
import ModalContent from './ModalContent'
import './Modal.css'


class Modal extends React.Component {
	static Content = ModalContent;

	render() {
		return (
			<div 
				className="modal__container" 
				style={{ 
					display: this.props.visible ? 'block' : 'none',
				}}
			>
				<div className="modal">
					<span className="close__btn" onClick={() => this.props.close()}>
						&times;		
					</span>
					<div className="content__container">
						{ this.props.children }
					</div>	
				</div>
			</div>
		)
	}
}

export default Modal