import React from "react";

const List = (props) => {
	const submitHandler = (e) => {
		e.preventDefault();
		if (props.item !== "") {
			props.setList([
				...props.list,
				{
					item: props.item,
					id: Math.random() * 1000,
				},
			]);
			console.log(props.list);
			props.setItem("");
		}
	};
	const inputHandler = (e) => {
		props.setItem(e.target.value);
	};
	const removeHandler = (i) => {
		console.log(i);
		props.setList(props.list.filter((el) => el.id !== i.id));
	};
	return (
		<div className="list-div" style={props.darkMode}>
			<form onSubmit={submitHandler}>
				<input
					type="textbox"
					onChange={inputHandler}
					value={props.item}
					placeholder="What to do?"
					className="text-input"
				></input>
				<button type="submit" className="submit-btn">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="plus"
						className="svg-inline--fa fa-plus fa-w-14"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
					</svg>
				</button>
			</form>
			<div className="list-div">
				{props.list.map((x) => (
					<ul>
						<li key={x.item}>
							<div className="item-list">{x.item}</div>
							<button className="remove-btn" onClick={() => removeHandler(x)}>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="trash"
									className="svg-inline--fa fa-trash fa-w-14"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
									></path>
								</svg>
							</button>
						</li>
					</ul>
				))}
			</div>
		</div>
	);
};

export default List;
