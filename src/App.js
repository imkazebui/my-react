import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// import PrivateRoute from "./modules/common/PrivateRoute";

export default class App extends Component {
  render() {
    return <div>can you hear me?</div>;
    // return (
    //   <div>
    //     <HashRouter>
    //       <Switch>
    //         <Route exact path="/login" name="Login Page" component={Login} />

    //         <PrivateRoute path="/" name="Home" component={MainApp} />
    //       </Switch>
    //     </HashRouter>
    //   </div>
    // );
  }
}

// class MainApp extends Component {
//   render() {
//     return (
//       <div className="app">
//         <div className="app-body">
//           <main className="main">
//             <Container fluid>
//               <Switch>
//                 <Redirect from="/" to="/login" />
//               </Switch>
//             </Container>
//           </main>
//           <Aside />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }
