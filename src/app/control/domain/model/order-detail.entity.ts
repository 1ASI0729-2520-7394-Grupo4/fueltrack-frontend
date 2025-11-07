import {BaseEntity} from '../../../shared/infrastructure/base-entity';

export class OrderDetail implements BaseEntity {

  constructor(provider:{ id: number; fuelType: string, quantity: number }) {
    this._id = provider.id;
    this._fuelType = provider.fuelType;
    this._quantity = provider.quantity;
  }

  private _id: number;
  private _fuelType: string;
  private _quantity: number;

  //--------------------------
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  //--------------------------
  get fuelType(): string {
    return this._fuelType;
  }
  set fuelType(value: string) {
    this._fuelType = value;
  }
  //--------------------------
  get quantity(): number {
    return this._quantity;
  }
  set quantity(value: number) {
    this._quantity = value;
  }
  //--------------------------
}
