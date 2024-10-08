import perfileimage from '../style/perfil.png'
export default function Employees(){

    return <>
<h1>Employees</h1>
    <div className="search-container">
    <div class="search-input-btn"> 
       <label>Name</label>
        <input
          type="text"
          placeholder="Search for an employee..."
          />
      <button class="search-btn"><i className="ri-search-line" style={{  fontSize: '30px' }}></i></button>
          </div>
          <div class="select-department">
          <label for="options">Department :</label>
          <select id="options" name="options">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
            </select>
        </div>
        <div class="select-status">
        <label for="options">Status:</label>
          <select id="options" name="options">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
            </select>
        </div>
      </div>
      <div className="table-responsive e">
        <table className="container-employe">
          <thead className="">
            <tr className="">
              <th className="">
                <img src={perfileimage} alt="Profile" />
              </th>
              <th>User</th>
              <th>Email</th>
              <th>Job Title</th>
              <th className="text-center">Phone</th>
              <th>Export</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
           
                <tr >
                  <td className="text-center">
                    <img src={perfileimage} alt="Profile" />
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    <button>Delete</button>
                  </td>
                </tr>
             
              {/* <tr>
                <td colSpan="7" className="text-center">No employees found</td>
              </tr> */}
            
          </tbody>
        </table>
      </div>
    </>
}