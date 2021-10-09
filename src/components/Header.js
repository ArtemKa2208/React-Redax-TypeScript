export default (props) => (
      <div className='header'>
            <h1 className='logo-text'>Your movie</h1>
            <div className='toolbar'>
                  <a link=''>About the author</a>
                  <input placeholder='Who seeks will always find...'/>
                  <button>Search</button>
                  <select onChange = {props.sortBy}>
                        <option disabled selected>Sort by</option>
                        <option>Default</option>
                        <option>Name</option>
                        <option>Abv(increasing)</option>
                        <option>Abv(decay)</option>
                  </select>
                  <a link=''>About the team</a>
            </div>
      </div>
)