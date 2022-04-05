import React, { useState } from "react";

const FormTodo = props => {
	const { handleAddItem } = props; 
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState("baja");
	const [state, setState] = useState("nuevo");
	const handleSubmit = e => {
		e.preventDefault(); 

		handleAddItem({
			id: (+new Date()).toString(),
			title,
			description,
			priority,
			state
		});
		setDescription(""); 
		setState("baja"); 
		setTitle(""); 
		setPriority("nuevo"); 
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="todo-list">
				<div className="file-input">
					<input
						type="text"
						className="text"
						placeholder="Titulo"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>

				<select className="select" value={priority} onChange={e => setPriority(e.target.value)}>
					<option value="alta">Alta</option>
					<option value="media">Media</option>
					<option value="baja">Baja</option>
				</select>

				<select className="select" value={state} onChange={e => setState(e.target.value)}>
					<option value="nueva">Nueva</option>
					<option value="proceso">En proceso</option>
					<option value="finalizada">Finalizada</option>
				</select>
			
					</div>
					<div className="file-input">
					<textarea 
						type="text"
						className="text-desc"
						placeholder="Descripcion"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					</div>
					<div className="btn-crear">
					<button
						className="button pink"
						disabled={description && title ? "" : "disabled"}
					>
						Crear Tarea
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormTodo;
