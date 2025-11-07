import {BaseAssembler} from '../../../shared/infrastructure/base-assembler';
import {Terminal} from '../../domain/model/terminal.entity';
import {TerminalResource, TerminalsResponse} from './terminals-response';

export class TerminalsAssembler implements
  BaseAssembler<Terminal, TerminalResource, TerminalsResponse> {

  toEntitiesFromResponse(response: TerminalsResponse): Terminal[] {
    return response.terminals.map(resource =>
      this.toEntityFromResource(resource as TerminalResource));
  }

  toEntityFromResource(resource:TerminalResource): Terminal {
    return new Terminal({
      id: resource.id,
      name: resource.name,
      location: resource.location,
      active: resource.active,
    });
  }

  toResourceFromEntity(entity: Terminal): TerminalResource {
    return {
      id: entity.id,
      name: entity.name,
      location: entity.location,
      active: entity.active,
    } as TerminalResource;
  }

}
