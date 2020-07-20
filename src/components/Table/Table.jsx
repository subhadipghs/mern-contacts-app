import React from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import ActionButton from '../ActionButton/ActionButton'
import './Table.css'

const Table = (props) => {
	return (
		<table className="contacts__table">
			<thead className="table__head">
				<tr>
					{ props.headers && props.headers.map((header, index) => <th className="table__header" key={index}>{header}</th>) }
				</tr>
			</thead>
			<tbody className="table__body">
				{
					props.dataset && props.dataset.map((contact, index) => {
						return (
							<tr className="table__row" key={contact._id}>
								<td className="table__data">{contact.name}</td>
								<td className="table__data">{contact.phone}</td>
								<td className="table__data">
									<ActionButton clickHandler={() => console.dir('clicked edit')}>
										<MdModeEdit style={{fontSize: '1.2rem' }}/>
									</ActionButton>
									<ActionButton clickHandler={() => console.dir('delete clicked')}>
										<MdDeleteForever style={{fontSize: '1.2rem'}} />
									</ActionButton>
								</td>
							</tr>
					)})
				}
			</tbody>
		</table>

	);
}

export default Table