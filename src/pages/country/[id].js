import Layout from "../../components/Layout/Layout";
import styles from "./country.module.css";

const Country = ({country}) => {
    console.log(country);
    return (
        <Layout title={country.name}>
            <div>
                <div className={styles.overview}>
                    <img src={country.flag} alt={country.name}></img>

                    <h1>{country.name}</h1>
                    <div>{country.region}</div>

                    <div>
                        <div className={styles.overview_population}></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Country;

export const getServerSideProps = async ({params}) => {

    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`)

    return {
        props: {
            country,
        },
    }
}