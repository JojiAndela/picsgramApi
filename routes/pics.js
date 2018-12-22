import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import pics from '../controllers/pics';
import auth from '../middlewares/auth';
import picsMid from '../middlewares/controllers/pics';

cloudinary.config({
  cloud_name: 'jojitoon', // process.env.CLOUD_NAME,
  api_key: '489778545632195', // process.env.API_KEY,
  api_secret: '9Y-Xr-EVYULWvf3ijwsH99S7bdE', // process.env.API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'picsgram',
  allowedFormats: ['jpg', 'jpeg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
  limits: 2,
});
const parser = multer({ storage });
const upload = parser.single('photo');
const {
  getAll, createPic, editPic, deletePic,
} = pics;
const { findPic } = picsMid;

const router = express.Router();

router.get('/', auth, getAll);
router.post('/new', auth, upload, createPic);
router.put('/:picId', auth, findPic, upload, editPic);
router.delete('/:picId', auth, findPic, deletePic);


export default router;
