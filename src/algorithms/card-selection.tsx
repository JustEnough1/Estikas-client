type word = { est: string; rus: string };



export class CreateSelection {

    packList: Array<Array<word>> = new Array<Array<word>>();
    currentPack: Array<word> = new Array<word>();
    currentWord: word = {est: 'est_undefined', rus: 'rus_undefined'};
    cancelledRemoveFromPack: boolean = false;

    createPacks(selection: word[]): void{
        do{
            let pack: Array<word> = new Array<word>();
            do{
                console.log('Selection lenght before filter is ' + selection.length);
                let randomPositionSelection: number = Math.random()*(Selection.length - 1) +1;
                let filterElement = selection[randomPositionSelection];
                pack.push(selection[randomPositionSelection]);
                const filteredSelection = selection.filter(item => item !== filterElement);
                console.log('Selection lenght after filter is ' + selection.length);
                if(pack.length >= 10){
                    this.packList.push(pack);
                    pack.length = 0;
                }
            }while(pack.length >= 10);
        }while(Selection.length <= 0);
    }

    updateRandomPack(): void {
        console.log("before getRandomPack() " + this.packList.length)
        let pack = this.packList[Math.random()*(this.packList.length - 1) + 1];
        let filteredPackList = this.packList.filter(item => item !== pack);
        console.log("after getRandomPack() " + this.packList.length)
        this.currentPack = pack;
    }

    getCurrentPack(): Array<word> {
        return this.currentPack;
    }

    updateRandomWord(removeFromPack: boolean): void {
        let word = this.currentPack[Math.random()*(this.packList.length - 1) + 1]
        if(removeFromPack){
            this.cancelledRemoveFromPack = true;
            let filteredPack = this.currentPack.filter(item => item !== word);
        }
        this.currentWord = word;
    }
    
    getCurrentWord(): word{
        this.cancelledRemoveFromPack = false;
        return this.currentWord;
    }

    getStateCancelledRemoveFromPack(): boolean {
        return this.cancelledRemoveFromPack;
    }
}