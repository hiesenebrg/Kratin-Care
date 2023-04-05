const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
module.exports.getapidata = async function (req, res) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-001",
      prompt: `My age is ${req.body.age} and I am suffering from the ${req.body.disease} from 
       ${req.body.from} Please suggest me how to cure this and also suggest some yoga to do in order to cure this`,

      temperature: 0.4,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (response) {
      res.status(200).json({
        success: true,
        message: "Successfull! Here is your data",

        data: {
          textgenerated: response.data.choices[0].text,
        },
      });
    }
  } catch (error) {
    console.log("********", error);
    return res.json(500, {
      success: false,
      message: "Internal Server Error",
    });
  }
};
