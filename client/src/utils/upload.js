import axios from "axios";


const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "jobapplication");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/asantesylvester/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

// const upload = async (file) =>{
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "seqvgjt2");

//   try{
//     const res = await axios.post(
//       "https://api.cloudinary.com/v1_1/asantesylvester/image/upload", 
//       data
//       );

//       const { url } = res.data;
//       return url;

//   }catch(err){
//     console.log(err);
//   }
// } 

export default upload;
