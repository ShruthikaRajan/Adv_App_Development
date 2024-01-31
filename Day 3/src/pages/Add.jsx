// import { Form, ButtonToolbar, Button, } from 'rsuite';



// const Add = () => (
//   <Form>
//     <Form.Group controlId="name">
//       <Form.ControlLabel>Username</Form.ControlLabel>
//       <Form.Control name="name" />
//       <Form.HelpText>Username is required</Form.HelpText>
//     </Form.Group>
//     <Form.Group controlId="email">
//       <Form.ControlLabel>Email</Form.ControlLabel>
//       <Form.Control name="email" type="email" />
//       <Form.HelpText tooltip>Email is required</Form.HelpText>
//     </Form.Group>
//     <Form.Group controlId="password">
//       <Form.ControlLabel>Password</Form.ControlLabel>
//       <Form.Control name="password" type="password" autoComplete="off" />
//     </Form.Group>
    
//     <Form.Group>
//       <ButtonToolbar>
//         <Button appearance="primary">Submit</Button>
//         <Button appearance="default">Cancel</Button>
//       </ButtonToolbar>
//     </Form.Group>
//   </Form>
// );
// export default Add;
import '../assets/css/Add.css'
// import { Link } from "react-router-dom";
const Add=()=>{
  return(
<form className="Add">
  
  <input type="text" placeholder="Course Name:" />
  <input type="text" placeholder="Description:" />
  <input type="text" defaultValue="Duration:" />
  <input type="text" defaultValue="Fees Amount:" />
  <div className="links">
    <a href="#">Add Course</a>
    
  </div>
</form>
  )
}
export default Add ;