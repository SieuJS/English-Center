import { NavLink } from "react-router-dom";

export default function CourseCard({course}) {
    const defaultCourseImage = "default-course.jpg";
    return (
        <>
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <NavLink class="position-relative d-block overflow-hidden" to="">
                    <div style={{height: "200px", opacity: "0.7"}}>
                        <img class="img-fluid" src={course.image ? course.image: defaultCourseImage} alt="" width="100%" style={{objectPosition: "0px -125px"}} />
                    </div>
                    <div class=" text-md-start position-absolute top-0 start-0 end-0" style={{margin: "1px", height: "200px"}}>
                        <h5 class="m-0 px-3 py-2">{course.name}</h5>
                        <h6 class="text-primary px-3">Time: {course.dateStart} - {course.dateEnd}</h6>
                    </div>
                </NavLink>
            </div>

        </>
    );
}