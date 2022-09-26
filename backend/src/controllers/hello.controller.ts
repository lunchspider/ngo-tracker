import {Request, Response, Router} from "express";
import {useDatabase} from "../utils/prisma";

export default class HelloController{
    public router = Router();
    public path = "/";
    constructor() {
        this.router.get(this.path, this.helloWorlder);
    }
    private async helloWorlder(req : Request, res : Response){
        const prisma = useDatabase();
        let users = await prisma.user.findMany();
        res.json(users);
    }
}
