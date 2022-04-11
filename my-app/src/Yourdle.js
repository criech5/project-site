import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import './yourdle.css';
import text from './five_letter_words.js';
import {Row, Col, Container} from 'reactstrap';

function Square(props) {
    let className = 'square-' + props.color;
    let delayAmt = props.index * 0.5;
    return (
        <div className={className}
             id={'id' + props.index}>
            {props.value}
        </div>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        let cellColor = 'white'
        return (
            <Square
                value={this.props.word[i]}
                color={this.props.colorScheme[i]}
                index={i}/>
        );
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                </div>
                <div className="board-row">
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                </div>
                <div className="board-row">
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                </div>
            </div>
        );
    }
}

function InputForm(props) {
    const [word, setWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(word);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Enter your word: </p>
                <input type="text"
                       value={word}
                       onChange={(e) => setWord(e.target.value)}/>
            </label>
        </form>
    )
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            colorScheme: Array(30).fill('white'),
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(solution) {
        this.setState({
            colorScheme: Array(30).fill('white'),
        });
        console.log(this.state.colorScheme);
        let word = '';
        let finalWord = '';
        let alphabet = this.defineAlphabet();
        let corpus = this.loadCorpus();
        let win = false;
        let count = 0;
        while (!win) {
            count++;
            let seed = (Math.random() * (corpus.length) ) << 0; // this isn't mine; 1527803 on SO
            let results = this.guessWord(corpus[seed], solution, alphabet);
            word = results[0];
            let wordColor = this.state.colorScheme;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === '*')
                    wordColor[(5 * (count-1)) + i] = 'yellow';
                else if (word[i] === '-')
                    wordColor[(5 * (count-1)) + i] = 'grey';
                else
                    wordColor[(5 * (count-1)) + i] = 'green';
            }
            this.setState({
                colorScheme: wordColor,
            });
            finalWord = finalWord.concat(corpus[seed]);
            alphabet = results[1];
            if (word === solution) {
                win = true;
            }
            corpus = this.narrow(word, corpus, alphabet);
        }
        console.log(count);
        this.setState({
            word: finalWord,
        });
    }

    loadCorpus() {
        return text.split('\n');
    }

    defineAlphabet() {
        let alphabetStr = 'abcdefghijklmnopqrstuvwxyz-*';
        let alphabet = {};
        for (let i = 0; i < alphabetStr.length; i++) {
            alphabet[alphabetStr[i]] = {
                'absent': false,
                'present': true,
                'forbidden': []
            };
        }
        // this may not be the best way to structure this but it does work lol
        alphabet.present = [];
        return alphabet;
    }

    narrow(word, corpus, alphabet) {
        let newList = [];
        let dashAsterisk = ['-', '*'];
        for (let i = 0; i < corpus.length; i++) {
            let add = true;
            for (let j = 0; j < 5; j++) {
                if (alphabet[corpus[i][j]].absent === true) {
                    add = false;
                    break;
                }
                else if (alphabet[corpus[i][j]].forbidden.includes(j)) {
                    add = false;
                    break;
                }
                else if ((!dashAsterisk.includes(word[j])) && (word[j] !== corpus[i][j])) {
                    add = false;
                    break;
                }
            }
            for (let j = 0; j < alphabet.present.length; j++) {
                if (!corpus[i].includes(alphabet.present[j])) {
                    add = false;
                    break;
                }
            }
            if (add === true) {
                newList.push(corpus[i]);
            }
        }
        return newList;
    }

    letterCount(str, letter) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                count++;
            }
        }
        return count;
    }

    guessWord(guess, solution, alphabet) {
        let word = ['-', '-', '-', '-', '-'];
        for (let i = 0; i < 5; i++) {
            if (solution.includes(guess[i])) {
                word[i] = '*';
                alphabet[guess[i]].present = true;
                alphabet.present.push(guess[i]);
            }
        }
        for (let i = 0; i < 5; i++) {
            if (guess[i] === solution[i]) {
                word[i] = guess[i];
                if (!solution.split('').splice(i).includes(guess[i])) {
                    alphabet[guess[i]].present = false;
                }
                if (alphabet.present.includes(guess[i])) {
                    let index = alphabet.present.indexOf(guess[i]);
                    alphabet.present.splice(index, 1);
                }
            }
            if (!solution.includes(guess[i])) {
                alphabet[guess[i]].absent = true;
            }
        }
        for (let i = 0; i < 5; i++) {
            if (word[i] === '*') {
                alphabet[guess[i]].forbidden.push(i);
                let outsideLetters = guess.split('');
                outsideLetters.splice(i, 1);
                outsideLetters = outsideLetters.join('');
                if (this.letterCount(outsideLetters, guess[i]) >=
                    this.letterCount(solution, guess[i])) {
                    word[i] = '-';
                }
            }
        }
        return [word.join(''), alphabet];
    }

    render() {
        return (
            <div className="game">
                <Col>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <h1>Yourdle</h1>
                    <h5>You provide the word, we do the guessing.</h5>
                    <div className="game-board">
                        <Board word={this.state.word}
                               colorScheme={this.state.colorScheme}/>
                    </div>
                    <div className="game-info">
                        <div>
                            <br/>
                            <InputForm onSubmit={this.onSubmit}/>
                        </div>
                    </div>
                    </div>
                </Col>
            </div>
        );
    }
}

class Yourdle extends Component {
    render() {
        return ( <Game />);
    }
}

// ========================================

export default Yourdle;