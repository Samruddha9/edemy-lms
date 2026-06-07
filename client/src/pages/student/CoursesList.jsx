import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SearchBar';

const CoursesList = () => {

    const { input } = useParams()
    const { allCourses, navigate } = useContext(AppContext)
    const [filteredCourse, setFilteredCourse] = useState([])

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice()

            if (input) {
                setFilteredCourse(
                    tempCourses.filter(
                        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                    )
                )
            } else {
                setFilteredCourse(tempCourses)
            }
        } else {
            setFilteredCourse([])
        }
    }, [allCourses, input])

    return (
        <>
            <div className="relative md:px-36 px-8 pt-20 text-left min-h-[70vh]">
                <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                    <div>
                        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
                        <p className='text-gray-500'>
                            <span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Course List</span>
                        </p>
                    </div>
                    <SearchBar data={input} />
                </div>
                
                {input && (
                    <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600 bg-gray-50 rounded'>
                        <p>{input}</p>
                        <img onClick={() => navigate('/course-list')} className='cursor-pointer w-3 h-3' src={assets.cross_icon} alt="Clear search" />
                    </div>
                )}

                {filteredCourse.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-4 px-2 md:p-0">
                        {filteredCourse.map((course) => (
                            <CourseCard key={course._id || course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 text-gray-500 border border-dashed border-gray-200 rounded-lg bg-gray-50 my-16">
                        <p className="text-lg font-medium">No courses found matching your criteria.</p>
                        <p className="text-sm mt-1">Make sure your backend server is active and your context is populated.</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default CoursesList;