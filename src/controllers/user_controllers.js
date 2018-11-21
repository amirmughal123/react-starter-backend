import User from '../models/users';

export default {

  create: (req, res, next) => {
    User.create(req.body, (err, doc) => {
      if (err) next(err);
      else res.send(doc);
    })
  },

  getAll: (req, res, next) => {
    User.find((err, docs) => {
      if (err) next(err);
      else res.send(docs);
    })
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