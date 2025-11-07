import {BaseResource, BaseResponse} from '../../../shared/infrastructure/base-response';

export interface TerminalResource extends BaseResource {
  id: number;
  name: string;
  location: string;
  active: boolean;
}

export interface TerminalsResponse extends BaseResponse {
  terminals: TerminalResource[];
}
