module.exports = function(app) {
    const userModel =require("../models/user/user.model.server");

        // Create User
        app.post("/api/user", createUser);
        // get User By Id
        app.get("/api/user/:uid", findUserById);
        // Get User
        app.get("/api/user", findUser);
        // Update User
        app.put("/api/user", updateUser);

        function createUser(req, res) {
            var user = req.body;
            userModel.createUser(user).then((data) => {
              res.json(data);
                });
            }

        function findUserById(req, res) {
            const userId = req.params["uid"];
            userModel.findUserById(userId).then(
                (data) => {
                    res.json(data);
                }
            )
    }

    function findUser(req, res) {
        const username = req.query["username"];
        const password = req.query["password"];
        if(username && password) {
            userModel.findUserByCredentials(username,password).then(data => {
            
                res.json(data);
            });
            return;
        }

        if (username) {
          userModel.findUserByUsername(username).then( data => {
              res.json(data);}   );
            return;
        }
    }

    function updateUser(req,res) {
        const user = req.body;
        const uid = user._id;
        userModel.updateUser(uid, user).then(data => {
            res.json(data);
        });
    }
};
