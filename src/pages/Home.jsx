import Categori from "../component/Categori";
import prodouct from '/public/prodouct.json';

const Home = () => {

  fetch('http://localhost:8000/myprodouct',{
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(prodouct)
  })
  .then(res => res.json())
  .then(data => {console.log('data to sarver',data)})
  .catch(error => {
    console.log(error);
  })

    return (
        <>
        <div>{/*Parent container*/}

{/*slider*/}


<div className="grid grid-cols-2 justify-start">{/*cardsection and card select option*/}

<div className="col-span-2 md:col-span-1">
    <Categori/>
</div>

<div className="col-span-2 md:col-span-1">
    <p>Card container</p>
</div>

</div>
        </div>
        </>
    );
};

export default Home;