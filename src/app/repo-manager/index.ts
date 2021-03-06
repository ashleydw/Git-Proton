import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RepoManagerComponent } from './repo-manager.component';
import { RepoButtonComponent } from './open-repo/repo-button/repo-button.component';

import { OpenRepoComponent } from './open-repo/open-repo.component';
import { CloneRepoComponent } from './clone-repo/clone-repo.component';
import { InitRepoComponent } from './init-repo/init-repo.component';

import { RepoManagerRoutingModule } from './repo-manager-routing.module';

@NgModule({
  declarations: [
    RepoManagerComponent,
    RepoButtonComponent,
    OpenRepoComponent,
    CloneRepoComponent,
    InitRepoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RepoManagerRoutingModule,
  ],
  providers: [],
  exports: [RepoManagerComponent],
})
export class RepoManagerModule { }
