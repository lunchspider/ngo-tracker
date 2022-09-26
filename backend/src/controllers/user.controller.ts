import {Request, Response, Router} from "express";
import {useDatabase} from "../utils/prisma";

export default class UserController{
    public router = Router();
    public path = "/users";
    // CRUD : create read update delete
    constructor() {
        this.router.get(this.path, this.getUsers);
    }
    private async getUsers(req : Request, res : Response){
        const prisma = useDatabase();
        let users = await prisma.user.findMany();
        res.json(users);
    }
}
