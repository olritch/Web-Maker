module.exports = function(app) {
//  Create Page
app.post("/api/page", createPage);
// Find All Pages For Website
app.get("/api/website/:wid/page", findAllPagesForWebsite);
// Find Page By Id
app.get("/api/page/:pid", findPageById);
// Update Page
app.put("/api/page", updatePage);
// Delete Page
app.delete("/api/page/:pid", deletePage);

pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }      
  ];

function createPage(req, res){
    let page = req.body;
    page._id = Math.random().toString();
    pages.push(page);
    res.json(page);
 }

function findAllPagesForWebsite(req, res) {
    let result = [];
    const wid = req.params["wid"]
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === wid) {
        result.push(this.pages[i]);
      }
    }
    res.json(result);
}

function selectPagebyId(pid) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i]._id === pid) { 
          return pages[i];
        }
    }
}

function findPageById(req, res) {
    const pid = req.params["pid"];
    const page = selectPagebyId(pid);
    res.json(page);
}

function updatePage(req, res) {
    const page =req.body;
    const oldPage = selectPagebyId(page._id);
    const index = pages.indexOf(oldPage);
    this.pages[index] = page;
    res.json(page);
}

function deletePage(req, res) {
    const pageId = req.params["pid"];
    const Page = selectPageById(pageId);
    const index = websites.indexOf(Page);
    pages.splice(index, 1);
    res.json(pages);
}
};