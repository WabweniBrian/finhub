import BookingFilters from "../../components/common/BookingFilters";
import BusList from "../../components/home/search/BusList";

const Search = () => {
  const queryParameters = new URLSearchParams(window.location.search);

  const origin = queryParameters.get("origin");
  const destination = queryParameters.get("destination");
  const date = queryParameters.get("date");

  const searchParams = { origin, destination, date };

  return (
    <div className="pt-16">
      <div
        className="!bg-cover !bg-no-repeat !bg-center py-10"
        style={{ background: "url('/images/Background1.png" }}
      >
        <BookingFilters buttonText={"Modify"} {...searchParams} />
      </div>

      <div className="mt-3">
        <BusList />
      </div>
    </div>
  );
};

export default Search;
