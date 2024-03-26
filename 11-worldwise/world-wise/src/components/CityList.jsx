import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Add your first city"></Message>;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id}></CityItem>;
      })}
    </ul>
  );
}

export default CityList;
