// import '../assets/css/Dashboard.css'
// const Dashboard = ()=>{
//     return(
//         <>
//   <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
//   />
//   <link rel="stylesheet" href="./sidebar.css" />
//   <title>SideBAr</title>
//   <div className="navigation">
//     <ul>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-house" />
//           </span>
//           <span className="title">Home</span>
//         </a>
//       </li>
//       {/* <li>
//           <a href="#">
//               <span class="icon"></span>
//               <span class="icon">Home</span>
//           </a>
//       </li> */}
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-user" />
//           </span>
//           <span className="title">Profile</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-message" />
//           </span>
//           <span className="title">Messages</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-circle-info" />
//           </span>
//           <span className="title">Help</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-gear" />
//           </span>
//           <span className="title">Settings</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-lock" />
//           </span>
//           <span className="title">Password</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-right-from-bracket" />
//           </span>
//           <span className="title">SignOut</span>
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div className="toggle"  />
// </>

      
//     )
// }
// export default Dashboard;
import { Progress } from 'rsuite';
import { Link } from "react-router-dom";
import '../assets/css/Dashboard.css'

const style = {
  width: 140,
  display: 'inline-block',
  marginRight: 10,
  marginTop:100
};
const Dashboard = ()=>{
        return(
          <div>
            <div className='sidenav'>
            <a href="#"><Link to='/home'>Home</Link></a>
            <a href="#"><Link to='/about'>About</Link></a>
            <a href="#">Course</a>
            <a href="#">Contact</a>
          </div>
          <div className="Admin">
            <h1>Admin dashboard</h1>
            </div>
    <div style={style}>
      <Progress.Circle percent={30} strokeColor="#ffc107" />
    </div>
    <div style={style}>
      <Progress.Circle percent={60} strokeColor="#ffc107" />
    </div>
    <div style={style}>
      <Progress.Circle percent={100} status="success" />
    </div>
    <div style={style}>
      <Progress.Circle percent={80} strokeColor="#ffc107" />
    </div>
    {/* <div style={style}>
      <Progress.Circle percent={30} status="fail" />
    </div> */}
    
        </div>
          
          

        )
}
export default Dashboard;
