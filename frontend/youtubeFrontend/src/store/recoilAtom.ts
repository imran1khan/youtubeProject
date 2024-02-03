import { atom } from 'recoil';

export const CookieAtom = atom({
  key: 'CookieAtom',
  default: '',
});

export const UploadVideoAtom = atom({
  key:'UploadVideoAtom',
  default: true,
});
