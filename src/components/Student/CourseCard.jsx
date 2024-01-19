import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
    const defaultCourseImage = "default-course.jpg";
    return (
        <>
            <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <NavLink className="position-relative d-block overflow-hidden" to="">
                    <div style={{ height: "200px", opacity: "0.7" }}>
                        <img className="img-fluid" src={course.image ? course.image : defaultCourseImage} alt="" width="100%" style={{ objectPosition: "0px -125px" }} />
                    </div>
                    <div className=" text-md-start position-absolute top-0 start-0 end-0" style={{ margin: "1px", height: "200px" }}>
                        <NavLink to={`/course/${course._id}`}>
                            <h5 className="m-0 px-3 py-2">{course.name}</h5>
                        </NavLink>
                        <h6 className="text-primary px-3">Time: {course.dateStart} - {course.dateEnd}</h6>
                    </div>
                </NavLink>
            </div>

        </>
    );
}