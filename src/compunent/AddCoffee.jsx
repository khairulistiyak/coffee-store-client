import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)


        // send data to the server 


        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newCoffee)
        }



        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'coffee added success',
                        icon: 'success',
                        confirmButtonText: 'success'
                    })
                }
            })



    }

    return (
        <div className="bg-[#F4F3F0] p-7">
            <h2 className="text-3xl font-extrabold text-center">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Coffee Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Coffee Name" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Available Quantity</span>
                        </label>
                        <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row Supplier and Taste */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Supplier</span>
                        </label>
                        <input name="supplier" type="text" placeholder="Enter coffee supplier" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Taste</span>
                        </label>
                        <input name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row Category and Details */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Category</span>
                        </label>
                        <input name="category" type="text" placeholder="Enter coffee category" className="input input-bordered md:w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Details</span>
                        </label>
                        <input name="details" type="text" placeholder="Enter coffee details" className="input input-bordered md:w-full" />
                    </div>
                </div>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Photo</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter photo URL" className="input input-bordered md:w-full" />
                    </div>

                </div>
                {/* from row name and quantity */}
                <div className="md:flex gap-5 container mx-auto w-100% mt-5">
                    <button className="btn bg-[#331A15] text-white mt-5 w-full">Add Coffee</button>
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;