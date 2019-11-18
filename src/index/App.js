import React, {Component, Fragment} from 'react';
import Navbar from '../components/navbar/index';
import Table from '../components/table/index';
import sortBy from '../servece/sorting';
import MyChart from '../components/chart/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsCount: null,
      uniqueWords: null,
      wordsCollection: [],
      sorting: false
    };
  }

  changeSorting = async (value) => {
    this.setState({
      sorting:value
    })
  }

  wordsCounter = async (text) => {
    let uniqWords = [];

    const stringCleaner = (text = "") => {
      let cleanText = text
          .replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g,"")
          .replace(/\s{2,}/g," ");
      return cleanText;
    };

    const uniqWordsSearcher = (arr) => {
      arr.forEach(el => !uniqWords.includes(el) && uniqWords.push(el))
      return uniqWords
    };

    const wordsCounter = (uniqWords) => {
      return uniqWords.map(word => {
        let words = textArray.filter(el => el === word)
        return {
          word: word,
          count: words.length
        }
      })
    };

    const textArray = stringCleaner(text)
        .split(" ")
        .filter(word => word !== "");
    const uniqueWords = uniqWordsSearcher(textArray);
    const wordsCount = wordsCounter(uniqueWords);

    this.setState({
      wordsCollection: wordsCount,
      wordsCount: textArray.length,
      uniqueWords: uniqueWords.length
    })
  };

  render() {
    const {
      wordsCollection,
      wordsCount,
      uniqueWords,
      sorting
    } = this.state;

    const onlyUniqueWords = sortBy(wordsCollection.filter(el => el.count > 1), 'count', sorting);

    return (
        <Fragment>
          <Navbar />
          <div className="container">
            <header className="App-header">
              <h1 className={'title'}>{wordsCount ? 'Words counter in text' : 'Please type something...'}</h1>
            </header>

            <input
                type="text"
                className={'col'}
                onChange={value => this.wordsCounter(value.target.value)}
            />
            <p>Words: {wordsCount || 0}</p>
            <p>Unique words: {uniqueWords || 0}</p>
            <hr/>

            <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={() => this.changeSorting(!sorting)}>Sort by count</button>
            <div className="row">

                <div className="col col-md-6 col-sm-12">
                    {(onlyUniqueWords.length > 0) && (<Table wordsCollection={onlyUniqueWords} />)}
                </div>
                <div className="col col-md-6 col-sm-12">
                    <MyChart data={onlyUniqueWords} />
                </div>

            </div>

          </div>
        </Fragment>
    );
  }
}

export default App;
