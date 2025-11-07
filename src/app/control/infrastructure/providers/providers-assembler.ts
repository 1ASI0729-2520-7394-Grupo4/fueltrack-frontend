import {BaseAssembler} from '../../../shared/infrastructure/base-assembler';
import {Provider} from '../../domain/model/provider.entity';
import {ProviderResource, ProvidersResponse} from './providers-response';

export class ProvidersAssembler implements
  BaseAssembler<Provider, ProviderResource, ProvidersResponse> {

  toEntitiesFromResponse(response: ProvidersResponse): Provider[] {
    return response.providers.map(provider =>
      this.toEntityFromResource(provider as ProviderResource));
  }

  toEntityFromResource(resource:ProviderResource): Provider {
    return new Provider({
      id: resource.id,
      name: resource.name,
      fuelType: resource.fuelType,
      note: resource.note,
      active: resource.active,
    });
  }

  toResourceFromEntity(entity: Provider): ProviderResource {
    return {
      id: entity.id,
      name: entity.name,
      fuelType: entity.fuelType,
      note: entity.note,
      active: entity.active,
    } as ProviderResource;
  }

}
