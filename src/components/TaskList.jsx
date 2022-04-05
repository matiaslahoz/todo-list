import React, {useState} from "react";
import Item from "./Item";

const TaskList = props => {
	const { list, setList } = props;

	const [priorityFilter, setPriority] = useState("todas");
	const [stateFilter, setState] = useState("todas");


	const onChangePriority = e => {
		const { name, value:priority } = e.target;

		const updateList = list.map(item => ({
			...item,
			priority: `p${item.id}` === name ? priority : item.priority
		}));
		setList(updateList);
	};

	const onChangeState = e => {
		const { name, value:state } = e.target;

		const updateList = list.map(item => ({
			...item,
			state: `s${item.id}` === name ? state : item.state
		}));
		setList(updateList);
	};

	const onChangeStatus = e => {
		const { name, checked } = e.target;

		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	const onClickRemoveItem = e => {
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	};

	return (
		<div className="todo-list">
			<label className="titulo">
			Filtrar por: 
			</label>
			<div className="filtros">
				<div className="prioridad">
			<label>
			Prioridad: 
			</label>
				<select className="todo__state" value={priorityFilter} onChange={e => setPriority(e.target.value)}>
				<option value="todas">Todas</option>
					<option value="alta">Alta</option>
					<option value="media">Media</option>
					<option value="baja">Baja</option>
				</select>
				</div>
				<div className="prioridad">
				<label>
				Estado: 
				</label>
				<select className="todo__state" value={stateFilter} onChange={e => setState(e.target.value)}>
				<option value="todas">Todas</option>
					<option value="nueva">Nueva</option>
					<option value="proceso">En proceso</option>
					<option value="finalizada">Finalizada</option>
				</select>
				</div>
				</div>
		

			{list.length ? list.map(item => { 				
				if ((priorityFilter === "todas" || item.priority === priorityFilter) && (stateFilter === "todas" || item.state === stateFilter)) 
					return <Item key={item.id} data={item} onChange={onChangeStatus} onChangeState={onChangeState} onChangePriority={onChangePriority} />
				return "No hay tareas que coincidan con el filtro"
				
			}) : "No hay tareas"}
			{list.length ? (
				<p>
					<button className="button blue" onClick={onClickRemoveItem}>
						Borrar lo seleccionado
					</button>
				</p>
			) : null}
		</div>
	);
};

export default TaskList;
