/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";

const Item = props => {
	const {
		onChange,
		onChangeState,
		onChangePriority,
		data: { id, title,
			description, priority,
		state }
	} = props;

	const onTriggerPriority = (e) => {
    	props.onChangePriority(e);
        e.preventDefault();
    }

	const onTriggerState = (e) => {
        props.onChangeState(e);
        e.preventDefault();
    }

	
	return (
		<Fragment>
			<label className="todo">
				<input
					className="checkbox"
					name={id}
					type="checkbox"
					onChange={onChange}
				/>
				
			<div className="prioridad">
				<label>
				Prioridad: 
				</label>
				<select name={`p${id}`} className="todo__state select" value={priority} onChange={e => onTriggerPriority(e)}>
					<option value="alta">Alta</option>
					<option value="media">Media</option>
					<option value="baja">Baja</option>
				</select>
				</div>
				<div className="prioridad">
				<label>
				Estado: 
				</label>
				<select name={`s${id}`} className="todo__state select" value={state} onChange={e => onTriggerState(e)}>
					<option value="nueva">Nueva</option>
					<option value="proceso">En proceso</option>
					<option value="finalizada">Finalizada</option>
				</select>
				</div>
				<div className="todo__text">Titulo: <div className="todo__title">{title}</div></div>
				<div className="todo__desc">Descripcion: <br></br></div> <div className="todo__left">{description}</div>
			</label>
			
		</Fragment>
	);
};

export default Item;
