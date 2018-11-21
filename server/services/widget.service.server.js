module.exports = function(app) {
//  Create Widget
app.post("/api/widget", createWidget);
// Find All Widget For Page
app.get("/api/page/:pid/widget", findAllWidgetsForPage);
// Find Widget By Id
app.get("/api/widget/:wid", findWidgetById);
// Update Widget
app.put("/api/widget", updateWidget);
// Delete Widget
app.delete("/api/widget/:wid", deleteWidget);

widgets = [
    { 
        _id: "123", 
        widgetType: "HEADING", 
        pageId: "321", 
        size: 2, 
        text: "GIZMODO"
    },
    { 
        _id: "234", 
        widgetType: "HEADING", 
        pageId: "321", 
        size: 4, 
        text: "Lorem ipsum"
    },
    { 
        _id: "345", 
        widgetType: "IMAGE", 
        pageId: "321", 
        width: "30%", 
        url:
         "../../assets/gizz.JPG"                                        // url: "http://lorempixel.com/400/200/"
    },
    { 
        _id: "567", 
        widgetType: "HEADING", 
        pageId: "321", 
        size: 4, 
        text: "Lorem ipsum"
    },
    { 
        _id: "678", 
        widgetType: "YOUTUBE", 
        pageId: "321", 
        width: "50%", 
        url: "https://youtu.be/AM2Ivdi9c4E" 
    }  
  ];

function createWidget(req, res){
    widget._id = Math.random().toString();
        widgets.push(widget);
        res.json(widget);
 }
function findAllWidgetsForPage(req, res) {
    let result = [];
        for (let i = 0; i < widgets.length; i++) {
            if (pageId === widgets[i].pageId) {
                result.push(this.widgets[i]);
            }
        }
        res.json (result);
}

function selectWidgetbyId(wid) {
    for (let i = 0; i < websites.length; i++) {
        if (page[i]._id === wid) { 
          return page[i];
        }
    }
}

function findWidgetById(req, res) {
    for (let i = 0; i < widgets.length; i++) {
        if ((widgetId === widgets[i]._id)) {
            return widgets[i];
        }
        }
}
function updateWidget(req, res) {
    const widget =req.body;
    const oldWidget = selectWidgetbyId(widget._id);
    const oldWidget = this.findWidgetById(widget._id);
    const index = this.widgets.indexOf(oldWidget);
    this.widgets[index] = widget;
    res.json(widget);
}

function deleteWidget(req, res) {
    const widgetId = req.params["wid"];
    const oldWidget = selectWidgetbyId(WidgetId);
    const oldWidget = this.findWidgetById(widgetId);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets.splice(index, 1);
        res.json(widget);
}
};