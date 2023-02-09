/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../auth/dto/create-user-dto';
import { UpdateUserDto } from '../auth/dto/update-user-dto';
import { User, UserDocument } from './schemas/user-schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // returns all info about users
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // returns all info about user with provided id
  async getUserById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  // creating new user
  async createUser(userDto: any): Promise<User> {
    const newUser = new this.userModel(userDto);
    console.log(userDto, 'user from server side 1, promise to return user', typeof userDto);
    console.log(newUser, 'created user from server side', typeof newUser);
    newUser.save();
    return newUser;
  }

  // finding user with provided email
  async findUserByEmail(inputEmail: string) {
    const user = await this.userModel.findOne({email: inputEmail}).exec() || '';
    if(user) {
      return user;
    } else {
      return 'error 1';    
    }
  }

  // find user with provided username
  async findUserByUsername(inputUsername: string) {
    const user = await this.userModel.findOne({username: inputUsername}).exec() || '';
    console.log(user, 'user before error', user.toString().length);
    if(user.toString().length != 0) {
      console.log('user without error')
      return user;
    } else {
      console.log('error');
      return 'error 1'
    }
  }

  // deleting user
  async removeUser(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  // updating user info
  async updateUserInfo(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}