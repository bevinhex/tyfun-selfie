import {UserInfo} from './collections.js';
import {Images} from './collections.js';

Images.before.insert(function(userId,doc){
    doc.owner = userId;
    doc.rating = 0;
    doc.createdAt = new Date();
});
Images.after.remove(function(userId,doc){
  UserInfo.rating.update(
    {userId:userId},
    {$inc:{rating:-doc.rating}}
  )
});
