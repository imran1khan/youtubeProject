import { atom } from 'recoil';

export const CookieAtom = atom({
  key: 'CookieAtom',
  default: '',
});

export const UploadVideoAtom = atom({
  key:'UploadVideoAtom',
  default: true,
});

export const CommentsAtom = atom({
  key:'CommentsAtom',
  default:'',
});

export const reRanderComment=atom({
  key:'reRanderComment',
  default:false,
});
