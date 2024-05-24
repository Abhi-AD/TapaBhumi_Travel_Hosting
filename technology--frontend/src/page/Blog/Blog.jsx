import { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css'
import './AnimateOnScroll.css'
import { Category } from '../../components/index'
import { FaArrowRight } from 'react-icons/fa'
import { dateFormate } from '../../utils/dateFormate';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
const Blog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchedCatgories = async () => {
    try {
      const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/category/`);
      return responseAll.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }
  const { data, isLoading } = useQuery({ queryKey: ['categories'], queryFn: fetchedCatgories })


  console.log(data, "data")

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/blog/`);

        const filterData = responseAll.data.slice(2);
        setBlogs(filterData);
        const lastestRemainng = responseAll.data.slice(0, 2);
        setLatestBlogs(lastestRemainng)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  if (isLoading) {
    return <p>Loading is here</p>
  }
  return (
    <div className='blog'>
      <Category />
      <div className="container_blog">
        <h1 className='title_blog'>Blog insights</h1>
        <div className="row_blog ">
          {latestBlogs?.map((blog, index) => {
            return (
              <div className="BlogHeader" key={index}>
                <img src={blog.image} alt="BlogHeader" className='js-scroll fade-in fade-in-bottom' />
                <div className="post_card__infoys">
                  <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
                  <h2 className="blog_title">{blog.title}</h2>
                  <p className='blog_des'>{blog.bio.slice(0, 150) + '....'}</p>
                  <Link className="read_more" to={`/blog/${blog.id}`}>
                    <span style={{ paddingRight: '10px' }}>Read more</span>
                    <FaArrowRight className='fa' />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="col_blog">
          {blogs?.map((blog, index) => (
            <div className="card_blog" key={index}>
              <img src={blog.image} alt="Blog1" className='js-scroll fade-in fade-in-bottom ' />
              <div className="post_card__infoys">
                <div className="post_date"><span>{dateFormate(blog.post_date)}</span></div>
                <h2 className="blog_title">{blog.title}</h2>
                <p className='blog_des'>{blog.bio.slice(0, 150) + '....'}</p>
                <Link className="read_more" to={`/blog/${blog.id}`}>
                  <span style={{ paddingRight: '10px' }}>Read more</span>
                  <FaArrowRight className='fa' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default Blog