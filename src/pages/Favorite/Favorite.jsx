import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Favorite.css";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { cottageUtils } from "../../utils/cottage.utils";
import { QUERY_KEYS } from "../../Query/query-keys";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";


import { Helmet } from "react-helmet-async";


const Favorite = () => {
  const cottage = ALL_DATA.useCottage();
  const { isLoading } = useQuery({
    queryKey: [QUERY_KEYS.cottages],
    queryFn: cottageUtils.getCottageTop,
    enabled: false,
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Favorite</title>
        <meta name="description" content="Favorite page" />
        <link rel="canonical" href="/favorite" />
      </Helmet>

      <Navbar />
      <div className="container">
        <BreacdCrumbs/>
        <div className="favorite">
          {cottage.data && cottage.data.length ? (
            <>
              <h2 className="favorite-header">Избранные</h2>

              <div className="favorite-cards">
                {cottage.data?.length &&
                  cottage.data
                    .filter((e) => e.isLiked === true)
                    .map((e) => {
                      return (
                        <DachaCard key={e.id} cottage={e} btn="Подробное" />
                      );
                    })}
                {cottage.data?.length &&
                  cottage.data
                    .filter((e) => e.isLiked === true)
                    .map((e) => {
                      return <DachaMiniCard key={e.id} cottage={e} />;
                    })}
              </div>
            </>
          ) : (
            <>
              <h2 className="favorite-header">Избранные</h2>
              <p className="text-danger">You have this page home for empte</p>
            </>
          )}
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default Favorite;
