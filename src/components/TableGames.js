import React from 'react';
import { deleteGame } from '../services/ApiService';
import Spinner from './Spinner';
import './../assets/styles/TableGames.css'

const TableGames = ({ games, fetchData, loading }) => {

  const handleDelete = (id) => {
    deleteGame(id)
      .then(() => {
        console.log('entro then')
        fetchData()
      })
      .catch(err => console.log('something went wrong', err))
  }

  return (
    <div className="pb-4">
      <h4 className="text-light mb-3">Games table</h4>
      <div className="table-content">
        {!loading
          ?
          <table className="table table-sm table-dark ">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Home team</th>
                <th scope="col">Away team</th>
                <th scope="col">Result</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{++i}</th>
                    <td>{game.homeName}</td>
                    <td>{game.awayName}</td>
                    <td>{game.homeScore} - {game.awayScore}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(game.id)}
                        className="btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              }
              )}
            </tbody>
          </table>
          :
          <Spinner />
        }
      </div>
    </div>
  );
};

export default TableGames;