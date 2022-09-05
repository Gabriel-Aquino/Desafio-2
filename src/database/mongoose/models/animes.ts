import { IAnimes } from '@domain/contracts/i-animes';
import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  animes_id: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  genres: [
    {
      type: String,
      required: true,
    },
  ],
  year: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
}, {versionKey: false});

export const Animes = mongoose.model<IAnimes>('Animes', schema);