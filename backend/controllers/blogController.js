import blogModel from "../models/blogModel.js";
class blogController {
  static getAllBlogs = async (req, res) => {
    // res.send("Get All Blogs")
    try {
      const fetchAllBlogs = await blogModel.find({ user: req.user._id });
      return res.status(200).json(fetchAllBlogs);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static addNewBlogs = async (req, res) => {
    // res.send("Add new Blogs")
    const { title, category, description } = req.body;
    try {
      if (title && category && description) {
        const addNewBlog = new blogModel({
          title: title,
          description: description,
          category: category,
          thumbnail: req.file.filename,
          user: req.user._id,
        });
        const savedBlog = await addNewBlog.save();
        if (savedBlog) {
          return res.status(200).json({ message: "Blog Added Successfully" });
        } else {
          return res.status(400).json({ message: "All Fields are required" });
        }
      } else {
        return res.status(400).json({ message: "All Fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static addSingleBlogs = async (req, res) => {
    // res.send("Get single Blogs");
    const { id } = req.params;
    try {
      if (id) {
        const fetchSingleBlog = await blogModel.findById(id);
        if (fetchSingleBlog) {
          return res.status(200).json(fetchSingleBlog);
        } else {
          return res.status(404).json({ message: "Blog not found" });
        }
      } else {
        return res.status(400).json({ message: "Invalid URL" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default blogController;
