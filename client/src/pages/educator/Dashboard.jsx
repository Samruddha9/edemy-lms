import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/student/Loading';

const Dashboard = () => {

  const { backendUrl, isEducator, currency, getToken } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    try {
      const token = await getToken()

      const { data } = await axios.get(backendUrl + '/api/educator/dashboard',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        setDashboardData(data.dashboardData)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchDashboardData()
    }
  }, [isEducator])

  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0 w-full'>
      <div className='space-y-8 w-full'>
        
        {/* --- STATS CARDS --- */}
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white'>
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.enrolledStudentsData.length}</p>
              <p className='text-base text-gray-500'>Total Enrolments</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white'>
            <img src={assets.appointments_icon} alt="patients_icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.totalCourses}</p>
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white'>
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{currency}{Math.floor(dashboardData.totalEarnings)}</p>
              <p className='text-base text-gray-500'>Total Earnings</p>
            </div>
          </div>
        </div>

        {/* --- LATEST ENROLLMENTS TABLE --- */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrolments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-fixed md:table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-500/20">
                    <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                    <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                      <img
                        src={item.student.imageUrl}
                        alt="Profile"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="truncate">{item.student.name}</span>
                    </td>
                    <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- NEW SECTION: COURSES LIST --- */}
        <div className="max-w-4xl w-full">
          <h2 className="pb-4 text-lg font-medium">Your Courses</h2>
          
          {/* Check if backend returns an array of educator's courses */}
          {dashboardData.courses && dashboardData.courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {dashboardData.courses.map((course, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
                  <img 
                    src={course.courseThumbnail || assets.placeholder_thumb} 
                    alt={course.courseTitle} 
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-medium text-gray-800 truncate">{course.courseTitle}</h3>
                  <p className="text-sm text-gray-500 mt-1">Price: {currency}{course.coursePrice}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-gray-300 p-6 text-center text-gray-500 rounded-md bg-gray-50">
              No courses created yet. Go to the "Add Course" tab to get started.
            </div>
          )}
        </div>

      </div>
    </div>
  ) : <Loading />
}

export default Dashboard;