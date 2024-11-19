import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardBarGraph = () => {
    // Static data
    const semesters = [
        { semester: "Spring", academic_year: "2023" },
        { semester: "Fall", academic_year: "2023" },
        { semester: "Spring", academic_year: "2024" },
    ];

    const courseData = [
        {
            course_name: "Math 101",
            enrollments: [
                { semester: "Spring", academic_year: "2023", total: 50 },
                { semester: "Fall", academic_year: "2023", total: 45 },
                { semester: "Spring", academic_year: "2024", total: 60 },
            ],
        },
        {
            course_name: "Physics 101",
            enrollments: [
                { semester: "Spring", academic_year: "2023", total: 40 },
                { semester: "Fall", academic_year: "2023", total: 50 },
                { semester: "Spring", academic_year: "2024", total: 55 },
            ],
        },
    ];

    const predefinedColors = [
        "rgb(255, 0, 0)",    // Red
        "rgb(0, 255, 0)",    // Green
    ];

    // Process data for the chart
    const chartData = courseData.map((course) => ({
        label: course.course_name,
        data: semesters.map((semester) => {
            const matchingEnrollment = course.enrollments.find(
                (enrollment) =>
                    enrollment.semester === semester.semester &&
                    enrollment.academic_year === semester.academic_year
            );
            return matchingEnrollment ? matchingEnrollment.total : 0;
        }),
    }));

    const data = {
        labels: semesters.map((s) => `${s.semester} ${s.academic_year}`),
        datasets: chartData.map((course, i) => ({
            label: course.label,
            data: course.data,
            backgroundColor: predefinedColors[i % predefinedColors.length],
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Loan Application',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default DashboardBarGraph;
