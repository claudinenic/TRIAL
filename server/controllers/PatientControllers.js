import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

    const newPatient = await patientInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newPatient
    })
}


export const getAllPatients = async (req,res) => {

    const allPatients = await patientInfos.find();

    try{
        res.status(200).json({
            status:'success',
            data:{
                allPatients
            }
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

export const getPatient = async (req,res) => {

    try{
        const patient = await patientInfos.findById(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
            data:patient    
            }
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

export const deletePatient = async (req,res) => {

    try{
        await patientInfos.findByIdAndRemove(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
             message:null    
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

export const updatePatient = async (req,res) => {

    try{
        const data = await patientInfos.findByIdAndUpdate(req.params.id,req.body,{
            new:true});

        res.status(200).json({
            status:'success',
            data:{
             data   
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}


