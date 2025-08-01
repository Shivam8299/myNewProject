function isAdmin(req,res,next){
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(403).json({
            success:false,
            message:"Access denied, Admins only"
        })
    }
}

export default isAdmin