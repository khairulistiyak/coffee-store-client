import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {


    console.log(coffee)
    const { _id, name, photo, quantity, supplier, } = coffee

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })


                console.log("delete")
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl px-6 py-6 flex items-center" >
                <figure><img src={photo} className="h-48" alt="Movie" /></figure>
                <div className="flex justify-between w-full ">
                    <div>
                        <h2 className="card-title"> {name}</h2>
                        <p><strong>Supplier: </strong>{supplier}</p>
                        <p><strong>Quantity: </strong>{quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical">
                            <button className="btn btn-active">View</button>
                            <Link to={`updateCoffee/${_id}`} >   <button className="btn">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;