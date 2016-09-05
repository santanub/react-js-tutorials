import React from "react";

class Trow extends React.Component {
   render() {
     console.log(this.props.userData)
     return (
       <tr>
         <td>{this.props.userData.id}</td>
         <td>{this.props.userData.email}</td>
         <td>{this.props.userData.created_time}</td>
         <td>{this.props.userData.last_sign_time}</td>
       </tr>

     )
   }
}

export default Trow;
