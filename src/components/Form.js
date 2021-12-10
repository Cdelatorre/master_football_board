import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { saveGame } from '../services/ApiService';
import './../assets/styles/Form.css'

const Form = ({ fetchData }) => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState(false)

  const handleFocus = () => {
    setErrors(false)
  }

  const onSubmit = data => {
    const newGame = {
      ...data,
      homeScore: Number(data.homeScore),
      awayScore: Number(data.awayScore),
    }

    saveGame(newGame)
      .then(() => {
        fetchData();
        reset();
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  };

  return (
    <div className="Form">
      <h4 className="text-light mb-3">Insert game results</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="football-form mb-5">
        <div className={`form-group p-4 ${errors ? 'invalid-form' : ''}`}>
          <div className="row">
            <div className="col-8">
              <label className="text-light">Home team</label>
              <input
                {...register("homeName")}
                autoComplete="off"
                onFocus={handleFocus}
                type="text"
                className="form-control"
                id="teamHome"
                placeholder="Team name"
              />
            </div>
            <div className="col-4">
              <label className="text-light">Score</label>
              <input
                {...register("homeScore")}
                autoComplete="off"
                onFocus={handleFocus}
                type="number"
                min="0"
                className="form-control"
                id="teamHomeScore"
                placeholder="0"
              />
            </div>
            <div className="col-12">
              {errors.homeName && <small id="homeName-error" className="text-danger text-small">{errors.homeName.message}</small>}
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-8">
              <label className="text-light">Away team</label>
              <input
                {...register("awayName")}
                autoComplete="off"
                onFocus={handleFocus}
                type="text"
                className="form-control"
                id="teamAway"
                placeholder="Team name"
              />
            </div>
            <div className="col-4">
              <label className="text-light">Score</label>
              <input
                {...register("awayScore")}
                autoComplete="off"
                onFocus={handleFocus}
                type="number"
                min="0"
                className="form-control"
                id="teamAwayScore"
                placeholder="0"
              />
            </div>
            <div className="col-12">
              {errors.awayName && <small id="awayName-error" className="text-danger text-small">{errors.awayName.message}</small>}
            </div>
          </div>

          <div className="mt-4">
            {errors && <small className="text-danger">Check the form!</small>}
            <button type="submit" className="btn btn-success px-4 mt-2 w-100">Save Game!</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;