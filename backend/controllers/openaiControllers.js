const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const generateImage = async (req, res) => {

    try {
        const response = await openai.createImage({
            prompt: "A cute baby sea otter",
            n: 2,
            size: "1024x1024",
          });

        const image_result = response.data.data;

        res.status(200).json({
            success: true,
            message: image_result
        })

    } catch (err) {
        console.log(err)
    }
    
}

module.exports = { generateImage };