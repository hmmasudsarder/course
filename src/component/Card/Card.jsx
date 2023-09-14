const Card = ({courseDetails}) => {
    console.log(courseDetails[1])
    return (
        <div>
            {
                courseDetails.map((course) => <li>{course.name}</li>)
            }
        </div>
    );
};

export default Card;