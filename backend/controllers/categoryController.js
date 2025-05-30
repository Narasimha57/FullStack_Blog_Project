import categoryModel from "../models/categoryModel.js"

class categoryController{
    static getAllCategories = async(req, res)=>{
        // res.send("Get All Categories")
        try {
            const fetchAllCategories = await categoryModel.find({})
            return res.status(200).json(fetchAllCategories)
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }
    static addNewCategory = async(req, res)=>{
        //  res.send("Add new Categories")
        const {title} = req.body
        try {
            if(title){
                const newCategory = new categoryModel({
                    title,
                })
                const savedCategory = await  newCategory.save();
                if (savedCategory) {
                    return res.status(200).json({message: "Category Added Successfully "})
                } else {
                    return res.status(400).json({message: "No Category found"})
                }
            }else{
                return res.status(400).json({message: "all fields are required"})
            }
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }
}

export default categoryController