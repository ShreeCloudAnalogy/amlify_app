const login = async(req, res) => {
    const { username } = req.body;
    if (!username) {
        res.send({
            message: "Error",
            status: 400,
            data: "Username should not be empty.",
        });
    } else {
        res.send({
            message: "Success",
            status: 200,
        });
    }
};

export default login;