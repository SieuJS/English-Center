import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { responsiveFontSizes } from "@mui/material";
import  CourseCard  from "../../components/Student/CourseCard";
import CourseQuickLink from "../../components/Student/CourseQuickLink";
import { useHttpClient } from "../../hooks/http-hook";


export default function Courses() {
    const auth = useContext(AuthContext)
    const [courseList, setCourseList] = useState([]);
    const { isLoading, error, sendRequest, clearError } = useHttpClient()
    useEffect(async () => {
        let courses
        try {
            courses = await sendRequest(
                "http://localhost:5000/api/student/courses",
                "POST",
                {
                    "Content-Type": "application/json",
                },
                JSON.stringify({
                    // username: formState.inputs.name.value,
                    studentId : auth.userId
                })
            )
        }catch (err) {
            console.log(err)
        }

        console.log(courses);
        setCourseList(courses)
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