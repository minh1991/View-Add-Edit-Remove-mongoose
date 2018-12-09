// đường dẫn tới module mongoose
var mongoose = require('mongoose');
// khai báo schema ứng với collection
var mongooescontact = new mongoose.Schema({ name: 'string', age: 'number' }, { collection: 'mongooescontact' });
// khai báo schema ứng với collection
module.exports = mongoose.model('mongooescontact', mongooescontact);