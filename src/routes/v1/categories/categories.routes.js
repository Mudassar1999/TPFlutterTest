const express = require("express");
const router = express.Router();

const httpStatus = require("http-status");

router.route("/").get(async (req, res) => {
  try {
    // const categories =[
    //   {
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   },
    //   {
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   },
    //   {
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   },{
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   },{
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   },
    //   {
    //     name:"",
    //     image:"",
    //     quantity:,
    //     status: 
    //   }
    // ]
    // res.status(200).json(categories);
  } catch (error) {
    throw error;
  }
});

router.route("/list").get(async (req, res) => {
  try {
    res.status(200).json({
      status:"Success"
    });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
