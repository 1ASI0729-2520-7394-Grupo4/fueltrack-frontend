import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BaseApiEndpoint} from '../../../shared/infrastructure/base-api-enpoint';
import {Terminal} from '../../domain/model/terminal.entity';
import {TerminalResource, TerminalsResponse} from './terminals-response';
import {TerminalsAssembler} from './terminals-assembler';

export class TerminalsApiEndpoint extends
  BaseApiEndpoint<Terminal, TerminalResource,
    TerminalsResponse, TerminalsAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformApiBaseUrl}${environment.platformApiTerminalsEndpointPath}`,
      new TerminalsAssembler()
    );
  }
}
