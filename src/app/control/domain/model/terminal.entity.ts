import {BaseEntity} from '../../../shared/infrastructure/base-entity';

export class Terminal implements BaseEntity {

  constructor(terminal:{ id: number; name: string, location: string, active: boolean }) {
    this._id = terminal.id;
    this._name = terminal.name;
    this._location = terminal.location;
    this._active = terminal.active;
  }

  private _id: number;
  private _name: string;
  private _location: string;
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
  get location(): string {
    return this._location;
  }
  set location(value: string) {
    this._location = value;
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
