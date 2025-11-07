import {BaseApiEndpoint} from '../../../shared/infrastructure/base-api-enpoint';
import {HttpClient} from '@angular/common/http';
import {Provider} from '../../domain/model/provider.entity';
import {environment} from '../../../../environments/environment';
import {ProviderResource, ProvidersResponse} from './providers-response';
import {ProvidersAssembler} from './providers-assembler';

export class ProvidersApiEndpoint extends
  BaseApiEndpoint<Provider, ProviderResource,
    ProvidersResponse, ProvidersAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformApiBaseUrl}${environment.platformApiProvidersEndpointPath}`,
      new ProvidersAssembler()
    );
  }
}
