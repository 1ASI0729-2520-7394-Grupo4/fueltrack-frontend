import {BaseResource, BaseResponse} from '../../../shared/infrastructure/base-response';

export interface ProviderResource extends BaseResource {
  id: number;
  name: string;
  fuelType: string;
  note: string;
  active: boolean;
}

export interface ProvidersResponse extends BaseResponse {
  providers: ProviderResource[];
}
