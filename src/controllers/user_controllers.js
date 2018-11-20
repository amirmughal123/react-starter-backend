// var Test = require('../models/test_model'), //-- test model instance
    // appConfig = require('../configuration/appConfig'),
    // alerts = require('../configuration/alerts');

export default {

    // create: (req, res, next) => {

    //     Test.create(req.body, function (err, doc) {

    //         if (err)
    //             next(err);
    //         else
    //             return res.send(doc);

    //     })

    // },

    getAll: (req, res, next) => {
      res.send({ name: 'amir mughal' });

        // Test.find((err, docs) => {

        //     if (err)
        //         next(err);
        //     else
        //         res.send(docs);

        // })

    },

    // getById: async (req, res, next) => {

    //     try {
    //         const test = await Test.findById(req.params.id);

    //         if (!test)
    //             return res
    //                 .status(appConfig.STATUS_CODES.NOT_FOUND)
    //                 .send("Model " + alerts.errors.NOT_FOUND);

    //         res.send(test);
    //     }
    //     catch (error) {
    //         next(error);
    //     }

    // },

    // update: (req, res, next) => {

    //     Test.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc) => {
    //         if (err)
    //             next(err);
    //         else
    //             res.send(doc);
    //     })

    // },

    // delete: (req, res, next) => {

    //     Test.remove({ _id: req.params.id }, err => {
    //         if (err)
    //             next(err);
    //         else
    //             res.send({ message: "Item " + alerts.success.DELETE_SUCCESS });
    //     })

    // }

}