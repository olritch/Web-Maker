const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema(
    {
        name: String,
        pageId: { type: mongoose.Schema.Types.ObjectId, ref: "PageModel" },
        widgetType: {type: String, enum:["HEADING", "IMAGE", "YOUTUBE"]},
        text: String,
        size: String,
        width: String,
        url: String,
        dateCreated: { type: Date, default: Date.now }
    },
    { collection: "widget" }
);

module.exports = WidgetSchema