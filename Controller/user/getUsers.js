const userModel = require("../../models/user");

const get = (req, res) => {
    console.log("Hello");
    userModel.find().then((resp1) => {
        console.log(resp1);
        if(resp1.length === 0){
            res.status(204).send({
                'message': 'User not found'
            });
        }
        else{
            res.send({
                'message': 'User is here',
                'data': resp1
            });
        }
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = get;