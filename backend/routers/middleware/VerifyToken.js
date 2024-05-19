import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next)=>{
    const header = req.get('Authorization');
    console.log("header",header);
    if(!header){
        return res.status(401).send({message:"Auth headers not found"})
    }
    const token = header.split(" ")[1];
    if(!token){
        console.log("token  ",token);
        res.status(401).send({message:"Token not found"})
    }else{
        jwt.verify(token,"cdac",(err,payload)=>{
            if(err){
                res.status(401).send({message:"Invalid token"})
            }else{
                console.log("payload",payload);
                req.user = payload;
                next();
            }
        })
    }
}
