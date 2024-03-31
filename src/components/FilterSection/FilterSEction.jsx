import React from 'react'
import DachaCard from '../DachaCards/DachaCard';
import DachaMiniCard from '../DachaMiniCard/DachaMiniCard';
import './FilterSection.css'

function FilterSEction({cottageFilter}) {
  const cottage = cottageFilter
  return (
    <div className={cottage.data?.length?"container":"container d-none"}>
      <div className="dacha-filter">
        <h2 className="dacha-top-filter">Раздел Фильтр</h2>

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