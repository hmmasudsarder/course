const Card = ({courseDetails, remaining, timetotal}) => {
    // console.log(courseDetails[1])
    return (
        <div>
            <h3 className="title-card-two">Credit Hour Remaining {remaining} hr</h3>
            <h2 className="title-cou">Course Name</h2>
            {
                courseDetails.map(course => 

                <h3>{course.name}</h3> )
            }
            <h2 className="title-cou">Total Credit Hour : {timetotal}</h2>
        </div>
    );
};

export default Card;