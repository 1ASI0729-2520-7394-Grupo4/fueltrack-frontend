import {BaseAssembler} from '../../../shared/infrastructure/base-assembler';
import {Order} from '../../domain/model/order.entity';
import {OrderResource, OrdersResponse} from './orders-response';

export class OrdersAssembler implements
  BaseAssembler<Order, OrderResource, OrdersResponse> {

  toEntitiesFromResponse(response: OrdersResponse): Order[] {
    return response.orders.map(order =>
      this.toEntityFromResource(order as OrderResource));
  }

  toEntityFromResource(resource: OrderResource): Order {
    return new Order({
      id: resource.id,
      created: resource.created,
      user: resource.user,
      amount: resource.amount,
      terminal: resource.terminal,
      status: resource.status,
      details: resource.details
    });
  }

  toResourceFromEntity(entity: Order): OrderResource {
    return {
      id: entity.id,
      created: entity.created,
      user: entity.user,
      amount: entity.amount,
      terminal: entity.terminal,
      status: entity.status,
      details: entity.details
    } as OrderResource;
  }

}
