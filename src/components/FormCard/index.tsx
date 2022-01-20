import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useFormik } from "formik";
import * as yup from "yup";

import { BASE_URL } from 'utils/requests';
import { MovieDTO, ScoreEntradaDTO } from 'types/movie';

import './styles.css';

interface Props {
  movieId: string
}

export function FormCard({ movieId }: Props) {

  const navigate = useNavigate();

  const [movie, setMovie] = useState<MovieDTO>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then(({ data }: AxiosResponse<MovieDTO>) => {
      setMovie(data);
    });
  }, [movieId]);

  const formik = useFormik({
    initialValues: {
      email: "",
      score: 1,
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      score: yup
        .number()
    }),
    onSubmit: ({ email, score }) => {
      axios.put(`${BASE_URL}/score`, { movieId: movie?.id, email, score } as ScoreEntradaDTO).then(() => {
        navigate('/');
      });
    },
  });

  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form"
          onSubmit={formik.handleSubmit} >
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: '#FF3300', fontSize: 12, paddingTop: 3 }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control"
              id="score"
              name="score"
              onChange={formik.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit"
              className="btn btn-primary dsmovie-btn"
              disabled={!formik.isValid}>
              Salvar
            </button>
          </div>
        </form>

        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div >
    </div >
  );
}