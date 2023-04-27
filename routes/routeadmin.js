const express=require('express');


const router=express.Router();


const controller=require('../controller/admin.js');


router.post('/add-details',controller.postDetails);

router.get('/get-details',controller.getDetails);

router.delete('/delete-detail/:id',controller.deleteDetail);

module.exports=router;