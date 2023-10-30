import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {
  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  private playerNames = ['', 'X', 'O'];
  public boardContent!: number [][];



  constructor(){

    this.restart();
  }

  private playerIndexToClass(playerIx: number): string {
    if (playerIx !== 0) {
      return `occupied-${this.playerNames[playerIx]}`;
    }

    return '';
  }

  public getStyle(col: number, row: number): string {
    if(this.boardContent[row][col] !==0){
      return this.playerIndexToClass(this.boardContent[row][col]);
    }
    return '';
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public set(col: number, row: number): void{
    if(this.currentWinnerIx === 0 && this.boardContent[row][col] === 0){
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
    }
    this.currentWinnerIx = this.getWinnerIndex();
  }

  public get winnerIndex(): number {
    return this.currentWinnerIx;
  }

  public getWinningPlayerName(): string {
    return this.playerNames[this.currentWinnerIx];
  }

  public restart(): void {
    this.boardContent = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;
  }

  private getWinnerIndex(): number {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const first = this.boardContent[row][0];
      if (
        first !== 0 &&
        this.boardContent[row][1] === first &&
        this.boardContent[row][2] === first
      ) {
        return first;
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      const first = this.boardContent[0][col];
      if (
        first !== 0 &&
        this.boardContent[1][col] === first &&
        this.boardContent[2][col] === first
      ) {
        return first;
      }
    }

    // Check diagonals
    const first = this.boardContent[1][1];
    if (first !== 0) {
      if (
        this.boardContent[0][0] === first &&
        this.boardContent[2][2] === first
      ) {
        return first;
      }
      if (
        this.boardContent[2][0] === first &&
        this.boardContent[0][2] === first
      ) {
        return first;
      }
    }

    return 0;
  }
}
