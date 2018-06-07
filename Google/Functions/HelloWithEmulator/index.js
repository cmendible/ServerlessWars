const moment=require('moment');

exports.helloWorld = (req, res) => {
    let now= moment().format('MMMM Do YYYY, h:mm:ss a'); // June 5th 2018, 11:00:59 am
    res.status(200).send(`Hello it's ${now}`);
};
