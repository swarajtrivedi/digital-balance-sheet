import { Request } from "express";
interface IAddEntry {
    title: string;
    amount: number;
    type: string;
    category: string;
    note?: string;
    date: string;
  }
  
interface EntryRequest<T = any> extends Request {
    body: T;
    userId?: string;
}
  
export {EntryRequest, IAddEntry}