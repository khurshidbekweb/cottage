import React from 'react'
import { ALL_DATA } from '../../Query/get_all';
import DachaCard from '../DachaCards/DachaCard';
import DachaMiniCard from '../DachaMiniCard/DachaMiniCard';

function FilterSEction() {
    const cottage = ALL_DATA.useCottage()
  return (
    <div className="container d-none">
      <div className="dacha">
        <h2 className="dacha-top">Раздел Фильтр</h2>

        <div className="dacha-cards">
          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaCard key={e.id} cottage={e} btn="Подробное" />;
          })}

          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaMiniCard key={e.id} cottage={e} />;
              })}
        </div>
      </div>
    </div>
  )
}

export default FilterSEction