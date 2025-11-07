import {BaseEntity} from '../../../shared/infrastructure/base-entity';
import {OrderDetail} from './order-detail.entity';

export class Order implements BaseEntity {

  constructor( provider: {
    id: number,
    created: string,
    user: string,
    amount: number,
    terminal: string,
    status: string,
    details: OrderDetail[],
  }) {
    this._id = provider.id;
    this._created = provider.created;
    this._user = provider.user;
    this._amount = provider.amount;
    this._terminal = provider.terminal;
    this._status = provider.status;
    this._details = provider.details;
  }

  private _id: number;
  private _created: string;
  private _user: string;
  private _amount: number;
  private _terminal: string;
  private _status: string;
  private _details: OrderDetail[];

  //--------------------------
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  //--------------------------
  get created(): string {
    return this._created;
  }
  set created(value: string) {
    this._created = value;
  }
  //--------------------------
  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = value;
  }
  //--------------------------
  get amount(): number {
    return this._amount;
  }
  set amount(value: number) {
    this._amount = value;
  }
  //--------------------------
  get terminal(): string {
    return this._terminal;
  }
  set terminal(value: string) {
    this._terminal = value;
  }
  //--------------------------
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }
  //--------------------------
  get details(): OrderDetail[] {
    return this._details;
  }
  set details(value: OrderDetail[]) {
    this._details = value;
  }
  //--------------------------
}
