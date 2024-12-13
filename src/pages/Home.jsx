import Slider from "../component/Slider";

// import prodouct from '/public/prodouct.json';
const Home = () => {

  // fetch('http://localhost:8000/myprodouct',{
  //   method: 'POST',
  //   headers: {
  //     'content-type':'application/json'
  //   },
  //   body: JSON.stringify(prodouct)
  // })
  // .then(res => res.json())
  // .then(data => {console.log('data to sarver',data)})
  // .catch(error => {
  //   console.log(error);
  // })
  
    return (
        <>
        <div>{/*Parent container*/}

{/*slider*/}
<Slider/>


        </div>
        </>
    );
};

export default Home;