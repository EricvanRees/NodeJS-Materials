const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');


console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuidv4());
