import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

function App(props) {

  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0)
  const [showAdd, setShowAdd] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [buildings, setBuildings] = useState(props.data)

  function filterUpdate(value) {
    setFilterText(value);
  }

  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }

  function toggleAdd() {
    setShowAdd(!showAdd)
  }

  function toggleRemove() {
    setShowRemove(!showRemove)
  }

  function create(newBuilding) {
    setBuildings(buildings.concat(newBuilding))
  }

  function remove(code) {
    setBuildings(buildings.filter(
      building => {
        return building.code !== code.toUpperCase()
      }
    ))
  }

  console.log(buildings)

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>

      <Search
        filterText={filterText}
        filterUpdate={filterUpdate.bind(this)}
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
                <BuildingList
                  data={buildings}
                  filterText={filterText}
                  selectedUpdate={selectedUpdate.bind(this)}
                />
              </table>
            </div>
            <div className="row">
              <button
                onClick={e => toggleAdd()}
                style={{marginRight: '20px'}}
              >
                Add
              </button>
              <button
                onClick={e => toggleRemove()}
              >
                Remove
              </button>
            </div>
            <AddBuilding
              show={showAdd}
              toggleAdd={toggleAdd.bind(this)}
              create={create.bind(this)}
            />
            <RemoveBuilding
              show={showRemove}
              toggleRemove={toggleRemove.bind(this)}
              remove={remove.bind(this)}
            />
          </div>
          <div className="column2">
            <ViewBuilding
              data={buildings}
              selectedBuilding={selectedBuilding}
            />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
