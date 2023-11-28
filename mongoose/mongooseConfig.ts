const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGODB_CONNECTION_URI);
} catch (err) {
    console.log(err)
}

export default mongoose;