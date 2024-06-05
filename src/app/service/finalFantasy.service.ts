import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class FinalFantasyService {
  private FinalFantasyN=[
    {id: 1,title: "Final Fantasy I", description: "Le premier Final Fantasy GBA ", images: "./assets/img/finalF1.png"},
    {id: 2,title: "truc2", description: "muche de truc2", images: ["truc, muche, moche"]},
    {id: 3,title: "truc3", description: "muche de truc3", images: ["truc, muche, moche"]},
    {id: 4,title: "truc4", description: "muche de truc4", images: ["truc, muche, moche"]},
    {id: 5,title: "truc5", description: "muche de truc5", images: ["truc, muche, moche"]},];
  private FinalFantasyHs =[
    {id: 6,title: "truc6", description: "muche de truc6", images: ["truc, muche, moche"]},
    {id: 7,title: "truc7", description: "muche de truc7", images: ["truc, muche, moche"]},
    {id: 8,title: "truc8", description: "muche de truc8", images: ["truc, muche, moche"]},
    {id: 9,title: "truc9", description: "muche de truc9", images: ["truc, muche, moche"]},
    {id: 10,title: "truc10", description: "muche de truc10", images: ["truc, muche, moche"]},
  ]
getN(id:number){
    return this.FinalFantasyN.find(i => i.id === id)
}
getHs(id:number){
    return this.FinalFantasyHs.find(i => i.id === id)
}

}
