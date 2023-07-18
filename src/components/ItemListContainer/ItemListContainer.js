function ItemListContainer ({greet}){
    return (
      <div>
        <nav className="level">
          <div className="level-left"></div>
          <div className="level-right">
            <div className="level-item">
              <p className="subtitle is-5">
                Search <strong>products</strong>
              </p>
            </div>
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input className="input" type="text" placeholder="..."></input>
                </p>
                <p className="control">
                  <button className="button">
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <h1 className="is-size-3 has-text-centered">
          <strong>{greet}</strong>
        </h1>
      </div>
      
    )  
}

  export default ItemListContainer; 