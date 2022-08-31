import React, { useState } from "react";

const PokemonPage = (props) => {
  const { cpage, page, previousPage, nextPage, backPage, returnPage } = props;

  const PageNav = () => {
    if (backPage === true) {
      return (
        <div className="pagination">
          <div>
            <button onClick={returnPage}>{"<"}</button>
          </div>
        </div>
      )
    } if (backPage === false){
      return (
        <div className="pagination">
          <div>
            <button onClick={previousPage}>{"<"}</button>
          </div>
          <div>
            {cpage} de {page}
          </div>
          <div>
            <button onClick={nextPage}>{">"}</button>
          </div>
        </div>
      );
    }
  };

  return <PageNav />;
};

export default PokemonPage;
