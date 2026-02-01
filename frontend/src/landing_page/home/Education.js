import React from 'react';
function Education() {
    return ( <div className='container mt-5'>
        <div className='row'>
             <div className='col-6'>
               <img src='/media/education.svg' style={{width:"70%"}}></img>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and Open market education</h1>
                <p>Varsity, the largest online stock market education in the world book int the world covering everythin from basics to advance trading.</p>
                <a href='' style={{textDecoration:"none"}}>versity<i class="fa-solid fa-arrow-right-long"></i></a>
                <h1 className='mb-3 mt-3'>Versity</h1>
                <p className='mt-5'>Trading Q&A , the most active trading and investment community in India for all your market queries.</p>
                <a href='' style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
           
        </div>
    </div> );
}

export default Education;