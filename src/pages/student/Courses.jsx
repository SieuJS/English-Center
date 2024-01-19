import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { responsiveFontSizes } from "@mui/material";
import CourseCard from "../../components/Student/CourseCard";
import CourseQuickLink from "../../components/Student/CourseQuickLink";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../components/shared/UIElements/LoadingSpinner";
import ErrorModal from "../../components/shared/UIElements/ErrorModal";
export default function Courses() {
    const { userId: studentId } = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [courseList, setCourseList] = useState([]);
    //console.log("student id in course", studentId);
    useEffect(() => {
        async function fetchCode() {
            try {
                const data = await sendRequest(`http://localhost:5000/api/student/courses`, 'POST', {
                    'Content-Type': 'application/json'
                }, JSON.stringify({ studentId }));
                setCourseList(data.courses);
            }
            catch (error) {
            }
        }
        fetchCode();
    }, [sendRequest]);

    return (
        <>
            {isLoading && (<LoadingSpinner asOverlay />)}
            {<ErrorModal error={error} onClear={clearError} />}
            <div className="container-xxl py-5 category">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-8 col-md-6 bg-white" >
                            <div className="row g-3">
                                <div className="text-md-start wow fadeInUp " data-wow-delay="0.1s" >
                                    <h1 className="">My Courses</h1>
                                </div>
                                {courseList?.length > 0 && courseList?.map(course => (
                                    <CourseCard key={course._id} course={course} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 bg-white" >
                            <CourseQuickLink courses={courseList} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}