const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'efficiencyhub',
    });
} catch (err) {
    console.log(err)
}

export default mongoose;