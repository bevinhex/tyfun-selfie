import {Mongo} from 'meteor/mongo';

export const UserInfo = new Mongo.Collection('userinfo');
export const Images = new Mongo.Collection('images');
export const Events = new Mongo.Collection('events');
export const Comments = new Mongo.Collection('comments');
