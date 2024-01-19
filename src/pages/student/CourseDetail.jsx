import { useEffect, useState } from "react";

export function CourseDetail(prop) {
    const [course, setCourse] = useState({});
    const [assignments, setAssignments] = useState([]);
    useEffect(() => {
        async function fetchCourse() {
            const response = await fetch(`http://localhost:5000/api/courses/${prop.courseId}`);
            setCourse(response.json());
        }
        async function fetchAssignments() {
            const response = await fetch(`http://localhost:5000/courses/${prop.courseId}/assignments`);
            const data = response.json().then(result => {
                setAssignments(result.assignments);
            })
        }
        fetchCourse();
        fetchAssignments();
    }, []);

    return (
        <div class="container-xxl py-5 category">
            <div class="container">
                <div class="row g-3">
                    <div class="col-lg-8 col-md-6 bg-white">
                        <div class="row g-3">
                            <div class="text-md-start wow fadeInUp " data-wow-delay="0.1s">
                                <h1 class="">{course.name}</h1>
                                <h3>{course.shortDes}</h3>
                                <p>{course.fullDes}</p>
                            </div>
                            <div class="course-container">
                                <div class="course-scroll">
                                    <div class="course-task">
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