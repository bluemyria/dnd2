import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    {   path: 'sortable',
        children: [
        {
            path: 'kanban',
            pathMatch: 'full',
            loadChildren: './sortable/kanban/module#KanbanModule'
        }
    ] }
];
