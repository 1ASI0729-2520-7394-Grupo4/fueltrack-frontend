import {BaseEntity} from '../../../shared/infrastructure/base-entity';

export class Provider implements BaseEntity {

  constructor(provider:{ id: number; name: string, fuelType: string, note: string, active: boolean }) {
    this._id = provider.id;
    this._name = provider.name;
    this._fuelType = provider.fuelType;
    this._note = provider.note;
    this._active = provider.active;
  }

  private _id: number;
  private _name: string;
  private _fuelType: string;
  private _note: string;
  private _active: boolean;

  //--------------------------
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  //--------------------------
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  //--------------------------
  get fuelType(): string {
    return this._fuelType;
  }
  set fuelType(value: string) {
    this._fuelType = value;
  }
  //--------------------------
  get note(): string {
    return this._note;
  }
  set note(value: string) {
    this._note = value;
  }
  //--------------------------
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  //--------------------------
}
