import CardMyEquepment from "./CardMyEquepment";

const MyEquepmentCard = ({data}) => {
    console.log(data);
    return (
        <>
<div  className="flex flex-wrap items-center justify-center gap-5 ">
    
{
data.map((item, i) => (
<CardMyEquepment key={i} data={item} />
))
}
</div>

        </>
    );
};

export default MyEquepmentCard;