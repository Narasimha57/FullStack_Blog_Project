import express from 'express'
import AuthController from '../controllers/authController.js'
import blogController from '../controllers/blogController.js';
import categoryController from '../controllers/categoryController.js';
import multer from 'multer'
import checkIsAuthenticatedUSer from '../middlewares/authMiddleware.js';

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, `public/upload/`);
    },
    filename : function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    },
})

const upload = multer({storage:storage})

const router =  express.Router()

router.post(
    '/user/register',
    AuthController.userRegistrtation
);

router.post(
    '/user/login',
    AuthController.userLogin
);

//Protected routes for blogs

router.get(
    '/get/allblogs',
    checkIsAuthenticatedUSer,
    blogController.getAllBlogs
)

router.post(
    '/add/blogs',
    checkIsAuthenticatedUSer,
    upload.single("thumbnail"),
    blogController.addNewBlogs
)

router.get(
    '/get/blogs/:id',
    checkIsAuthenticatedUSer,
    blogController.addSingleBlogs
)

//Protected routes for categories
router.get(
    '/get/categories',
    checkIsAuthenticatedUSer,
    categoryController.getAllCategories
)

router.post(
    '/add/category',
    checkIsAuthenticatedUSer,
    categoryController.addNewCategory
)

export default router