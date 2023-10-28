const sendemailcontroller = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }

    return res.status(200).send({
      success: true,
      message: "your message send successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send email api error",
      error,
    });
  }
};

module.exports = { sendemailcontroller };
