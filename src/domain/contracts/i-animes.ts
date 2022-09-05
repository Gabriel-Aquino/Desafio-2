import mongoose from "mongoose";

export interface IAnimes extends mongoose.Document {
  id: string;
  animes_id: string;
  banner: string;
  name: string;
  note: string;
  genres: string[];
  year: string;
  createdAt: Date;
  modifiedAt: Date;
}