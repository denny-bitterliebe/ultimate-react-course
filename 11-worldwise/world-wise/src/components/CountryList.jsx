import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Add your first city"></Message>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return (
          <CountryItem country={country} key={country.country}></CountryItem>
        );
      })}
    </ul>
  );
}

export default CountryList;
