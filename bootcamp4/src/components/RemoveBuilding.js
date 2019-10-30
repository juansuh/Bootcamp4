import React, {useState} from 'react';

function RemoveBuilding(props) {

  const [code, setCode] = useState('')

  function cancel() {
    setCode('')
    props.toggleRemove()
  }

  function remove() {
    props.remove(code)
    cancel()
  }

  return props.show ? 
    <div>
      <form>
        <input
          type="text"
          placeholder="Code" 
          onChange={e => setCode(e.target.value)}
				/>
      </form>
      <button style={{margin: '20px'}} onClick={e => remove()}>
        Delete
      </button>
      <button onClick={e => cancel()}>
        Cancel
      </button>
    </div>
    : null
}

export default RemoveBuilding;