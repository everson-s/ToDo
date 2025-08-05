
const Filter = () => {
  return (<div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">incompletas</option>
          </select>
        </div>
      </div>
      <div>
        <p>Ordem alfabética:</p>
        <button>Asc</button>
        <button>Desc</button>
      </div>


  </div>
  )
}

export default Filter