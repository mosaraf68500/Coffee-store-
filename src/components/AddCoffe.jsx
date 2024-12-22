
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const quantity=form.quantity. value;
        const supplier=form.supplier.value;
        const Taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffe={name, quantity, supplier, Taste, category, details, photo};

        fetch('http://localhost:5000/coffes',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffe)
        } )
        .then(res=>res.json())
        .then(data =>{
            console.log(data)

            if(data.insertedId)
                {
                Swal.fire({
                    title: 'success',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        // console.log(newCoffe);

    }
  return (
    <div className="p-16 ">
      <div  className="w-2/3 mx-auto bg-[#F4F3F0] rounded-md  p-4 ">
      <h1 className="text-3xl font-bold text-center">Add New Coffe</h1>
      <form onSubmit={handleSubmit}>

      {/* name and quantity */}
        <div className="md:flex gap-6 py-4">
          <div className="md:w-1/2">
          <label className=" text-xl  ">Name:</label> <br />
          <input type="text" name="name" placeholder="Enter Name" className="input input-bordered w-full" />
            
          </div>



          <div className="md:w-1/2">
          <label className=" text-xl py-4">Quantity:</label> <br />
          <input type="text" name="quantity" placeholder="Enter Quantity" className="input input-bordered w-full" />
            
          </div>
        </div>


        {/*Supplier and taste  */}

        <div className="md:flex gap-6 py-4">
          <div className="md:w-1/2">
          <label className=" text-xl  ">Supplier:</label> <br />
          <input type="text" name="supplier" placeholder="Enter Supplier" className="input input-bordered w-full" />
            
          </div>



          <div className="md:w-1/2">
          <label className=" text-xl py-4">Taste:</label> <br />
          <input type="text" name="taste" placeholder="Enter Taste" className="input input-bordered w-full" />
            
          </div>
        </div>


        {/* Category and details */}


        <div className="md:flex gap-6 py-4">
          <div className="md:w-1/2">
          <label className=" text-xl  ">category:</label> <br />
          <input type="text" name="category" placeholder="Enter Category" className="input input-bordered w-full" />
            
          </div>



          <div className="md:w-1/2">
          <label className=" text-xl py-4">Details:</label> <br />
          <input type="text" name="details" placeholder="Enter details" className="input input-bordered w-full" />
            
          </div>
        </div>
        


        <div className="  py-4">
        

          <div className="">
          <label className=" text-xl py-4">Photo:</label> <br />
          <input type="text" name="photo" placeholder="Enter photo" className="input input-bordered w-full" />
            
          </div>
        </div>
       
        <input className="btn btn-block bg-[#D2B48C]" type="submit" value="ADD COFFE" />
      </form>
      </div>
    </div>
  );
};

export default AddCoffe;
