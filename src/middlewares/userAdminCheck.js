const USER_ROL = "USER";

function userAdminCheck(req,res, next) {
    
    if(USER_ROL === "USER_ADMIN"){
        next()
    }else{
        res.send("No sos admin tomatela te dije")
    }

}

module.exports = userAdminCheck