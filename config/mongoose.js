import mongoose from 'mongoose';
mongoose.Promise = Promise;

mongoose.connect(
  'mongodb://beholdert:frutella@ds135810.mlab.com:35810/ginarium',
  { useNewUrlParser: true }
);
