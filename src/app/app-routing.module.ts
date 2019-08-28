import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './botones/botones.module#BotonesPageModule' },
  { path: 'tarjetas', loadChildren: './tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'fechas', loadChildren: './fechas/fechas.module#FechasPageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'formularios', loadChildren: './formularios/formularios.module#FormulariosPageModule' },
  { path: 'listados', loadChildren: './listados/listados.module#ListadosPageModule' },
  { path: 'reordenar', loadChildren: './reordenar/reordenar.module#ReordenarPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'progreso', loadChildren: './progreso/progreso.module#ProgresoPageModule' },
  { path: 'refrescar', loadChildren: './refrescar/refrescar.module#RefrescarPageModule' },
  { path: 'busqueda', loadChildren: './busqueda/busqueda.module#BusquedaPageModule' },
  { path: 'segmentos', loadChildren: './segmentos/segmentos.module#SegmentosPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
