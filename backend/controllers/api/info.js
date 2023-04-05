const Info = require("../../models/info");

module.exports.info = async function (req, res) {
  try {
    console.log("I am here");
    let info = await Info.create(req.body);
    res.json(200, {
      success: true,
      message: "Info is created",

      data: {
        info: info,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(500, {
      success: false,
      message: "Internal Server Error",

      data: {
        info: error,
      },
    });
  }
};

module.exports.getinfo = async function (req, res) {
  try {
    let info = await Info.findOne({ userid: req.body.userid });
    if (info) {
      res.status(200).json({
        success: true,
        message: "Info collected",

        data: {
          info: info,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",

      data: {},
    });
  }
};
