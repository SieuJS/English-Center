import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const [assignments, setAssignments] = useState([]);
    useEffect(() => {
        async function fetchCourse() {
            const response = await fetch(`http://localhost:5000/api/courses/${courseId}`);
            setCourse(response.json());
        }
        async function fetchAssignments() {
            const response = await fetch(`http://localhost:5000/courses/${courseId}/assignments`);
            const data = response.json().then(result => {
                setAssignments(result.assignments);
            })
        }
        fetchCourse();
        fetchAssignments();
    }, []);

    return (
        <div className="container-xxl py-5 category">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-8 col-md-6 bg-white">
                        <div className="row g-3">
                            <div className="text-md-start wow fadeInUp " data-wow-delay="0.1s">
                                <h1 className="">{course.name}</h1>
                                <h3>{course.shortDes}</h3>
                                <p>{course.fullDes}</p>
                            </div>
                            <div className="course-container">
                                <div className="course-scroll">
                                    <div className="course-task">
                                        {assignments.map(a => (
                                            <p>a._id</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}