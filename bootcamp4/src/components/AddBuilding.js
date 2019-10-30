import React, {useState} from 'react';

function AddBuilding(props) {

  const [code, setCode] = useState('')
  const [name, setName] = useState('') 
  const [address, setAddress] = useState('')

  function cancel() {
    setCode('')
    setName('')
    setAddress('')
    props.toggleAdd()
  }

  function create() {
    const newBuilding = {
      code: code.toUpperCase(),
      name: name,
      address: address
    }

    props.create(newBuilding)

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
        <input
          type="text"
          placeholder="Name" 
          onChange={e => setName(e.target.value)}
				/>
        <input
          type="text"
          placeholder="Address" 
          onChange={e => setAddress(e.target.value)}
				/>
      </form>
      <button style={{marginRight: '20px'}} onClick={e => create()}>
        Submit
      </button>
      <button onClick={e => cancel()}>
        Cancel
      </button>
    </div>
    : null
}

export default AddBuilding;