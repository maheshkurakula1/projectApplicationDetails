let projectAndAppModel = require('./../models/projectAndApplicationsModel').projectAndApplications

exports.inserProjectAndApplication = function(req, res, cb){
    console.log(req.body, "functioreq. call")
    projectAndAppModel.create({
        application_id: req.body.application_id,
        application_name: req.body.application_name,
        project_id: req.body.project_id,
        project_name: req.body.project_name
    })
    .then(result => {
        console.log(result)
        res.send({
            status: "true",
            data: result
        })
    })
    .catch(err => {
        console.log(err)
        res.send({
            status: "false",
            data: {'aasd':'dfgfgdds'}
        })
    })
    
}

exports.getProjectAndApplications = function(req, res, cb){
    projectAndAppModel.findAll()
    .then(result => {
        res.send({
            status: true,
            data: result
        })
    })
    .catch(err => {
        console.log(err)
        res.send({
            status: false,
            data: {}
        })
    })
}