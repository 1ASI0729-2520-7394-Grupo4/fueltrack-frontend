import { Injectable } from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TerminalsApiEndpoint} from './terminals/terminals-api-endpoint';
import {Terminal} from '../domain/model/terminal.entity';
import {ProvidersApiEndpoint} from './providers/providers-api-endpoint';
import {Provider} from '../domain/model/provider.entity';
import {OrdersApiEndpoint} from './orders/orders-api-endpoint';
import {Order} from '../domain/model/order.entity';

@Injectable({
  providedIn: 'root'
})
export class ControlApi extends BaseApi {

  private readonly terminalsEndpoint : TerminalsApiEndpoint;
  private readonly providersEndpoint : ProvidersApiEndpoint;
  private readonly ordersEndpoint : OrdersApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.terminalsEndpoint = new TerminalsApiEndpoint(http);
    this.providersEndpoint = new ProvidersApiEndpoint(http);
    this.ordersEndpoint = new OrdersApiEndpoint(http);
  }
  //=================================
  getTerminals(): Observable<Terminal[]> {
    return this.terminalsEndpoint.getAll();
  }
  getTerminalById(id: number): Observable<Terminal | null> {
    return this.terminalsEndpoint.getById(id);
  }
  createTerminal(terminal: Terminal): Observable<Terminal> {
    return this.terminalsEndpoint.create(terminal);
  }
  updateTerminal(terminal: Terminal): Observable<Terminal> {
    return this.terminalsEndpoint.update(terminal, terminal.id);
  }
  deleteTerminal(id: number): Observable<void> {
    return this.terminalsEndpoint.delete(id);
  }
  //=================================
  getProviders(): Observable<Provider[]> {
    return this.providersEndpoint.getAll();
  }
  getProviderById(id: number): Observable<Provider | null> {
    return this.providersEndpoint.getById(id);
  }
  createProvider(provider: Provider): Observable<Provider> {
    return this.providersEndpoint.create(provider);
  }
  updateProvider(provider: Provider): Observable<Provider> {
    return this.providersEndpoint.update(provider, provider.id);
  }
  deleteProvider(id: number): Observable<void> {
    return this.providersEndpoint.delete(id);
  }
  //=================================
  getOrders(): Observable<Order[]> {
    return this.ordersEndpoint.getAll();
  }
  getOrderById(id: number): Observable<Order | null> {
    return this.ordersEndpoint.getById(id);
  }
  createOrder(order: Order): Observable<Order> {
    return this.ordersEndpoint.create(order);
  }
  updateOrder(order: Order): Observable<Order> {
    return this.ordersEndpoint.update(order, order.id);
  }
  deleteOrder(id: number): Observable<void> {
    return this.ordersEndpoint.delete(id);
  }
}
