import App from './app';
import HelloController from './controllers/hello.controller';
import UserController from './controllers/user.controller';

let controllers = [new HelloController(), new UserController()];
let app = new App(controllers, 3000);
app.listen();
