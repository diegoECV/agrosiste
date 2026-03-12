import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StatsCard } from '../../components/stats-card/stats-card';
import { OrdersTable } from '../../components/orders-table/orders-table';
import { ActivityPanel } from '../../components/activity-panel/activity-panel';
import { AnalyticsPanel } from '../../components/analytics-panel/analytics-panel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [StatsCard, OrdersTable, ActivityPanel, AnalyticsPanel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Dashboard {}
