var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
    {
        username: string,
        password: string,
        firstname: { type: String, default: "" },
        lastname: { type: String, default: "" },
        email: { type: String, default: "" },
        dataCreated: { type: Date, default: Date.now }
},
{ collection: "user" }
);

module.export = UserSchema;