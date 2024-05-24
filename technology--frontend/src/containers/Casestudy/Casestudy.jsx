import { useEffect, useState } from 'react'
import './Casestudy.css'
import { FaArrowRight } from 'react-icons/fa';
// import Signetic_title from '../../assests/img/CaseStudy/Signetic_title.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Casestudy = () => {
     const [casestudy, setPeoples] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/casestudy/`);
                    setPeoples(responseAll.data)
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);
     return (
          <div className='casestudy'>
               <div className="casestudy-title">
                    <h2 className='casestudy-title-header'>We have <span> a proven track record </span>of ambitious products in complex environments.</h2>
                    <p className="casestudy-title-desc1">Since 2010, we&apos;ve had over 100 fast-growing companies build apps, data-driven products, and cloud solutions that make an impact.</p>
               </div>
               <div className="col_case">
                    {casestudy.map((casestudy, index) => (
                         <Link className="card_case" to={`/case-study-details/${casestudy.id}`} key={index}>
                              <img src={casestudy.case_study_image} alt="Signetic1" className='js-scroll fade-in fade-in-bottom' />
                              <div className="casestudy-card">
                                   {/* <img src={Signetic_title} alt="Signetic_title" /> */}
                                   <h1>ABC</h1>
                                   <h3>{casestudy.case_study_title.slice(0, 50) + '....'}</h3>
                                   <p>{casestudy.case_study_bio.slice(0, 200) + '....'}</p>
                                   <div className='case-card-button'>
                                        <div className='case-card-box'>
                                             <span>read the story</span>
                                             <FaArrowRight />
                                        </div>
                                   </div>
                              </div>

                         </Link>
                    ))}

               </div>
          </div>

     )
}

export default Casestudy
