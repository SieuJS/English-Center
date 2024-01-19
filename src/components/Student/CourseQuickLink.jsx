export default function CourseQuickLink(prop) {
    return (
        <div className="col-lg-4 col-md-6 wow zoomIn bg-white" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
            <div className="row g-3">
                <div className="text-md-start wow fadeInUp " data-wow-delay="0.1s" >
                    <h1 className="">Quick links to courses</h1>
                </div>
                {prop.courses.map(course => {
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                        <NavLink className="position-relative d-block overflow-hidden" to={"/course/" + course._id} >
                            <div className="bg-light text-md-start top-0 start-0 end-0" style={{ margin: "1px", height: "100px" }}>
                                <h5 className="m-0 px-3 py-2">Course: {course.name}</h5>
                                <h6 className="text-primary px-3">Start: {course.dateStart}</h6>
                                <h6 className="text-primary px-3">End: {course.dateEnd}</h6>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>
        </div>
    );
}