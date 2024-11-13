import { HostListener, inject, Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, computed, signal, Signal, effect, DestroyRef } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { fromEvent, distinctUntilChanged, debounceTime } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreakPointService {
  private readonly small = "(max-width:600px)";
  private readonly medium = "(min-width:601px) and (max-width:1000px)";
  private readonly large = "(min-width:1001px)";

  isSmallScreen = signal<boolean>(false);

  constructor(private _BreakPointService: BreakpointObserver, private _DestroyRef: DestroyRef) {
    this.setScreenInfo();

    var reziseObsrv = fromEvent(window, 'resize').pipe(takeUntilDestroyed(this._DestroyRef), debounceTime(200));
    reziseObsrv.subscribe(res => {
      this.setScreenInfo();
    })
  }


  private setScreenInfo() {
    const isSmall = this._BreakPointService.isMatched(this.small);
    this.isSmallScreen.set(isSmall);
  }

}


