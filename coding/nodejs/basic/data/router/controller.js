module.exports = function(app){
    app.get("/", function(req,res){
        res.render("index.ejs");
    });

    app.get("/parameter", function(req,res){
        var render_data = {
            data1 : req.query.data1,
            data2 : req.query.data2,
        };
        res.render("parameter.ejs", render_data);

    });
    app.post("/parameter-post",function(req,res){
        var render_data = {
            data1 : req.query.data1,
            data2 : req.query.data2,
        };
        res.render("parameter-post.ejs",render_data);
    });
}