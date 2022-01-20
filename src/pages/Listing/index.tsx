import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import { MovieDTO } from "types/movie";
import { PageDTO } from "utils/page";
import { BASE_URL } from "utils/requests";

export function Listing() {

  const [pageNumber, setPageNumber] = useState(0);
  
  const [page, setPage] = useState<PageDTO<MovieDTO>>({
    content: [],
    last: true,
    totalElements: 0,
    totalPages: 0,
    size: 12,
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(({ data }: AxiosResponse<PageDTO<MovieDTO>>) => {
      setPageNumber(data.number);
      setPage(data);
    })
  }, [pageNumber]);


  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  }

  return (
    <>
      <Pagination page={page} change={handlePageChange}/>
      <div className="container">
        <div className="row">
          {page.content.map(movie => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}