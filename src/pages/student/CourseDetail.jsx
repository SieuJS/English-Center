import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../components/shared/UIElements/LoadingSpinner";
import ErrorModal from "../../components/shared/UIElements/ErrorModal";
import { AuthContext } from "../../shared/context/auth-context";
import CourseQuickLink from "../../components/Student/CourseQuickLink";


export default function CourseDetail() {
    const defaultCourseImage = "../img/course-2.jpg";
    const { courseId } = useParams();
    const { userId: studentId } = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [course, setCourse] = useState({});
    const [courses, setCourses] = useState([]);
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        async function fetchCourse() {
            try {
                const data = await sendRequest(`http://localhost:5000/api/courses/${courseId}`, 'GET', {
                    'Content-Type': 'application/json'
                });
                setCourse(data);
                console.log("courseDetail", data);
            }
            catch (error) {
            }
        }

        async function fetchAssignments() {
            try {
                const data = await sendRequest(`http://localhost:5000/api/courses/${courseId}/assignments`, 'GET', {
                    'Content-Type': 'application/json'
                });
                setAssignments(data.assignments);
            }
            catch (error) {
            }
        }
        async function fetchCourses() {
            try {
                const data = await sendRequest(`http://localhost:5000/api/student/courses`, 'POST', {
                    'Content-Type': 'application/json'
                }, JSON.stringify({ studentId }));
                setCourses(data.courses);
                console.log("courses detail", courses);
            }
            catch (error) {
            }
        }
        fetchCourse();
        fetchAssignments()
        fetchCourses();
    }, [sendRequest, courseId]);

    return (
        <>
            <div className="container py-5">
                <div style={{ height: "200px" }} className="my-4">
                    <img style={{ overflow: "hidden" }} src={course.image ? course.image : defaultCourseImage} />
                </div>
                <div className="row border-top">
                    <div className="col-lg-8 col-md-6 bg-white">
                        <div className="row g-3">
                            <div className="text-md-start wow fadeInUp " data-wow-delay="0.1s">
                                <h1 className="">{course.name}</h1>
                                <h3>{course.shortDes}</h3>
                                <p>{course.fullDes}</p>
                            </div>

                            <div className="course-container">
                                <div className="course-scroll">
                                    <h5 className="border-bottom my-2 py-2">Assignment of this course</h5>
                                    <div className="course-task p-4 border-bottom">
                                        {assignments.map(a => (
                                            <div className="gap-2 m-2" key={a._id}>
                                                <NavLink>
                                                    <h6 className="py-2" >Name: {a.name}</h6>
                                                </NavLink>
                                                <p className="px-4">Deadline: {a.deadline}</p>
                                                <p className="px-4">Link: <a href={a.link}>{a.link}</a></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 bg-white" >
                        <CourseQuickLink courses={courses} />
                    </div>
                </div>
            </div>
        </>
    );
}