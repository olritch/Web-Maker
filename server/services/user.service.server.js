module.exports = function(app) {
        // Create User
        app.post("/api/user", createUser);
        // get User By Id
        app.get("/api/user/:uid", findUserById);

        // Get User
        app.get("/api/user", findUser);


    users = [
        {
            _id: "123", 
            username: "alice", 
            password: "alice", 
            firstName: "Alice", 
            lastName: "Wonder", 
            email: "alice@gmail.com"
        },
        {
            _id: "234", 
            username: "bob", 
            password: "bob", 
            firstName: "Bob", 
            lastName: "Marley", 
            email: "bob@whatever.com"
        },
        {
            _id: "345", 
            username: "charly", 
            password: "charly", 
            firstName: "Charly", 
            lastName: "Garcia", 
            email: "charly@hotmail.com"
        },
        {
            _id: "456", 
            username: "shiyu", 
            password: "shiyu", 
            firstName: "Shiyu", 
            lastName: "Wang", 
            email: "swang@ulem.org"
        }
        ];

        function createUser(req, res) {
            var user = req.body;
            user._id = Math.random().toString();
            users.push(user);
            res.json(user);
        }

        function findUserById(req, res) {
            var userId = req.params["uid"];
            for (let x = 0; x < users.length; x++) {
                if (users[x]._id === userId) {  
                  res.json(users[x]); 
            }
        }
    }

    function findUser(req, res) {
        const username = req.query["username"];
        const password = req.query["password"];

        isFinite(username && password) {
             let user
        }
    }
};
