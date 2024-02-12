export const Todo = ({
  id,
  name,
  editedId,
  editedValue,
  setEditedValue,
  changeName,
  checked,
  checkHandler,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div className="block">
      {id === editedId ? (
        <div>
          <input
            className="editedInput"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button onClick={() => changeName(id)}>add</button>
        </div>
      ) : (
        <div className="blockName">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => checkHandler(id)}
          />
          <div className={checked ? "lineName" : ""}>{name}</div>
        </div>
      )}
      <div className="icons">
        <div onClick={() => editHandler(id, name)}>&#x0270E;</div>
        <div onClick={() => deleteHandler(id)}>X</div>
      </div>
    </div>
  )
}
