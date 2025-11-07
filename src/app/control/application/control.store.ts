import {computed, Injectable, Signal, signal} from '@angular/core';

import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {retry} from 'rxjs';
import {Terminal} from '../domain/model/terminal.entity';
import {ControlApi} from '../infrastructure/control-api';
import {Provider} from '../domain/model/provider.entity';
import {Order} from '../domain/model/order.entity';

@Injectable({
  providedIn: 'root'
})
export class ControlStore {
  private readonly terminalsSignal = signal<Terminal[]>([]);
  readonly terminals = this.terminalsSignal.asReadonly();
  readonly terminalCount = computed(() => this.terminals().length);
  //--------------------------------------
  private readonly providersSignal = signal<Provider[]>([]);
  readonly providers = this.providersSignal.asReadonly();
  readonly providerCount = computed(() => this.providers().length);
  //--------------------------------------
  private readonly ordersSignal = signal<Order[]>([]);
  readonly orders = this.ordersSignal.asReadonly();
  readonly orderCount = computed(() => this.orders().length);
  //--------------------------------------
  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(private controlApi: ControlApi) {
    this.loadTerminals();
    this.loadProviders();
    this.loadOrders();
  }

  private loadTerminals(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.controlApi.getTerminals().pipe(takeUntilDestroyed()).subscribe({
      next: terminals => {
        this.terminalsSignal.set(terminals);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load terminals'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadProviders(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.controlApi.getProviders().pipe(takeUntilDestroyed()).subscribe({
      next: providers => {
        this.providersSignal.set(providers);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load providers'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadOrders(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.controlApi.getOrders().pipe(takeUntilDestroyed()).subscribe({
      next: orders => {
        this.ordersSignal.set(orders);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load providers'));
        this.loadingSignal.set(false);
      }
    });
  }

  getTerminalById(id: number | null | undefined): Signal<Terminal | undefined> {
    return computed(() => id ? this.terminals().find(c => c.id === id) : undefined);
  }

  getProviderById(id: number | null | undefined): Signal<Provider | undefined> {
    return computed(() => id ? this.providers().find(c => c.id === id) : undefined);
  }

  private formatError(error: any, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found') ? `${fallback}: Not found` : error.message;
    }
    return fallback;
  }
}
