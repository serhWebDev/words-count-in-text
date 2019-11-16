import React from 'react';

const Table = ({wordsCollection = []}) => (
    <section>
        <div className="container">
            <table className="table table-borderless table-sm">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Word</th>
                    <th scope="col">Count</th>
                </tr>
                </thead>
                <tbody>
                { wordsCollection.length > 0 && wordsCollection.map((word, id) => (
                    <tr
                        key={id}>
                        <th scope="row">{id+1}</th>
                        <td><p>{word.word}</p></td>
                        <td>{word.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </section>
);

export default Table;