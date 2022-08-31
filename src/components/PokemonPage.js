import React, { useState } from "react";

const PokemonPage = (props) => {
  const { cpage, page, previousPage, nextPage } = props;
  
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
};

export default PokemonPage;
