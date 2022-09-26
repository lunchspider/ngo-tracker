import express  from 'express';
class App{
    public app : express.Application;
    public port : number;
    constructor(controllers : any[], port : number){
        this.app = express();
        this.port = port;
        controllers.forEach((val) => {
            this.app.use('/', val.router);
        })
    }
    public listen(){
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }
}

export default App;
