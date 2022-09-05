import mongoose from 'mongoose';

export async function connect() {
  await mongoose.connect('mongodb://db:27017/animes');
}
