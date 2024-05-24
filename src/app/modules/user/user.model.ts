//Model Creation

import { model } from 'mongoose';
import { userSchema } from './user.schema';
import { TUser } from './user.type';

// make it singular, mongoose will automatically make it pluralized
export const userModel = model<TUser>('user', userSchema);
