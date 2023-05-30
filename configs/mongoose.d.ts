import { Document, Model } from 'mongoose';

declare module 'mongoose' {
  interface QueryHelpers {
    excludeData(): Query<any, any, any>;
  }
}