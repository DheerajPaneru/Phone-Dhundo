import React, { useState } from 'react'
import Data from './data';
import Data1 from './data1';
import'./search.css';
const Search = () => {
    const[filter,setFilter]=useState('');

    const searchText=(event)=>{
        setFilter(event.target.value.toString().toLowerCase());


    }
    let dataSearch1=Data.cardData.filter(item=>{
return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter))
});
let dataSearch2=Data1.cardData1.filter(item=>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter))
    });   
    
    return (
        <>
            <section className='py-4 container'>
                <div className="row justify-content-center">

<div className='col-12 mb-5'>

    <div className="mb-3 col-4 mx-auto text-center">
<label className='  form-lable h2 mr-4 head' >Search</label>
<input type="text" className='from-control' value={filter}
onChange={searchText.bind(this)}/>


    </div>
</div>
                    {dataSearch1.map((item, index) => {
                        return (
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className='card p-0 overflow-hidden h-100  box '>

                            
                            
                            <div className="card-body">
                                <h5 className='card-title'>{item.name}</h5>
                                
                                <img src={item.image} style={{width:'100px',height:"100px"}} alt=""></img>
                                <p className='card-text'>{item.price}</p>
                                <h4>{item.review}</h4>

                            </div>
                        </div>

                    </div>



    
)
                    })}
                    

                    {dataSearch2.map((item, index) => {
                        return (
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className='card p-0 overflow-hidden h-100 box'>

                            
                            
                            <div className="card-body">
                                <h5 className='card-title'>{item.name}</h5>
                        
                                
                                <img src={item.image} style={{width:'100px',height:"100px"}} alt=""></img>
                                <p className='card-text'>{item.price}</p>

                            </div>
                        </div>

                    </div>



    
)
                    })}




                    
                    </div>


            </section>
        </>
    );
}

export default Search;