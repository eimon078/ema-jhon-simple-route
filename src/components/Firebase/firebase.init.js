import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirebaseAuth = () => {
    initializeApp(firebaseConfig);
}

export default initFirebaseAuth;

/* steps for Authentication
------------------------
0.npm install firebase
1.create firebase project
2.create web app
3.get and set configure
4.initialize firebase
5.Enable Auth method
---------------------
step-2
1.Create Login component
2.create register component
3.create login and register component
----------------------------------
step-3
1.set up sign in method
2.set up sign out method
3.user State
4. set observer
5.return necessary methods and states form useFirebase
----------------------
step- 4
1. create a auth context
2.create context Provider
3.set context Provider contex value
4.usr Auth Provider
5.create useAuth Hook
-----------------------------------
step- 5
1.create private route
2.set private route

*/