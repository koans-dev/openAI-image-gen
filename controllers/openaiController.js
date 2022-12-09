const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req,res) => {
    try {
        const respose = await openai.createImage({
        prompt :'Cat on super car',
        n : 1,
        size :'512x512'
        });

        const imgeUrl = respose.data.data[0].url

        res.status(200).json({
          success : true,
          data: imgeUrl
        });

    } catch (error) {

        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
          
        res.status(400).json({
            success : false,
            error:'The image could not be generated'

        })
        
    }
}; 

module.exports = {generateImage};