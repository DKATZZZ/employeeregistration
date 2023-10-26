import React, {useState} from 'react';
import {addEmployee} from '../services/apiservice';


function EmployeeForm() {

    const [formdata, setformdata] = useState({
        name:'',
        Email:'',
        Designation:'',
        EmployeeId:'',
        BloodGroup:'',
        Salary:'',
        Project:'',
        phone:''
    });

    const [submitStatus, setSubmitStatus] = useState({
      success: false,
      error: false,
      message: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addEmployee(formdata);
        setSubmitStatus({
          success: true,
          error: false,
          message: 'Employee added successfully!'
        });
        // Optionally, reset the form after successful submission
        setformdata({
          name: '',
          email: '',
          position: ''
        });
      } catch (error) {
        setSubmitStatus({
          success: false,
          error: true,
          message: 'Failed to add employee.'
        });
      }
    };
  
    return (
      <div>
      <form onSubmit={handleSubmit}>
      <input
        value={formdata.name}
        onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
        placeholder="Name"
      />
      <input
        value={formdata.email}
        onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        placeholder="Email"
      />
      <input
        value={formdata.position}
        onChange={(e) => setformdata({ ...formdata, position: e.target.value })}
        placeholder="Position"
      />
      <input
        value={formdata.EmployeeId}
        onChange={(e) => setformdata({ ...formdata, EmployeeId: e.target.value })}
        placeholder="employeeid"
      />
      <input 
        value={formdata.BloodGroup}
        onChange={(e) => setformdata({...formdata, BloodGroup:e.target.value})}
        placeholder='bloodgroup'
      />
       <input 
        value={formdata.Salary}
        onChange={(e) => setformdata({...formdata, Salary:e.target.value})}
        placeholder='salary'
      />
       <input 
        value={formdata.Project}
        onChange={(e) => setformdata({...formdata, Project:e.target.value})}
        placeholder='project'
      />
      <input 
        value={formdata.phone}
        onChange={(e) => setformdata({...formdata, phone:e.target.value})}
        placeholder='phone'
      />


      <button type="submit">Add Employee</button>

      </form>
      {submitStatus.success && <p style={{ color: 'green' }}>{submitStatus.message}</p>}
      {submitStatus.error && <p style={{ color: 'red' }}>{submitStatus.message}</p>}
      </div>
    );
}
export default EmployeeForm;