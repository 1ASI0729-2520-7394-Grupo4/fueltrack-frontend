import {BaseApiEndpoint} from '../../../shared/infrastructure/base-api-enpoint';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Order} from '../../domain/model/order.entity';
import {OrderResource, OrdersResponse} from './orders-response';
import {OrdersAssembler} from './orders-assembler';

export class OrdersApiEndpoint extends
  BaseApiEndpoint<Order, OrderResource,
    OrdersResponse, OrdersAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformApiBaseUrl}${environment.platformApiOrdersEndpointPath}`,
      new OrdersAssembler()
    );
  }
}
