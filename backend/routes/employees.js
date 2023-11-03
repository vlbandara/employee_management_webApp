const router = require("express").Router();
let Employee = require("../models/employee.js");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const expirience = Number(req.body.expirience);

    const newEmployee = new Employee({
        name,
        age,
        gender,
        expirience

    })
    newEmployee.save().then(()=>{
        res.json("Employee added");
    }).catch(()=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch(()=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = request.params.id;
    const {name, age, gender, expirience} = req.body;
    const updatedEmployee = new Employee({
        name,
        age,
        gender,
        expirience
    })
    const update = await Employee.findByIdAndUpdate(userId,updatedEmployee).then(()=>{
        res.status(200).json({status: "User updated", user: update})

    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error in updating", user: update})

    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = request.params.id;
    
    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).json({status: "User deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error in deleting"});

    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Employee.findById(userId).then(()=>{
        res.status(200).send({status: "user fetched", user:user} )
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error in fetching user",user:user});
    })
})
module.exports = router;