import CardMyEquepment from "./CardMyEquepment";

const MyEquepmentCard = ({data}) => {
    return (
        <>
<div  className="md:flex flex-wrap items-center justify-center gap-5 ">
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Item Name</th>
        <th>categoryName</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}


{
data.map((item, i) => (
<CardMyEquepment key={i} data={item} />
))
}
      </tbody>
  </table>
</div>
</div>

        </>
    );
};

export default MyEquepmentCard;