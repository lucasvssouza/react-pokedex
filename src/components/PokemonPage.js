import React from "react";

const PokemonPage = (props) => {
  const {
    cpage,
    page,
    previousPage,
    nextPage,
    backPage,
    returnPage,
    loading,
    search,
  } = props;

  const PageNav = () => {
    if (backPage === true) {
      return (
        <div className="pagination">
          <div>
            <button onClick={returnPage}>{"<"}</button>
          </div>
        </div>
      );
    }
    if (backPage === false) {
      if (loading === true || search === true) {
        return (
          <div className="pagination">
            <button>{"<"}</button>
            {cpage} de {page}
            <button>{">"}</button>
          </div>
        );
      } else {
        return (
          <div className="pagination">
            <button onClick={previousPage}>{"<"}</button>
            {cpage} de {page}
            <button onClick={nextPage}>{">"}</button>
          </div>
        );
      }
    }
  };

  return <PageNav />;
};

export default PokemonPage;
