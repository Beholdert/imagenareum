import mongoose from 'mongoose';
mongoose.Promise = Promise;

mongoose.connect(
  'mongodb://1:23@ds135810.mlab.com:35810/ginarium',
  { useNewUrlParser: true }
);
