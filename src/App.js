import React, { useCallback, useEffect, useState } from 'react'
import TableGames from '@components/TableGames';
import Header from '@components/Header';
import Form from '@components/Form';
import { deleteGame, getGames } from '@services/ApiService';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData = useCallback(() => {
    setLoading(true)
    getGames()
      .then(data => {
        setLoading(false)
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleDelete = (id) => {
    deleteGame(id)
      .then(() => {
        fetchData()
      })
      .catch(err => console.log('something went wrong', err))
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div id="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <Form fetchData={fetchData} />
          </div>
          <div className="col-xl-8 col-md-8">
             <TableGames onDelete={handleDelete} loading={loading} games={data} fetchData={fetchData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;