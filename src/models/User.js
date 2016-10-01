const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	id: Number,
	wins: Number,
	draws: Number,
	looses: Number
});

userSchema.methods.balance = () => {
	return this.wins - this.loses;
};

var User = mongoose.model('User', userSchema);

module.exports = User;