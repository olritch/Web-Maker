const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema(
    {
        name: String,
        pageId: { type: mongoose.Schema.Types.ObjectId, ref: "WidgetModel" },
        widgetType: {typy: String, enum:["HEADING", "IMAGE", "YOUTUBE"]},
        text: String,
        size: String,
        width: Number,
        url: String,
        dateCreated: { type: Date, default: Date.now }
    },
    { collection: "widget" }
);

module.exports = WidgetSchema