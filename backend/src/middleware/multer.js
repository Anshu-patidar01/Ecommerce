import multer from "multer";
const storage = multer.diskStorage({});

//filke upload filter
const fileFilter = (req, file, cd) => {
  try {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cd(new Error("Not an image! Please upload an image."), false);
    }
  } catch (error) {
    throw new Error("problem in multer.");
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
