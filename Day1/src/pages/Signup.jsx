// import { Button, ButtonToolbar, Form } from "rsuite"
// import "../assets/css/Signup.css";
// const Signup=()=>{
//     return(
//         <div className="signup">
//         <div>
//             <p>Signup</p>
//             <br></br>
//         </div>
//     <Form layout="vertical" >
//       <div className="maindiv">
//     <Form.Group controlId="username" >
//       <Form.ControlLabel>Username</Form.ControlLabel>
//       <Form.Control name="username" />
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
//     <Form.Group controlId="Confirm Password">
//       <Form.ControlLabel> Confirm Password</Form.ControlLabel>
//       <Form.Control name="Confirm password" type="Confirm password" autoComplete="off" />
//     </Form.Group>
//     <Form.Group controlId="Number">
//       <Form.ControlLabel> Mobile Number</Form.ControlLabel>
//       <Form.Control name="Number" type="Number" autoComplete="off" />
//     </Form.Group>
    
    
//     <Form.Group>
//       <ButtonToolbar>
//         <Button appearance="primary">Submit</Button>
//         <Button appearance="default">Cancel</Button>
//       </ButtonToolbar>
//     </Form.Group>
//     </div>
//   </Form>
//   </div>
//     )}
//     export default Signup
import '../assets/css/Signup.css'
import { Link } from "react-router-dom";
const Signup=()=>{
  return(
<form className="login">
  <h2>Welcome, User!</h2>
  <p>Please Sign up</p>
  <input type="text" placeholder="User Name" />
  <input type="text" placeholder="Email" />
  <input type="text" placeholder="Password" />
  <input type="text" placeholder="Confirm Password" />
  <input type="text" placeholder="Mobile Number" />
  <input type="submit" defaultValue="Sign up" />
  
  <div className="links">
    <a href="#"><Link to='/login'>Login</Link></a>
    
  </div>
</form>
  )
}
export default Signup;