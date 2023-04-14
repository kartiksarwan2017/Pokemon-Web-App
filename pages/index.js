import Layout from "../components/layout";

export default function Home({pokeData}) {
  console.log(pokeData);
  return (
    <Layout title={"WebPokedex"}> 
       
    </Layout>
  )
}


export async function getStaticProps(){
  
  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");

    const data = await res.json();

    return {
      props: {
        pokeData: data
      }
    }

  }catch(error){
    console.log(error);
  }

}