const VedicMath = require('../model/vedicMathsModel');
const Video = require('../model/videoModel');
module.exports.getVedicVideo = async (req,res,next) => {
    try{
        //console.log("Hello Vedic Math")
        const vedicMathData = await VedicMath.find({});
        console.log(vedicMathData);
        return res.status(200).json({
            vedicCourse: vedicMathData,
            message: "Successfully Data Send"
        });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
}
//Testing Not Fully FUnctional
// module.exports.putTestData = async (req,res)=>{
//     try{
//         console.log("Hello Post");
//         //console.log(await VedicMath.find({}));
//         const {title, description, videoLink, category} = req.body;
//         //console.log(`${title} ${description} ${videoLink} ${category}`);
//         const video = new Video({
//             title: title,
//             description: description,
//             videoLink: videoLink,
//             category: category
//         });
//         const saveVideo = await video.save();
//         if(saveVideo){
//             const vedicMath = await VedicMath.find({});
//             vedicMath.unit1.push(saveVideo);
//             const saveVedic = await vedicMath.save();
//             if(saveVedic){
//                 return res.status(200).json({
//                     message: "Data Saved"
//                 });
//             } else {
//                 return res.status(500).json({
//                     message: "Data Not Saved"
//                 });
//             }
//         } else {
//             return res.status(500).json({
//                 message: "Data Not Saved"
//             });
//         }
//     } catch(err) {
//         console.log(err);
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }