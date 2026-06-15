import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import YouTube from 'react-youtube';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
import axios from 'axios';
import { toast } from 'react-toastify';
import Rating from '../../components/student/Rating';
import Footer from '../../components/student/Footer';
import Loading from '../../components/student/Loading';
import jsPDF from 'jspdf';

const Player = ({ }) => {

  const { enrolledCourses, backendUrl, getToken, calculateChapterTime, userData, fetchUserEnrolledCourses } = useContext(AppContext)

  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [progressData, setProgressData] = useState(null)
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [initialRating, setInitialRating] = useState(0);

  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : url.split('/').pop();
  }

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course)
        course.courseRatings.map((item) => {
          if (item.userId === userData._id) {
            setInitialRating(item.rating)
          }
        })
      }
    })
  }

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseData()
    }
  }, [enrolledCourses])

  const markLectureAsCompleted = async (lectureId) => {
    try {
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/update-course-progress',
        { courseId, lectureId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (data.success) {
        toast.success(data.message)
        getCourseProgress()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getCourseProgress = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/get-course-progress',
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (data.success) {
        setProgressData(data.progressData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleRate = async (rating) => {
    try {
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/add-rating',
        { courseId, rating },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (data.success) {
        toast.success(data.message)
        fetchUserEnrolledCourses()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    })

    // Background
    doc.setFillColor(245, 245, 245)
    doc.rect(0, 0, 297, 210, 'F')

    // Outer border
    doc.setDrawColor(30, 64, 175)
    doc.setLineWidth(3)
    doc.rect(10, 10, 277, 190)

    // Inner border
    doc.setDrawColor(30, 64, 175)
    doc.setLineWidth(1)
    doc.rect(14, 14, 269, 182)

    // Header background
    doc.setFillColor(30, 64, 175)
    doc.rect(10, 10, 277, 40, 'F')

    // Header title
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text('CERTIFICATE OF COMPLETION', 148.5, 35, { align: 'center' })

    // Subtitle
    doc.setTextColor(30, 64, 175)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('This is to certify that', 148.5, 72, { align: 'center' })

    // Student Name
    doc.setTextColor(30, 64, 175)
    doc.setFontSize(32)
    doc.setFont('helvetica', 'bold')
    doc.text(userData.name, 148.5, 92, { align: 'center' })

    // Underline for name
    doc.setDrawColor(30, 64, 175)
    doc.setLineWidth(0.5)
    doc.line(80, 96, 217, 96)

    // Completion text
    doc.setTextColor(80, 80, 80)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('has successfully completed the course', 148.5, 112, { align: 'center' })

    // Course Name
    doc.setTextColor(30, 64, 175)
    doc.setFontSize(22)
    doc.setFont('helvetica', 'bold')
    doc.text(courseData.courseTitle, 148.5, 128, { align: 'center' })

    // Underline for course
    doc.line(80, 132, 217, 132)

    // Date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    doc.setTextColor(80, 80, 80)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(`Date of Completion: ${date}`, 148.5, 150, { align: 'center' })

    // Platform name
    doc.setTextColor(30, 64, 175)
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Edemy', 148.5, 168, { align: 'center' })

    doc.setTextColor(80, 80, 80)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Online Learning Platform', 148.5, 175, { align: 'center' })

    // Save PDF
    doc.save(`${courseData.courseTitle}_Certificate.pdf`)
  }

  useEffect(() => {
    getCourseProgress()
  }, [])

  // Calculate total and completed lectures
  const totalLectures = courseData
    ? courseData.courseContent.reduce(
        (total, chapter) => total + chapter.chapterContent.length, 0
      )
    : 0

  const completedLectures = progressData?.lectureCompleted?.length || 0
  const isCourseCompleted = totalLectures > 0 && completedLectures >= totalLectures

  return courseData ? (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-5">
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div key={index} className="border border-gray-300 bg-white mb-2 rounded">
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img src={assets.down_arrow_icon} alt="arrow icon" className={`transform transition-transform ${openSections[index] ? "rotate-180" : ""}`} />
                    <p className="font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                  </div>
                  <p className="text-sm md:text-default">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-[2000px]" : "max-h-0"}`}>
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className="flex items-start gap-2 py-1">
                        <img src={progressData && progressData.lectureCompleted.includes(lecture.lectureId) ? assets.blue_tick_icon : assets.play_icon} alt="bullet icon" className="w-4 h-4 mt-1" />
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.lectureUrl && <p onClick={() => setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 })} className='text-blue-500 cursor-pointer'>Watch</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate or Progress Section */}
          {isCourseCompleted ? (
            <div className="flex items-center gap-3 py-3 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <p className="font-semibold text-green-800">🎉 Course Completed!</p>
                <p className="text-sm text-green-600">Congratulations! You have completed this course.</p>
              </div>
              <button
                onClick={generateCertificate}
                className="ml-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium whitespace-nowrap"
              >
                Download Certificate 🎓
              </button>
            </div>
          ) : (
            <div className="py-2 mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                Complete all {totalLectures} lectures to earn your certificate.
                ({completedLectures}/{totalLectures} completed)
              </p>
            </div>
          )}

          {/* Rate Course */}
          <div className="flex items-center gap-2 py-3 mt-4">
            <h1 className="text-xl font-bold">Rate this Course:</h1>
            <Rating initialRating={initialRating} onRate={handleRate} />
          </div>
        </div>

        <div className='md:mt-10'>
          {
            playerData
              ? (
                <div>
                  <YouTube
                    iframeClassName='w-full aspect-video'
                    videoId={getYouTubeVideoId(playerData.lectureUrl)}
                  />
                  <div className='flex justify-between items-center mt-1'>
                    <p className='text-xl'>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                    <button onClick={() => markLectureAsCompleted(playerData.lectureId)} className='text-blue-600'>
                      {progressData && progressData.lectureCompleted.includes(playerData.lectureId) ? 'Completed' : 'Mark Complete'}
                    </button>
                  </div>
                </div>
              )
              : <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
          }
        </div>
      </div>
      <Footer />
    </>
  ) : <Loading />
}

export default Player