import { useState } from "react";
const Create = ()=>{

       const [title, setTitle] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(title);

    }

    return(
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e)=> {setTitle(e.target.value)}}></input>
                </div>

                <div>
                    <input type="submit" value="Add movie"></input>
                </div>

            </form>
        </div>
    );
}
export default Create;