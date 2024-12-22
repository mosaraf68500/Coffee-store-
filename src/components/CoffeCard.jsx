import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
  // Correct destructuring for an object
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffes/${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee  deleted.",
                icon: "success",
              });

              const remaing=coffees.filter(cof=>cof._id!==_id)
              setCoffees(remaing);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="">
          <img src={photo} alt={`${name}`} />
        </figure>
        <div className="flex justify-between w-full p-4 ">
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p>Category: {category}</p>
            <p>Supplier: {supplier}</p>

            <p>Details: {details}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className=" card-action justify-end">
            <div className="btn-group btn-group-vertical space-y-4  join join-vertical flex">
              <button className="btn btn-active btn-accent font-semibold ">
                VIEW
              </button>
              <Link to={`updateCoffe/${_id}`}>
              <button className="btn btn-accent font-semibold">EDIT</button>

              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-accent font-semibold "
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
