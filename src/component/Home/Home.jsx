import { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [courses, setCourse] = useState([]);
    const [courseDetails, setDetails] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [timeTotal, setCountTime] = useState(0);
    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[]);
    const handelSelect = (courses) => {
        const isExits = courseDetails.find(item => item.id === courses.id);
        let count = courses.credit;
        if(isExits){
            return alert('This Course is already purchase')
        }else{
            courseDetails.forEach(item => {
                count = count + item.credit;
            });
            const totalRemaining = 20 - count;
            if(count > 20){
                return alert("oop's ")
            }else{
                setRemaining(totalRemaining);
                setCountTime(count);
                setDetails([...courseDetails, courses]);
            }
        }
        
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
                              <h3>  Price:{course.price}</h3>
                              </div>
                              <div className="icons">
                              <i className="fa-solid fa-book-open"></i>
                              <h4>  Credit:{course.credit}hr</h4>
                              </div>
                            </div>
                            <button onClick={()=> handelSelect(course) } className="card-btn">
                              Select
                            </button>
                          </div>)
                        }
                    </div>
                    <div className="card card-two">
                        <Card courseDetails={courseDetails} remaining={remaining} timetotal={timeTotal}></Card>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;








    
          