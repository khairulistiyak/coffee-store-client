import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, details, photo, quantity, supplier, taste } = coffee

    const handleUpdate = _id => {

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
                        }
                    })


                console.log("delete")
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-7">
            <h2 className="text-3xl font-extrabold text-center">Update a Coffee</h2>
            <form onSubmit={handleUpdate}>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Update Name</span>
                        </label>
                        <input name="name" defaultValue={name} type="text" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Available Quantity</span>
                        </label>
                        <input name="quantity" defaultValue={quantity} type="text" placeholder="Quantity" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row Supplier and Taste */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Supplier</span>
                        </label>
                        <input name="supplier" defaultValue={supplier} type="text" placeholder="Enter coffee supplier" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Taste</span>
                        </label>
                        <input defaultValue={taste} name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row Category and Details */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Category</span>
                        </label>
                        <input name="category" defaultValue={supplier} type="text" placeholder="Enter coffee category" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Details</span>
                        </label>
                        <input name="details" defaultValue={details} type="text" placeholder="Enter coffee details" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Photo</span>
                        </label>
                        <input name="photo" defaultValue={photo} type="text" placeholder="Enter photo URL" className="input input-bordered md:w-full" />
                    </div>

                </div>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <button className="btn bg-[#331A15] text-white mt-5 w-full">Update Coffee</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateCoffee;