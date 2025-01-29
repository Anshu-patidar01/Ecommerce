import clouinaryTest from "cloudinary";
const cloudinary = clouinaryTest.v2;

//cloudinary configuration
try {
  cloudinary.config({
    cloud_name: "dnvuqvgp8",
    api_key: "489156571434467",
    api_secret: "en42XkBdaplKo6b1xJBXvZ2su-E",
  });
  console.log("Cloudinary connected successfully.");
} catch (error) {
  throw new Error("error while connecting cloudinary.");
}
// console.log("hello");
export default cloudinary;
