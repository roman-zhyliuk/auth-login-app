/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Schema, Document } from 'mongoose';

// export type LoginDocument = User & Document;

// export interface User extends Document {
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   passwordRepeat: string;
// }

// export const LoginSchema = new Schema({
//   username: { type: String},
//   email: { type: String},
//   password: { tpye: String}
// });

/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


// schema for new user
export type LoginDocument = User1 & Document;

@Schema()
export class User1 {
  @Prop()
  username: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  passwordRepeat: string;
}

export const LoginSchema = SchemaFactory.createForClass(User1);
