import {BaseResource, BaseResponse} from '../../../shared/infrastructure/base-response';
import {OrderDetail} from '../../domain/model/order-detail.entity';

export interface OrderResource extends BaseResource {
  id: number;
  created: string;
  user: string;
  amount: number;
  terminal: string;
  status: string;
  details: OrderDetail[];
}

export interface OrdersResponse extends BaseResponse {
  orders: OrderResource[];
}
