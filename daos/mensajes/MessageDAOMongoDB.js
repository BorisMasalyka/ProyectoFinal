const mongoDB = require(`../../dataBase/options/mongoDB`);

const messageModel = require(`../../dataBase/models/message`);

const CrudMongoDB = require(`../../dataBase/crudMongoDB/crudMessage`);

class MessageDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, messageModel);
    };
};

module.exports = MessageDAOMongoDB;