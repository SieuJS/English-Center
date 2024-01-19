import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { responsiveFontSizes } from "@mui/material";
import  CourseCard  from "../../components/Student/CourseCard";
import CourseQuickLink from "../../components/Student/CourseQuickLink";

export default function Courses() {
    const { userId: studentId } = useContext(AuthContext);
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            const courses = fetch("http://localhost:5000/api/student/courses", {
                method: 'POST',
                body: JSON.stringify({ studentId })
            })
                .then(response => {
                    const list = response.json().courses;
                    setCourseList(list);
                    console.log(list)
                })
        }
        fetchCourses();
    }, []);

    return (
        <div className="container-xxl py-5 category">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-8 col-md-6 bg-white" >
                        <div className="row g-3">
                            <div className="text-md-start wow fadeInUp " data-wow-delay="0.1s" >
                                <h1 className="">My Courses</h1>
                            </div>
                            {courseList.map(course => (
                                <CourseCard course={course} />
                            ))}
                        </div>
                        <CourseQuickLink courses={courseList} />
                    </div>
                </div>
            </div>
        </div>
    );
}