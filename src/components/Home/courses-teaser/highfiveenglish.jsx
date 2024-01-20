import React, { useState, useEffect, useContext} from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from '../../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
function HighFiveEnglish() {
    const defaultImage = "./img/course-2.jpg";
    const { userId: studentId } = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [courseList, setCourseList] = useState([]);
    const [currentCourseId, setCurrentCourseId] = useState();
    useEffect(() => {
        async function fetchCourses() {
            try {
                const data = await sendRequest(`http://localhost:5000/api/courses`, 'GET', {
                    'Content-Type': 'application/json'
                });
                setCourseList(data.courses);
            }
            catch (error) {
            }
        }
        fetchCourses();
    }, [sendRequest]);
    async function addCourse(courseId) {
        try {
            const data = await sendRequest(`http://localhost:5000/api/student/registercourse`,
                'POST',
                {
                    'Content-Type': 'application/json'
                },
                JSON.stringify({
                    studentId,
                    courseId
                }));
        }
        catch (error) {
        }
    }
    return (
        <>
            {<ErrorModal error={error} onClear={clearError} />}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id="highfive">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">HighFive English</h1>
                    </div>
                    <ReactOwlCarousel
                        className="testimonial-carousel position-relative"
                        items={courseList.length}
                        center={true}
                        loop={false}
                        margin={20}
                    >

                        {courseList.length > 0 && courseList.map(course => (
                            <div className="testimonial-item text-center">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={course.image ? course.image : defaultImage} style={{ height: "250px", objectFit: "cover" }} />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <button
                                            className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                            style={{ borderRadius: "0px 30px 30px 0px" }}
                                            onClick={() => addCourse(course._id)}
                                        >
                                            Join Now
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">{course.price} ₫</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                    <h5 className="mb-4">{course.name}</h5>
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </>
    )
}

export default HighFiveEnglish