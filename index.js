class PaperRockScissors{

    PaperRockScissors() {
        this.results = {
            win: 0,
            loss: 0,
            tie: 0,
            total: 0
        }
    }

    resultsByChoice = {
        paper: {
            win: 0,
            loss: 0,
            tie: 0,
            total: 0
        },
        rock: {
            win: 0,
            loss: 0,
            tie: 0,
            total: 0
        },
        scissors: {
            win: 0,
            loss: 0,
            tie: 0,
            total: 0
        }
    }

    PaperRockScissors() {

    }

    winPercentage(choice) {
        if ( choice ) {
            return (this.resultsByChoice[choice]['win'] / this.results['total']) * 100;
        }
        return (this.results['win'] / this.results['total']) * 100;
    }

    lossPercentage(choice) {
        if ( choice ) {
            return (this.resultsByChoice[choice]['loss'] / this.results['total']) * 100;
        }
        return (this.results['loss'] / this.results['total']) * 100;
    }

    tiePercentage(choice) {
        if ( choice ) {
            return (this.resultsByChoice[choice]['tie'] / this.resultsByChoice[choice]['total']) * 100;
        }
        return (this.results['tie'] / this.results['total']) * 100;
    }
    

    randomWinner() {
        let choice = Math.floor( math.random() * 3 + 1 );
        if ( choice == 1 ) {
            return 'win';
        } else if ( choice == 2 ) {
            return 'loss';
        } else {
            return 'tie';
        }
    }

    paper() {
        let results = this.randomWinner();
        this.results[ result ] = this.results[ result ] + 1;
        this.results[ total ] = this.results[ 'total' ] + 1;
        this.resultsByChoice['paper'][ result ]++;
        this.resultsByChoice['paper'][ 'total' ]++;
        return results;
    }


    rock() {
        let results = this.randomWinner();
        this.results[ result ] = this.results[ result ] + 1;
        this.results[ total ] = this.results[ 'total' ] + 1;
        this.resultsByChoice['rock'][ result ]++;
        this.resultsByChoice['rock'][ 'total' ]++;
        return results;
    }


    scissors() {
        let results = this.randomWinner();
        this.results[ result ] = this.results[ result ] + 1;
        this.results[ total ] = this.results[ 'total' ] + 1;
        this.resultsByChoice['scissors'][ result ]++;
        this.resultsByChoice['scissors'][ 'total' ]++;
        return results;
    }
}

module.exports = PaperRockScissors;