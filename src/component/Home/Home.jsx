import { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [courses, setCourse] = useState([]);
    const [courseDetails, setDetails] = useState([]);
    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[]);
    const handelSelect = (courses) => {
        // console.log(courses)
        setDetails([...courseDetails, courses]);
        
    }
    return (
        <div>
           <div className="container">
                <div className="page-container">
                    <div className="card-container">
                        {
                            courses.map((course) => <div key={course.id} className="card">
                            <div className="card-img">
                              <img className="photo" src={course.image} alt="" />
                            </div>
                            <h3>{course.name}</h3>
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className="info">
                              <div className="icons">
                              <i className="fa-solid fa-dollar-sign"></i>
                              <h3>  Price: {course.price}</h3>
                              </div>
                              <div className="icons">
                              <i className="fa-solid fa-book-open"></i>
                              <h4>  Credit: {course.credit}</h4>
                              </div>
                            </div>
                            <button onClick={()=> handelSelect(course)} className="card-btn">
                              Select
                            </button>
                          </div>)
                        }
                    </div>
                    <div className="card">
                        <Card courseDetails={courseDetails}></Card>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;








    
          