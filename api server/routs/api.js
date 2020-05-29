const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../modules/user');


router.get('/',(req,res)=>{
    res.status(200).json({
        message:"api is listerning"
    });
});

router.post('/register',(req,res,next)=>{
let userData=req.body;
const user=new User(userData);
user.save((error,user)=>{
if(error){
    res.status(404).json({
        error:error
    });
}else{
    let payload={subject: user._id};
    let token = jwt.sign(payload,'secretkey');
    res.status(200).send({token});
}
});
});



router.post('/login',(req,res,next)=>{
let userdata=req.body;
User.findOne({email:userdata.email},(error,user)=>{
if(!user){
    res.status(401).send("not a valid user");
}else{
    if(user.password !=userdata.password){
        res.status(200).send("invalid password");
    }else{
        let payload={subject: user._id};
        let token = jwt.sign(payload,'secretkey');
        res.status(200).send({token});
        
    }
}
});
});




router.get("/events",(req,res)=>{
let events=[
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    },
    {name:"loren",
    palce:"dambulla",
    date:"2020/05/20"
    }
];
res.json(events);
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('unaothorized request')
    }
    let tokenSplit=[];
    tokenSplit=req.headers.authorization.split(' ')
    let token = tokenSplit[1];
    console.log(token);
    if(token==='null'){
        return res.status(401).send('unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey');
    if(!payload){
        return res.status(401).send('unaothorized request')
    }
    req.userId=payload.subject;
    next();
    }
router.get("/special",verifyToken,(req,res)=>{
    let events=[
        {name:"special",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        },
        {name:"loren",
        palce:"dambulla",
        date:"2020/05/20"
        }
    ];
    res.json(events);
    });
module.exports=router;

